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

## 2026-05-12 07:16 MDT

Goal: continue quote-intent CTA routing on high-scale dynamic local landing pages.

Shipped candidate:
- Updated dynamic city pages (`/cities/[slug]`) so hero and final quote CTAs route to `/get-quote` with source/intent attribution instead of `/contact`.
- Updated dynamic city-service pages (`/cities/[slug]/[service]`) so hero, sidebar, and final quote CTAs route to `/get-quote` with source/intent attribution.
- Updated canonical city-service SEO pages (`/city-services/[slug]`) so hero and final quote CTAs route to `/get-quote` with source/intent attribution.
- Changed the city-page final “Call (303) 720-6060” action from a tracked contact-page link to a direct `tel:` link, preserving clear phone intent.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA routing on `/services`, `/services/food-beverage-sampling`, `/services/trade-show-staffing`, and event/venue dynamic pages.

## 2026-05-12 08:34 MDT

Goal: continue high-intent attribution work after sitemap verification, starting with event pages showing Search Console opportunity.

Shipped candidate:
- Updated dynamic event pages (`/events/[slug]`) so hero and final quote CTAs route to `/get-quote` with per-event source/intent attribution.
- This covers pages like `/events/adobe-max-2026-los-angeles`, which showed high impressions and low CTR in the latest GSC pass, so any quote clicks can now be tied back to the exact event page and CTA location.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on dynamic event-service pages and venue pages.

## 2026-05-12 08:44 MDT

Goal: make the quote funnel preserve the new `source` / `intent` CTA attribution parameters through submission.

