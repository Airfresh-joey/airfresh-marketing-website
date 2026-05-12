#!/usr/bin/env python3
"""Audit live AFM XML sitemap health without modifying site state."""
from __future__ import annotations

import concurrent.futures as cf
import socket
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from collections import Counter

SITEMAP_URL = "https://www.airfreshmarketing.com/sitemap.xml"
EXPECTED_DOMAIN = "https://www.airfreshmarketing.com"
USER_AGENT = "Hermes-AFM-Sitemap-Audit/1.0"
MAX_WORKERS = 48
TIMEOUT = 20


def fetch(url: str, *, read_limit: int | None = None, method: str = "GET"):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT}, method=method)
    with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
        data = r.read(read_limit) if read_limit else r.read()
        return r.status, r.geturl(), dict(r.headers), data


def check_url(url: str):
    t0 = time.monotonic()
    try:
        status, final_url, headers, data = fetch(url, read_limit=2048)
        return {
            "url": url,
            "ok": 200 <= status < 300,
            "status": status,
            "final_url": final_url,
            "redirected": final_url.rstrip("/") != url.rstrip("/"),
            "content_type": headers.get("content-type", ""),
            "ms": round((time.monotonic() - t0) * 1000),
            "err": "",
        }
    except Exception as e:  # noqa: BLE001
        return {
            "url": url,
            "ok": False,
            "status": None,
            "final_url": "",
            "redirected": False,
            "content_type": "",
            "ms": round((time.monotonic() - t0) * 1000),
            "err": repr(e),
        }


def main():
    print(f"Fetching {SITEMAP_URL}")
    status, final_url, headers, xml_bytes = fetch(SITEMAP_URL)
    print(f"sitemap_status={status} final_url={final_url} content_type={headers.get('content-type')} bytes={len(xml_bytes)}")

    root = ET.fromstring(xml_bytes)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    locs = [el.text.strip() for el in root.findall(".//sm:url/sm:loc", ns) if el.text]
    print(f"url_count={len(locs)}")

    errors: list[str] = []
    if root.tag != "{http://www.sitemaps.org/schemas/sitemap/0.9}urlset":
        errors.append(f"root_tag_unexpected={root.tag}")
    if len(locs) > 50000:
        errors.append(f"too_many_urls={len(locs)}")
    if len(xml_bytes) > 50 * 1024 * 1024:
        errors.append(f"sitemap_too_large={len(xml_bytes)}")

    dupes = [u for u, n in Counter(locs).items() if n > 1]
    non_www_https = [u for u in locs if not u.startswith(EXPECTED_DOMAIN)]
    query_urls = [u for u in locs if urllib.parse.urlparse(u).query]
    fragment_urls = [u for u in locs if urllib.parse.urlparse(u).fragment]
    trailing_double = [u for u in locs if "//" in urllib.parse.urlparse(u).path]
    required = [
        f"{EXPECTED_DOMAIN}/",
        f"{EXPECTED_DOMAIN}/get-quote",
        f"{EXPECTED_DOMAIN}/event-staffing-agency",
        f"{EXPECTED_DOMAIN}/hire-brand-ambassadors",
        f"{EXPECTED_DOMAIN}/services",
        f"{EXPECTED_DOMAIN}/cities/los-angeles",
        f"{EXPECTED_DOMAIN}/city-services/los-angeles-brand-ambassadors",
        f"{EXPECTED_DOMAIN}/blog/festival-marketing-guide",
    ]
    missing_required = [u for u in required if u not in locs]

    print(f"duplicate_count={len(dupes)}")
    print(f"non_www_https_count={len(non_www_https)}")
    print(f"query_url_count={len(query_urls)} fragment_url_count={len(fragment_urls)} double_slash_path_count={len(trailing_double)}")
    print(f"missing_required_count={len(missing_required)}")
    if dupes[:10]: print("duplicate_examples=", dupes[:10])
    if non_www_https[:10]: print("non_www_https_examples=", non_www_https[:10])
    if missing_required: print("missing_required=", missing_required)

    # Robots sanity
    try:
        r_status, r_final, r_headers, robots = fetch(f"{EXPECTED_DOMAIN}/robots.txt")
        robots_text = robots.decode("utf-8", "replace")
        print(f"robots_status={r_status} final_url={r_final} has_sitemap_line={SITEMAP_URL in robots_text}")
    except Exception as e:  # noqa: BLE001
        print(f"robots_error={e!r}")

    print(f"Checking {len(locs)} sitemap URLs with {MAX_WORKERS} workers...")
    with cf.ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        results = list(ex.map(check_url, locs))

    status_counts = Counter(str(r["status"]) for r in results)
    failures = [r for r in results if not r["ok"]]
    redirects = [r for r in results if r["redirected"]]
    slow = sorted(results, key=lambda r: r["ms"], reverse=True)[:10]

    print("status_counts=", dict(sorted(status_counts.items())))
    print(f"failure_count={len(failures)} redirect_count={len(redirects)}")
    if failures:
        print("failure_examples:")
        for r in failures[:50]:
            print(f"  {r['status']} {r['url']} err={r['err']} final={r['final_url']}")
    if redirects:
        print("redirect_examples:")
        for r in redirects[:50]:
            print(f"  {r['status']} {r['url']} -> {r['final_url']}")
    print("slowest_examples:")
    for r in slow:
        print(f"  {r['ms']}ms {r['status']} {r['url']}")

    bad = errors or dupes or non_www_https or query_urls or fragment_urls or trailing_double or missing_required or failures or redirects
    if bad:
        print("AUDIT_RESULT=FAIL")
        return 1
    print("AUDIT_RESULT=PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
