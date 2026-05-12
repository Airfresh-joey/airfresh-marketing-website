# Air Fresh Website Growth Work Log

## 2026-05-10 22:13 MDT

Goal: improve quote funnel conversion on the main `/get-quote` path.

Shipped candidate:
- Fixed staff role selection in the multi-step quote form so clicking the checkbox no longer double-toggles the selected role.
- This removes a conversion blocker on step 3 of the quote funnel where users could fail to select needed staff roles.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,237 sitemap URLs.
- `npm run lint` attempted, but repo lint script is incompatible with current Next CLI and fails with: `Invalid project directory provided, no such directory: .../lint`.

Next actions:
- Commit, push, deploy to Vercel production, and verify `/get-quote` live.
- Fix stale `next lint` script/tooling in a separate cleanup if needed.
- Continue reviewing high-intent pages for CTAs that still send users to `/contact` instead of `/get-quote`.

## 2026-05-10 23:36 MDT

Goal: send high-intent organic traffic directly into the quote funnel instead of the general contact page.

Shipped candidate:
- Updated the `/event-staffing-near-me` page's primary quote CTAs from `/contact` to `/get-quote`.
- Added source/intent query parameters to the quote links so future analytics can distinguish hero, custom staffing, unlisted city, SEO body, and final CTA clicks.
- Left the footer Contact link as `/contact` because it is navigational, not a conversion CTA.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Pending: deploy and verify live.

Next actions:
- Continue the CTA sweep on other high-intent service pages after this deploy verifies.

## 2026-05-12 06:06 MDT

Goal: keep pushing the quote funnel / CTA routing work nonstop, starting with the next high-intent page from the prior audit.

Shipped candidate:
- Updated `/hire-brand-ambassadors` so six quote-intent CTAs route directly to `/get-quote` instead of `/contact`.
- Added source/intent query parameters for hero, process CTA, mid-page CTA, pricing custom quote, SEO body, and final CTA clicks.
- Left navigational/non-quote Contact links alone.
- Resumed the recurring `Air Fresh Website Growth Codex Loop` cron every 120 minutes with the website-only growth/conversion priority stack.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code commit `e95501e` (`fix: route ambassador quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-e2gc4xld0-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/hire-brand-ambassadors`: all six quote-intent links point to `/get-quote?source=hire-brand-ambassadors&intent=...`.
- Verified `/get-quote?source=hire-brand-ambassadors&intent=hero` loads the quote funnel H1.

Next actions:
- Continue CTA routing and quote funnel audit on `/event-staffing-agency`, `/services`, and dynamic city/service pages.

## 2026-05-12 06:58 MDT

Goal: push the next highest-intent quote funnel routing fix after `/hire-brand-ambassadors`.

Shipped candidate:
- Updated `/event-staffing-agency` so six quote-intent CTAs route directly to `/get-quote` instead of `/contact`.
- Added source/intent query parameters for hero, custom solution, process brief, pricing custom quote, SEO body, and final CTA clicks.
- Kept non-quote/internal informational links focused on their destination pages.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA routing and quote funnel audit on `/services`, `/services/food-beverage-sampling`, `/services/trade-show-staffing`, and dynamic city/service pages.