Shipped candidate:
- Extended `lib/lead-attribution.ts` to capture and persist `source` and `intent` query params as `lead_source` and `lead_intent`.
- Updated `/get-quote` Formspree payload to send `_leadSource` and `_leadIntent` with each quote request.
- This makes prior CTA routing work measurable by exact landing page and CTA placement, instead of relying only on the full source URL.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code commit `cf89463` (`fix: preserve quote cta attribution`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-7umfw81ps-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/get-quote?source=cron-attribution-test&intent=hero-test`: status 200, quote funnel H1 present, and browser localStorage captures `lead_source=cron-attribution-test` + `lead_intent=hero-test` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/get-quote?...` resolves to the `www` custom domain and returns the same quote funnel content.

Next actions:
- Continue high-intent CTA routing on `/services/food-beverage-sampling`, `/services/trade-show-staffing`, and venue/event-service pages.


## 2026-05-12 10:08 MDT

Goal: continue high-intent quote CTA routing on the next priority product sampling/service page.

Shipped candidate:
- Updated `/services/food-beverage-sampling` so 10 sampling campaign quote-intent CTAs route directly into `/get-quote` instead of `/contact` or unattributed quote links.
- Added consistent `source=food-beverage-sampling` and intent values for hero, secondary hero, retail-needs, mid-page, why-choose, city-not-listed, related-card, final CTA, final secondary, and final text quote paths.
- Left true navigation links such as pricing, city/service links, and the phone `tel:` action untouched.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code commit `e914eeb` (`fix: route sampling quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-2btffg4k8-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/services/food-beverage-sampling`: all 10 sampling quote/campaign/contact-intent links route to `/get-quote?source=food-beverage-sampling&intent=...` while footer/navigation Contact remains `/contact`.
- Verified `/get-quote?source=food-beverage-sampling&intent=hero` loads the quote funnel and preserves `lead_source=food-beverage-sampling` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/services/trade-show-staffing`, venue pages, and dynamic event-service pages.

## 2026-05-12 11:21 MDT

Goal: continue the quote-funnel routing sweep on high-scale dynamic event-service pages.

Shipped candidate:
- Updated `/events/[slug]/[service]` so hero, sidebar custom quote, and final quote CTAs route directly to `/get-quote` instead of `/contact`.
- Added source/intent attribution with both event and service slugs, e.g. `source=events-adobe-max-2026-los-angeles-brand-ambassadors` plus intent values for hero, sidebar custom quote, and final CTA.
- This covers 1,024 event-service pages generated in the build, including event-specific brand ambassador, event staff, promotional model, and trade show staff combinations.
- Preserved the concurrent neighborhood-page CTA routing improvement so `/neighborhoods/[neighborhood]` hero and final CTAs now route to attributed `/get-quote` URLs instead of `/contact`.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on venue pages and `/services/trade-show-staffing`.

## 2026-05-12 11:23 MDT

Goal: extend quote-funnel attribution to the remaining high-scale neighborhood service SEO pages.

Shipped candidate:
- Updated `/neighborhoods/[neighborhood]/[service]` so hero and final “Get Free Quote” CTAs route directly into `/get-quote` instead of `/contact`.
- Added per-page source/intent attribution such as `source=neighborhood-soho-brand-ambassadors&intent=hero` and `intent=final-cta`.
- This covers 175 neighborhood-service landing pages for hyper-local brand ambassador, event staffing, promotional model, street team, and product sampling searches.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code commit `f905f36` (`fix: route neighborhood service quote ctas to funnel`).
- Deployed production via Vercel project `afm-website` and verified the custom domain `https://www.airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/neighborhoods/soho/brand-ambassadors`: both visible “Get Free Quote” CTAs route to `/get-quote?source=neighborhood-soho-brand-ambassadors&intent=hero` and `intent=final-cta`.
- Verified `/get-quote?source=neighborhood-soho-brand-ambassadors&intent=hero` loads the quote funnel and preserves `lead_source=neighborhood-soho-brand-ambassadors` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on venue pages and `/services/trade-show-staffing`.

## 2026-05-12 12:55 MDT

Goal: continue high-scale quote-funnel routing on venue SEO pages.

Shipped candidate:
- Updated dynamic venue pages (`/venues/[slug]`) so hero and final quote CTAs route directly into `/get-quote` instead of `/contact`.
- Updated dynamic venue-service pages (`/venues/[slug]/[service]`) so hero, sidebar custom quote, and final quote CTAs route to `/get-quote`.
- Added source/intent attribution with venue and service slugs, e.g. `source=venue-las-vegas-convention-center-brand-ambassadors` plus `intent=hero`, `sidebar-custom-quote`, or `final-cta`.
- This covers 46 venue landing pages and 552 generated venue-service pages in the current build.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `9aa0b8d` (`fix: route venue quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-cnrqm64xk-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/venues/las-vegas-convention-center`: both visible quote CTAs route to `/get-quote?source=venue-las-vegas-convention-center&intent=hero` and `intent=final-cta`.
- Verified live on `https://www.airfreshmarketing.com/venues/las-vegas-convention-center/brand-ambassadors`: hero, sidebar, and final quote CTAs route to `/get-quote?source=venue-las-vegas-convention-center-brand-ambassadors&intent=...`.
- Verified `/get-quote?source=venue-las-vegas-convention-center-brand-ambassadors&intent=hero` loads the quote funnel and preserves `lead_source=venue-las-vegas-convention-center-brand-ambassadors` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/services/trade-show-staffing`, `/pricing`, and remaining high-intent static service pages.

## 2026-05-12 14:09 MDT

Goal: continue quote-funnel attribution on comparison pages where competitor-evaluation visitors are close to requesting pricing.

Shipped candidate:
- Updated the `/compare` hub plus all 24 competitor comparison pages so final “Get a Free Quote” CTAs route directly into `/get-quote` instead of `/contact`.
- Added source/intent attribution for each comparison page, e.g. `source=compare-advantage-solutions&intent=final-cta`.
- Updated comparison-page related “Request a Quote” links to `/get-quote` with `intent=related-request-quote` where present.
- This covers 37 high-intent quote links across the comparison section while leaving service, pricing, portfolio, and other informational links unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `5c9d197` (`fix: route comparison quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-44gqyz6ur-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/compare/advantage-solutions`: visible “Request a Quote” and “Get a Free Quote” links route to `/get-quote?source=compare-advantage-solutions&intent=related-request-quote` and `intent=final-cta`.
- Verified live on `https://www.airfreshmarketing.com/compare`: final “Get a Free Quote” routes to `/get-quote?source=compare&intent=final-cta`.
- Verified `/get-quote?source=compare-advantage-solutions&intent=final-cta` loads the quote funnel and preserves `lead_source=compare-advantage-solutions` plus `lead_intent=final-cta` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/services/trade-show-staffing`, `/pricing`, and remaining high-intent static service pages.

## 2026-05-12 15:33 MDT

Goal: continue quote-funnel attribution on the next high-intent static service page.

Shipped candidate:
- Updated `/services/trade-show-staffing` so five quote-intent CTAs route directly into `/get-quote` instead of `/contact`.
- Added consistent `source=trade-show-staffing` and intent values for hero, venue-location, mid-page, final CTA, and final text quote paths.
- Left informational links such as case studies, event management, pricing, related service links, and the phone `tel:` action unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `2a3be0f` (`fix: route trade show quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-4jw6dgx84-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/services/trade-show-staffing`: visible quote-intent links route to `/get-quote?source=trade-show-staffing&intent=hero`, `venue-location`, `mid-page`, `final-cta`, and `final-text`; footer Contact remains `/contact`.
- Verified `/get-quote?source=trade-show-staffing&intent=hero` loads the quote funnel and preserves `lead_source=trade-show-staffing` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/services/trade-show-staffing` resolves to the `www` custom domain and contains the attributed CTA URLs.

Next actions:
- Continue CTA attribution on `/pricing`, `/services`, and remaining high-intent static service pages.

## 2026-05-12 16:56 MDT

Goal: continue quote-funnel attribution on high-scale state SEO pages.

Shipped candidate:
- Updated dynamic state pages (`/states/[state]`) so hero and final “Get Free Quote” CTAs route directly into `/get-quote` instead of `/contact`.
- Updated dynamic state-service pages (`/states/[state]/[service]`) so hero and final quote CTAs route into `/get-quote` with both state and service slugs in attribution.
- Added source/intent patterns such as `source=state-california&intent=hero` and `source=state-california-brand-ambassadors&intent=final-cta`, covering 51 state pages plus 459 state-service pages.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/pricing`, `/services`, and remaining high-intent static service pages.

## 2026-05-12 17:18 MDT

Goal: continue converting proof/case-study traffic into attributed quote-funnel sessions.

Shipped candidate:
- Updated the case-studies hub final “Start Your Project” CTA from `/contact` to `/get-quote?source=case-studies&intent=final-cta`.
- Updated dynamic case-study detail pages (`/case-studies/[id]`) so the final “Start Your Project” CTA routes to `/get-quote?source=case-study-${caseStudy.id}&intent=final-cta`.
- Kept portfolio/view-more-work navigation unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/pricing`, `/services`, and remaining high-intent static service pages.

## 2026-05-12 18:10 MDT

Goal: keep moving high-intent service/event/industry visitors into the attributed quote funnel.

Shipped candidate:
- Updated the `/services` hub hero and final conversion CTAs from `/contact` to `/get-quote?source=services&intent=...`.
- Updated the `/events` directory custom event/secondary Olympics CTAs to `/get-quote?source=events-directory&intent=...` while leaving phone and event-detail navigation alone.
- Updated dynamic industry pages (`/industries/[industry]`) so hero/final quote CTAs preserve `source=industry-${industrySlug}` with hero/final intent.
- Updated dynamic industry-city pages (`/industries/[industry]/[city]`) so hero and final quote CTAs preserve both industry and city slugs, covering 320 generated local industry pages.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/pricing`, `/team`, `/about`, ROI/checklist tools, and high-impression blog posts that still use quote-intent `/contact` links.

## 2026-05-12 19:37 MDT

Goal: continue static high-intent service page CTA attribution after the industry/event sweep.

Shipped candidate:
- Updated `/corporate-event-staffing` so four quote-intent CTAs route to `/get-quote?source=corporate-event-staffing&intent=...` instead of unattributed quote/contact paths.
- Added attribution for hero, city-coverage, trust-section, and final CTA paths.
- Changed visible “Call (303) 720-6060” actions from `/contact` to direct `tel:+13037206060` links so phone-intent users are not detoured through the contact page.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/pricing`, `/team`, `/about`, ROI/checklist tools, and high-impression blog posts that still use quote-intent `/contact` links.


## 2026-05-12 20:50 MDT

Goal: route pricing-page quote intent directly into the attributed quote funnel.

Shipped candidate:
- Updated `/pricing` so three quote-intent CTAs route to `/get-quote?source=pricing&intent=...` instead of `/contact`.
- Added attribution for hero, freelance comparison, and final CTA clicks.
- Left informational navigation such as rate tables, locations, resources, and services unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `09548fb` (`fix: route pricing quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-e688sxuuw-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/pricing`: hero, freelance comparison, and final quote CTAs route to `/get-quote?source=pricing&intent=...`.
- Verified apex `https://airfreshmarketing.com/pricing` resolves to the `www` custom domain and contains the attributed CTA URLs.
- Verified `/get-quote?source=pricing&intent=hero` loads the quote funnel and preserves `lead_source=pricing` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/team`, `/about`, ROI/checklist tools, and high-impression blog posts that still use quote-intent `/contact` links.


## 2026-05-12 22:06 MDT

Goal: continue quote-funnel attribution on remaining high-intent trust/tool pages after the pricing sweep.

Shipped candidate:
- Updated `/about` so the hero “Start Your Project” and final “Get Started Today” CTAs route to `/get-quote?source=about&intent=...` instead of `/contact`.
- Updated `/team` so the final “Start a Project” CTA routes to `/get-quote?source=team&intent=final-cta`.
- Updated `/tools/roi-calculator` so results, SEO body, and final consultation CTAs route into `/get-quote?source=roi-calculator&intent=...` instead of the general contact page.
- Left informational service/about links and normal navigation untouched.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/staffing-for`, `/staffing-for/[event]`, `/technology`, and high-impression blog/internal link modules.
