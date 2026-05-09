# AirFresh Growth Command Center

Last reviewed: 2026-05-09

## Current Truth

AirFresh has one main production website and several sports/event microsites on subdomains. The main AirFresh sitemap is clean, but it only covers `www.airfreshmarketing.com`. The sports subdomains have their own sitemaps and are separate Google hosts.

## Production Domain Map

| Host | Vercel project / deployment family | Sitemap URLs | Status | Notes |
| --- | --- | ---: | --- | --- |
| `www.airfreshmarketing.com` | `afm-website` | 6,021 | Live | Main production site. Sitemap crawl returned 6,021/6,021 `200` responses. |
| `airfreshmarketing.com` | `afm-website` | Same canonical site | Live | Custom root domain points to the main production project. |
| `f1.airfreshmarketing.com` | `f1-marketing-pro` | 5 | Live | Separate from `afm-f1`; also shares deployment family with `airfresh.co`. |
| `worldcup.airfreshmarketing.com` | `afm-worldcup-2026` | 67 | Live | Separate sports microsite. |
| `mlb.airfreshmarketing.com` | `afm-mlb` | 51 | Live | Separate sports microsite. |
| `nfl.airfreshmarketing.com` | `afm-nfl` | 55 | Live | Separate sports microsite. |
| `nhl.airfreshmarketing.com` | `afm-nhl` | 49 | Live | Separate sports microsite. |
| `nascar.airfreshmarketing.com` | `afm-nascar` | 46 | Live | Separate sports microsite. |
| `olympics.airfreshmarketing.com` | `afm-olympics-2028` | 27 | Live | Separate sports microsite. |
| `nba.airfreshmarketing.com` | Not found / not resolving | 0 | Broken or not created | DNS/Vercel needs wiring if this should be live. |
| `resources.airfreshmarketing.com` | Alias exists historically on `seo-deployments` | 0 | Not resolving | Decide whether to revive, redirect, or remove. |

Known duplicate/confusing project:

| Project | Status | Action |
| --- | --- | --- |
| `airfresh-marketing-website` | Duplicate Vercel project with `.vercel.app` aliases | Delete/retire after explicit approval. Keep `afm-website` as production. |
| `afm-f1` | Exists but does not appear to own `f1.airfreshmarketing.com` | Decide whether to delete, redirect, or keep unused. |

## Google / Sitemap Status

- Main sitemap: `https://www.airfreshmarketing.com/sitemap.xml`
- Main robots: `https://www.airfreshmarketing.com/robots.txt`
- Main sitemap URLs: 6,021
- Main sitemap live crawl: 6,021 `200`, 0 redirects, 0 404s, 0 server errors
- Sports subdomain robots files allow crawling and point at their own sitemap URLs.
- Google Search Console API could not be queried because the current `gcloud` token lacks Search Console scope.

## Lead Growth Priorities

### 1. Own One Money Path

Use `/get-quote` as the main conversion path across the site:

- Header CTA
- Floating CTA
- Service pages
- Comparison pages
- Blog CTAs
- Sports microsites

The contact page can remain as a general contact route, but paid/search/commercial traffic should go to the quote flow.

### 2. Track Every Lead Signal

Track these as first-class conversion events:

- Quote form submit
- Contact form submit
- Phone click
- Email click
- CTA click
- Quote form step progression
- Thank-you page view

Current tracking exists, but it is scattered. Tighten it so GA4, Google Ads, and any CRM all agree on the same lead events.

### 3. Centralize Lead Routing

Replace ad hoc form handling with one lead pipeline:

- Website form submit
- CRM/HubSpot or Supabase lead record
- Email notification
- Optional Slack/text alert
- UTM/referrer/source page attribution
- Google Ads/GA4 conversion

This matters more than another 500 SEO pages.

### 4. Decide Microsite Strategy

The sports subdomains are useful campaign microsites, but they split SEO authority from the main domain. Recommended stance:

- Main domain owns durable SEO pages.
- Subdomains are campaign/landing experiences.
- Every subdomain links strongly back to the main quote path.
- Important sports/event terms also have canonical pages on `www.airfreshmarketing.com`.

### 5. Fix Domain Hygiene

Immediate cleanup:

- Decide/delete duplicate `airfresh-marketing-website`.
- Decide what to do with unused `afm-f1`.
- Wire or kill `nba.airfreshmarketing.com`.
- Decide whether `resources.airfreshmarketing.com` should exist.
- Re-auth Google CLI with Search Console scope or verify manually in Search Console.

## Next Execution Queue

1. Update main site CTAs so commercial pages route to `/get-quote`.
2. Add unified lead event tracking helper and use it for quote/contact/phone/email clicks.
3. Add source/landing attribution to `/get-quote`, matching the contact form.
4. Build a Search Console checklist for each host and submit each sitemap.
5. Fix or remove broken/unowned subdomains.
6. Strengthen top competitor pages: ATN, Ignite, Kinetic, Encore, Assist, Attack.
7. Build outbound lead lists for fast revenue while SEO compounds.

