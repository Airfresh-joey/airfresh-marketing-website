# Air Fresh Website Growth Work Log

## 2026-05-24 08:02 MDT

Goal: move high-visibility proof/navigation paths toward the stronger case-study hub while keeping the legacy full portfolio available.

Shipped candidate:
- Updated the global desktop/mobile navigation label from `Portfolio` to `Case Studies` and routed it to `/case-studies`.
- Updated the homepage hero secondary CTA from `/portfolio` to `/case-studies` with clearer `View Case Studies` copy.
- Updated the lower homepage proof-section primary CTA to `/case-studies`, leaving a secondary `Browse Full Portfolio` link to preserve access to `/portfolio`.

Checks:
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Pending: commit/push, production deploy, and live custom-domain DOM verification.

Next actions:
- Verify production homepage/nav expose `/case-studies` for the proof CTAs and confirm `/case-studies` returns 200 on the custom domain.

## 2026-05-23 08:08 MDT

Goal: capture buyer-intent traffic from the global footer CTA and route it directly into the attributed quote funnel instead of the general contact page.

Shipped candidate:
- Updated the footer “Ready to Create Something Amazing?” Get Started CTA from `/contact` to `/get-quote?source=site-footer&intent=final-get-started`.
- Preserved the footer Contact navigation link and Join Our Team link, keeping general navigation/candidate paths separate from buyer-intent quote flow.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after build verification.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Commit recorded with this shipment (`fix: route footer cta to quote funnel`).

Next actions:
- Verify production footer DOM after Vercel deploy and confirm `/get-quote` stores `site-footer` / `final-get-started` attribution without submitting a fake lead.

## 2026-05-15 04:39 MDT

Goal: strengthen `/get-quote` conversion clarity and attribution handoff so high-intent CTA traffic visibly carries source/intent context into the quote workflow.

Shipped candidate:
- Added a contextual “Quote context captured” card to the quote page when source/intent or inferred event details are present.
- Displays human-readable source, intent, event, and event type chips without submitting or exposing a fake lead.
- Added a compact `_quoteContext` field to the Formspree JSON payload so source, intent, inferred event, and event type arrive together for easier lead triage.
- Enriched the quote-submit analytics label with `lead_source` and `lead_intent` alongside event type/location.

Checks:
- Live pre-audit confirmed `/get-quote?source=staffing-for-coachella&intent=body-event-page-cta` already stored source/intent and inferred Coachella/Festival; no fake lead submitted.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local browser verification on port 3010 confirmed the new context card renders Source: Coachella, Intent: Body Event Page CTA, Event: Coachella, Type: Festival, and `localStorage.afm_attribution` preserves source/intent.
- Reverted generated `tsconfig.tsbuildinfo` and `next-env.d.ts` after checks/dev verification.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Commit recorded with this shipment (`feat: surface quote attribution context`).
- Pushed code commit `3dc8c9b` to `origin/main` and deployed production via Vercel project `afm-website`: `https://afm-website-3ftfsvwhu-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom-domain browser DOM on `/get-quote?source=staffing-for-coachella&intent=body-event-page-cta&v=3dc8c9b` renders the context card with Source: Coachella, Intent: Body Event Page CTA, Event: Coachella, Type: Festival, and preserves attribution in `localStorage.afm_attribution`.
- Verified `https://airfreshmarketing.com/get-quote?v=3dc8c9b-apex` 308-redirects to the `www` canonical host.

Next actions:
- Continue high-intent `/contact` cleanup and quote form trust/friction improvements.

## 2026-05-15 03:25 MDT

Goal: strengthen above-the-fold homepage internal links by turning the hero positioning chips into clickable service paths for high-intent visitors and crawlers.

Shipped candidate:
- Converted the homepage hero chips for Street Teams, Brand Ambassadors, Event Staffing, and Product Sampling from static text into accessible links.
- Routed the chips to high-intent service pages: `/services/street-teams`, `/brand-ambassador-agency`, `/event-staffing-agency`, and `/product-sampling-agency`.
- Preserved the existing hero quote CTA attribution to `/get-quote?source=homepage&intent=hero-event-staffing-quote` and the above-fold proof stats.

Checks:
- Live pre-audit confirmed the hero service chips were static text while the primary quote CTA already carried source/intent attribution.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Commit recorded with this shipment (`feat: link homepage hero service chips`).
- Pushed to `origin/main` and deployed production via Vercel project `afm-website`: `https://afm-website-fyi5njh2c-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom-domain DOM exposes the four hero service chip links with accessible labels and the expected hrefs.
- Verified all four chip destinations return 200 on the custom domain: `/services/street-teams`, `/brand-ambassador-agency`, `/event-staffing-agency`, and `/product-sampling-agency`.
- Verified `https://airfreshmarketing.com/?v=8b4657e-apex` 308-redirects to the `www` canonical URL.

Next actions:
- Continue homepage/service-page conversion cleanup by auditing any remaining visible buyer CTAs that still go to generic `/contact`.

## 2026-05-15 02:09 MDT

Goal: tighten homepage proof-section conversion by sending the featured Netflix card to the dedicated case study instead of the generic portfolio index.

Shipped candidate:
- Updated the homepage featured proof card from the generic “Netflix Cowboy Bebop Launch” portfolio link to the live `/case-studies/netflix-activations` case study.
- Aligned the visible card title and description with the actual Netflix case-study page: Hollywood red carpet staffing, VIP flow, and fan experience support.
- Preserved the surrounding Skinny Mixes and Grubhub proof cards.

Checks:
- Live pre-audit confirmed the homepage Netflix proof card routed to `/portfolio` while `/case-studies/netflix-activations` returned 200 on the custom domain.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `ad240b6` (`fix: link homepage netflix proof card`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-o89yhc2ve-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom-domain homepage DOM exposes the Netflix proof card with title `Netflix Premiere Events`, supporting copy, and href `/case-studies/netflix-activations`.
- Verified `https://airfreshmarketing.com/?v=ad240b6-apex` 308-redirects to the `www` canonical URL.

Next actions:
- Continue homepage proof/CTA cleanup and high-intent `/contact` cleanup where buyer paths still go to generic pages.
- Audit the case-study index and homepage proof section for other generic or mismatched proof-card destinations.

## 2026-05-15 00:55 MDT

Goal: strengthen sitewide internal linking to high-intent service landing pages from the global navigation while preserving quote-funnel attribution.

Shipped candidate:
- Expanded the desktop/mobile Services navigation data to expose high-intent SEO/conversion pages: Event Staffing Agency, Brand Ambassador Agency, Product Sampling Agency, Experiential Marketing Agency, Trade Show Staffing, and Brand Activation Agency.
- Kept existing service links in place so users can still reach dynamic service pages from navigation.
- Updated the desktop Request Proposal CTA to use the shadcn/Radix `Button asChild` anchor pattern while preserving `/get-quote?source=site-navigation&intent=desktop-request-proposal` attribution.

Checks:
- Live pre-audit confirmed `/get-quote?source=cron-audit&intent=verify` loads on the custom domain without submitting a lead.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `06a473e` (`feat: surface high-intent service pages in nav`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-cixlepx13-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom-domain nav DOM exposes `/event-staffing-agency`, `/brand-ambassador-agency`, `/product-sampling-agency`, `/experiential-marketing-agency`, `/services/trade-show-staffing`, and `/brand-activation-agency` from `nav a`.
- Verified live desktop Request Proposal CTA still routes to `/get-quote?source=site-navigation&intent=desktop-request-proposal` and `/get-quote` stores `lead_source=site-navigation` plus `lead_intent=desktop-request-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/?navcheck=06a473e-prod` redirects to the `www` canonical URL.

Next actions:
- Continue high-intent `/contact` cleanup on non-footer buyer CTAs while leaving partner/candidate/general contact paths alone.
- Audit GSC/impression opportunities if credentials are available; otherwise continue safe internal-link and quote-attribution passes.

## 2026-05-14 20:11 MDT

Goal: continue quote-funnel attribution cleanup by removing remaining bare `/get-quote` buyer links from two high-intent service landing pages.

Shipped candidate:
- Updated `/brand-activation-agency` related-links “Get a Quote” CTA from bare `/get-quote` to `/get-quote?source=brand-activation-agency&intent=related-links-quote`.
- Updated `/product-sampling-agency` related-links “Get a Quote” CTA from bare `/get-quote` to `/get-quote?source=product-sampling-agency&intent=related-links-quote`.
- Preserved true Contact navigation links and existing primary/final quote CTAs.

Checks:
- Live pre-audit confirmed each page exposed one bare `/get-quote` buyer CTA before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.

Next actions:
- Continue buyer-intent CTA attribution cleanup where quote CTAs still use generic destinations, especially remaining service/category pages.
- Audit high-intent `/contact` CTAs that say “Get Started,” “Schedule,” or “Request” and convert only true buyer quote intents into attributed `/get-quote` paths.

## 2026-05-14 18:58 MDT

Goal: continue high-intent CTA routing cleanup on the major-event staffing directory by moving buyer-intent custom-plan traffic into `/get-quote` with source/intent attribution.

Shipped candidate:
- Updated the `/staffing-for` final CTA section so the secondary buyer CTA now routes to `/get-quote?source=staffing-for&intent=custom-event-plan` instead of the generic `/contact` page.
- Rewrote the supporting copy from generic contact language to quote-funnel language: “Share a few details and we'll map a custom staffing plan tailored to your event.”
- Preserved the existing primary `/get-quote?source=staffing-for&intent=final-cta` path and left true navigation/footer contact links untouched.

Checks:
- Live pre-audit confirmed `/staffing-for` still exposed a final-section “Contact Us” buyer CTA to `/contact` before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `c6f4e50` (`fix: route staffing directory custom plan cta`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-myyo0jith-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/staffing-for?v=c6f4e50` exposes the new `Get a Custom Event Plan` CTA with `/get-quote?source=staffing-for&intent=custom-event-plan` on the custom domain.
- Verified `https://airfreshmarketing.com/staffing-for?v=c6f4e50` 308-redirects to the `www` canonical URL.
- Verified `/get-quote?source=staffing-for&intent=custom-event-plan&v=c6f4e50` preserves `lead_source=staffing-for` and `lead_intent=custom-event-plan` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue high-intent `/contact` cleanup on other non-footer buyer CTAs while leaving partner/candidate/general contact paths alone.
- Review remaining index/directory pages for secondary CTAs that should either route into attributed quote URLs or become true informational navigation.

## 2026-05-14 16:52 MDT

Goal: improve the quote funnel for high-intent event staffing pages by carrying event-page context deeper into `/get-quote`.

Shipped candidate:
- Updated `/get-quote` attribution prefill logic so CTAs with `source=staffing-for-{event-slug}` automatically prefill the Event Name field from the event slug.
- Preserved explicit planner/query values as higher priority: `event=` overrides inferred event names, existing service-based mappings still override generic source/intent inference, and no fake leads were submitted.
- Example: `/get-quote?source=staffing-for-arnold-sports-festival&intent=body-event-page-cta` now opens Step 2 with Event Type `Festival / Concert` and Event Name `Arnold Sports Festival`.

Checks:
- Live pre-audit confirmed the event-page quote URL preserved attribution but did not surface the event name before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local production server verification confirmed the Arnold Sports Festival quote path prefills Event Type and Event Name after moving to Step 2 without submitting a lead.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code commit `2c8e320` (`fix: prefill event page quote names`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-5mneon98v-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom domain `/get-quote?source=staffing-for-arnold-sports-festival&intent=body-event-page-cta&v=2c8e320` prefills Event Type `Festival / Concert` and Event Name `Arnold Sports Festival` after Step 1, with attribution stored as `lead_source=staffing-for-arnold-sports-festival` and `lead_intent=body-event-page-cta` in `localStorage.afm_attribution`.
- Verified `https://airfreshmarketing.com/get-quote?...` 308-redirects to the `www` canonical URL.

Next actions:
- Extend quote-form contextual prefill to `/events/{slug}` and venue/event-service source patterns where source slugs can safely infer an event, venue, or market.
- Continue high-intent `/contact` cleanup on non-footer buyer CTAs while leaving partner/candidate/general contact links alone.

## 2026-05-14 15:08 MDT

Goal: continue quote-funnel and internal-link cleanup by fixing event-page body copy that contained escaped static HTML links and adding attribution to the dynamic blog quote card.

Shipped candidate:
- Updated `/staffing-for/[event]` body rendering to render trusted static event `bodyContent` HTML instead of escaping it as literal text, restoring in-copy event/city/service internal links across the generated event staffing pages.
- Rewrote embedded bare `/get-quote` links inside event body content at render time to `/get-quote?source=staffing-for-{event-slug}&intent=body-event-page-cta`.
- Updated dynamic blog article quote cards to route to `/get-quote?source=blog-{slug}&intent=article-cta` instead of a bare quote URL.

Checks:
- Live pre-audit confirmed `/staffing-for/arnold-sports-festival` was exposing escaped `&lt;a href` text before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local production server verification confirmed `/staffing-for/arnold-sports-festival` now renders real body headings/links and rewrites the body quote CTA with source/intent attribution.
- Local production server verification confirmed `/blog/what-is-experiential-marketing` uses `/get-quote?source=blog-what-is-experiential-marketing&intent=article-cta`.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `5c901b8` (`fix: render event body links with quote attribution`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-fhuqwh7tg-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/staffing-for/arnold-sports-festival` renders real body HTML/internal links, no longer exposes escaped `&lt;a href` text, and includes `/get-quote?source=staffing-for-arnold-sports-festival&intent=body-event-page-cta` on the custom domain.
- Verified live `/blog/what-is-experiential-marketing` exposes `/get-quote?source=blog-what-is-experiential-marketing&intent=article-cta` on the custom domain.
- Verified the event body quote URL preserves `lead_source=staffing-for-arnold-sports-festival` and `lead_intent=body-event-page-cta` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/staffing-for/arnold-sports-festival` 308-redirects to the `www` canonical URL.

Next actions:
- Continue high-intent CTA cleanup on remaining buyer-intent non-footer `/contact` links, while leaving partner/candidate/general navigation links alone.
- Review `/get-quote` prefill behavior for these event-page body CTAs and expand source/intent inference if the staffing-for event class should preselect a more specific event type/staff role.

## 2026-05-14 13:36 MDT

Goal: continue high-intent `/contact` cleanup from the prior next action by moving remaining buyer-intent case-study and ambassador recommendation CTAs into the attributed quote funnel.

Shipped candidate:
- Updated `/portfolio/premier-protein` legacy route handling so it 308-redirects to the live `/case-studies/premier-protein-sampling` page instead of the non-existent `/case-studies/premier-protein` URL created by the catch-all portfolio redirect.
- Updated the unreachable `/portfolio/premier-protein` fallback page’s final “Get Started” CTA to `/get-quote?source=portfolio-premier-protein&intent=final-sampling-campaign` so it stays attributed if that static page is ever restored.
- Updated `/hire-brand-ambassadors` inline “Contact our team” recommendation link into clearer quote-funnel copy and `/get-quote?source=hire-brand-ambassadors&intent=ambassador-type-recommendation`.
- Preserved footer/navigation Contact links and partner/candidate-intent contact paths.

Checks:
- Repo/live pre-audit confirmed the target pages still exposed `/contact` links and did not expose the new attributed quote URLs before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.

Next actions:
- Commit, push, deploy, and verify production custom domain for this pass.
- Continue remaining high-intent `/contact` cleanup on non-footer static CTAs; leave partner applications, candidate apply CTAs, and true contact/navigation links on `/contact`.

## 2026-05-14 12:22 MDT

Goal: continue `/get-quote` and high-intent CTA routing cleanup by attributing global quote entry points that previously landed on the quote form without source/intent context.

Shipped candidate:
- Updated the desktop navigation “Request Proposal” CTA to `/get-quote?source=site-navigation&intent=desktop-request-proposal`.
- Updated the mobile navigation “Request Proposal” CTA to `/get-quote?source=site-navigation&intent=mobile-request-proposal`.
- Updated the homepage floating quote CTA to `/get-quote?source=homepage-floating-cta&intent=request-quote` while preserving the direct phone action.

Checks:
- Repo/live pre-audit confirmed the global nav and homepage floating quote CTAs still used bare `/get-quote` before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code commit `3337fef` (`fix: attribute global quote ctas`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-ew7hsemur-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live homepage desktop nav exposes `/get-quote?source=site-navigation&intent=desktop-request-proposal` on the custom domain.
- Verified live homepage floating quote CTA exposes `/get-quote?source=homepage-floating-cta&intent=request-quote` after expansion on the custom domain.
- Verified `/get-quote?source=site-navigation&intent=desktop-request-proposal` preserves `lead_source=site-navigation` and `lead_intent=desktop-request-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/` 308-redirects to the `www` canonical URL.

Next actions:
- Continue high-intent `/contact` cleanup on `/portfolio/premier-protein`, `/hire-brand-ambassadors` inline consultation copy, and any other non-footer CTAs that represent buyer intent rather than general contact or partnerships.

## 2026-05-14 11:06 MDT

Goal: continue high-intent guide CTA attribution by moving remaining quote-intent guide CTAs from general contact into the quote funnel.

Shipped candidate:
- Updated `/guides/best-event-staffing-agency` final “Get a Free Quote” CTA to `/get-quote?source=guide-best-event-staffing-agency&intent=final-free-quote`.
- Updated `/guides/brand-ambassador-hiring-guide` final “Get a Free Quote” CTA to `/get-quote?source=guide-brand-ambassador-hiring&intent=final-free-quote`.
- Normalized both visible phone CTAs to direct `tel:+13037206060` links.

Checks:
- Live pre-audit confirmed both guide final quote CTAs still routed to `/contact` before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code commit `fdc4465` (`fix: attribute guide quote ctas`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-lu9850csk-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/guides/best-event-staffing-agency` and `/guides/brand-ambassador-hiring-guide` expose the new attributed quote-funnel links on the custom domain.
- Verified both guide quote URLs preserve `lead_source`/`lead_intent` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/guides/best-event-staffing-agency` 308-redirects to the `www` canonical URL.

Next actions:
- Continue quote-intent `/contact` cleanup on high-intent non-footer CTAs such as `/portfolio/premier-protein`, `/hire-brand-ambassadors` inline consultation copy, and any partner pages that should represent buyer intent rather than partnership intake.

## 2026-05-14 09:52 MDT

Goal: continue remaining high-intent guide/location CTAs that still routed quote-intent visitors to the general contact page.

Shipped candidate:
- Updated `/industries` final “Get a Custom Quote” CTA to `/get-quote?source=industries&intent=custom-industry-quote` and tightened the supporting copy around staffing, sampling, and activation needs.
- Updated `/locations` headquarters and final project CTAs to attributed quote-funnel links with `source=locations` and distinct intent values, using the preferred `Button asChild` pattern.
- Updated `/guides/event-staffing-101` final “Get a Free Quote” CTA to `/get-quote?source=guide-event-staffing-101&intent=final-free-quote` while preserving the phone CTA.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `d339a09` (`fix: attribute industry location guide quote ctas`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-3k7it4t2d-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/industries`, `/locations`, and `/guides/event-staffing-101` expose the new attributed quote-funnel links on the custom domain.
- Verified `/get-quote?source=locations&intent=final-start-project` preserves `lead_source`/`lead_intent` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/industries` 308-redirects to the `www` canonical URL.

Next actions:
- Continue high-intent CTA attribution on the remaining guide pages and evaluate `/locations` for an above-fold quote CTA or stronger city-selector conversion path.

## 2026-05-14 08:36 MDT

Goal: continue the high-intent CTA routing sweep from the prior next actions by capturing resource and portfolio readers who were still sent to the general contact page from buyer-intent CTAs.

Shipped candidate:
- Updated the `/resources` final consultation CTA from `/contact` to `/get-quote?source=resources&intent=final-free-consultation`.
- Updated the `/portfolio` final “Start Your Project” CTA from `/contact` to `/get-quote?source=portfolio&intent=final-start-project`.
- Converted both CTA buttons to the repo’s preferred `Button asChild` pattern so the anchor is the actionable element.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `8d0d121` (`fix: attribute resource portfolio quote ctas`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-7zs8myg8c-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/resources` and `/portfolio` expose the new attributed quote-funnel links on the custom domain.
- Verified `/get-quote?source=resources&intent=final-free-consultation` and `/get-quote?source=portfolio&intent=final-start-project` preserve `lead_source`/`lead_intent` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/resources` 308-redirects to the `www` canonical URL.

Next actions:
- Continue remaining high-intent guide/location CTAs that still route buyer intent to `/contact`.

## 2026-05-13 22:13 MDT

Goal: continue the high-intent CTA routing sweep by capturing static blog readers who were still being sent to the general contact page from buyer-intent article CTAs.

Shipped candidate:
- Updated 123 buyer-intent static blog article CTAs from `/contact` to attributed `/get-quote` links using `source=blog-<slug>` and `intent=article-cta`.
- Updated the blog index empty-state “Get a Quote” link to `/get-quote?source=blog-index&intent=empty-state-quote`.
- Left the candidate-facing “Apply Now” CTA on `/blog/brand-ambassador-career` on `/contact` instead of routing job seekers into the quote funnel.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Codex CLI was unavailable on this machine (`codex: command not found`), so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `09526f5` (`fix: route blog ctas to quote funnel`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-8850siz8p-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/blog/bilingual-event-staff`, `/blog/what-is-experiential-marketing`, and `/blog` expose the new attributed quote-funnel links on the custom domain.
- Verified `https://airfreshmarketing.com/blog/bilingual-event-staff` 308-redirects to the `www` canonical URL, and `/get-quote?source=blog-bilingual-event-staff&intent=article-cta` preserves `lead_source`/`lead_intent` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue high-intent CTA attribution on `/resources`, `/portfolio`, and any remaining quote-intent non-blog pages still using `/contact`.

## 2026-05-13 20:59 MDT

Goal: continue high-intent venue conversion work after the quote-prefill pass, starting with the `/venues` directory called out in prior next actions.

Shipped candidate:
- Added page-level SEO metadata for `/venues` targeting convention center event staffing and venue staffing nationwide, with an explicit canonical to `https://www.airfreshmarketing.com/venues`.
- Added an above-the-fold hero CTA, “Get Venue Staffing Quote,” routing directly to `/get-quote?source=venues&intent=hero-venue-staffing-quote`.
- Updated the final “Get Free Quote” CTA from `/contact` to `/get-quote?source=venues&intent=final-free-quote`, preserving the direct phone CTA and informational trade show staffing link.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `74ce9c8` (`fix: attribute venues quote ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-p1spvl1os-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/venues` has the convention center event staffing title/canonical and exposes both venue-attributed quote links with `source=venues` and distinct intent values.
- Verified `/get-quote?source=venues&intent=hero-venue-staffing-quote` loads the quote funnel and preserves `lead_source=venues` plus `lead_intent=hero-venue-staffing-quote` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/venues` 308-redirects to `https://www.airfreshmarketing.com/venues`.

Next actions:
- Continue CTA attribution on `/industries`, `/portfolio`, `/resources`, and high-intent blog CTAs that still route buyer intent to `/contact`.

## 2026-05-13 19:40 MDT

Goal: improve the `/get-quote` conversion path and make high-intent CTA attribution immediately useful inside the quote form.

Shipped candidate:
- Added source/intent inference on `/get-quote` so attributed links from service, event, staffing, sampling, retail, festival, sports, tour, and brand-activation pages pre-select the closest event type and staff roles when visitors advance to event/staffing steps.
- Added a compact trust strip under the quote hero highlighting 24-hour response, nationwide vetted teams, and faster scoped quotes.
- Preserved existing UTM/source/intent localStorage attribution and Formspree payload fields; no fake lead was submitted.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local browser verification confirmed `/get-quote?source=event-staffing-agency&intent=hero` stores `lead_source`/`lead_intent` and pre-selects `Corporate Event` after step 1.

Next actions:
- Commit, push, and verify production custom domain after Vercel deploys.
- Next pass: continue improving `/get-quote` and high-intent CTA routing, especially any bare quote links that still lack source/intent.

## 2026-05-13 18:23 MDT

Goal: continue the quote-funnel attribution sweep on scalable blog/resource conversion paths.

Shipped candidate:
- Updated the shared `BlogInternalLinks` quote card used across many static blog posts so the quote CTA keeps visitors in `/get-quote` with `source=blog-internal-links` and `intent=quote-card` attribution instead of an untagged bare funnel link.
- Updated the blog index success-story CTA from `/contact` to `/get-quote?source=blog-index&intent=success-story-consultation`.
- Updated the event planning checklist body CTA from `/contact` to an attributed quote-funnel link with clearer event-staffing quote copy.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, and verify the production custom domain after Vercel deploys.
- Continue routing remaining high-intent resource, review-widget, and navigation-adjacent quote CTAs with source/intent attribution while leaving true Contact navigation alone.

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
- Committed and pushed code/work-log commit `6008f9b` (`fix: route trust page ctas to quote funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-akdfubuna-joey-5223s-projects.vercel.app`, custom domain verified at `https://www.airfreshmarketing.com`.
- Verified live on `/about`, `/team`, and `/tools/roi-calculator`: all changed CTAs now point to attributed `/get-quote?source=...&intent=...` URLs.
- Verified `/get-quote?source=roi-calculator&intent=final-consultation` loads the quote funnel and preserves `lead_source=roi-calculator` plus `lead_intent=final-consultation` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/staffing-for`, `/staffing-for/[event]`, `/technology`, and high-impression blog/internal link modules.

## 2026-05-12 23:26 MDT

Goal: continue quote-funnel attribution on the high-intent `/staffing-for` event-staffing directory and event detail template.

Shipped candidate:
- Updated `/staffing-for` so hero and final quote CTAs route to `/get-quote?source=staffing-for&intent=...` instead of unattributed quote links.
- Updated dynamic `/staffing-for/[event]` pages so urgency, hero, featured case-study, sidebar quote, and final quote CTAs route into `/get-quote` instead of `/contact`.
- Added per-event attribution such as `source=staffing-for-ces&intent=hero`, while preserving true `Contact Us` navigation and phone `tel:` actions.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/technology` and high-impression blog/internal link modules.

## 2026-05-13 00:40 MDT

Goal: continue quote-funnel attribution on high-intent service pages that still had unattributed quote CTAs or phone CTAs routed through `/contact`.

Shipped candidate:
- Updated `/guerrilla-marketing-agency` so the hero, pricing, and final quote CTAs route to `/get-quote?source=guerrilla-marketing-agency&intent=...` instead of unattributed quote links.
- Changed visible phone CTA buttons from `/contact` to direct `tel:+13037206060` actions.
- Converted the changed CTA buttons to the project-preferred `Button asChild` pattern.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `154b2c3` (`fix: attribute guerrilla marketing ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-gyc3o4cqx-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/guerrilla-marketing-agency`: hero, pricing, and final quote CTAs route to attributed `/get-quote?source=guerrilla-marketing-agency&intent=...` URLs; visible phone CTAs route to `tel:+13037206060`.
- Verified `/get-quote?source=guerrilla-marketing-agency&intent=hero` loads the quote funnel and preserves `lead_source=guerrilla-marketing-agency` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/guerrilla-marketing-agency` resolves to the `www` custom domain and contains the attributed CTA URL plus direct phone links.

Next actions:
- Continue CTA attribution on `/technology`, `/event-marketing-agency`, `/promotional-staffing-agency`, and high-impression blog/internal link modules.

## 2026-05-13 01:58 MDT

Goal: continue quote-funnel attribution on the next high-intent service page after the guerrilla marketing sweep.

Shipped candidate:
- Updated `/event-marketing-agency` so hero, unlisted-city, industry-fit, and final quote CTAs route to `/get-quote?source=event-marketing-agency&intent=...` instead of unattributed quote/contact paths.
- Changed above-fold and final phone/schedule-call actions to direct `tel:+13037206060` links so call-intent visitors are not detoured through `/contact`.
- Preserved informational internal links and normal footer/navigation behavior.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `53792ff` (`fix: attribute event marketing ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-ozuqyv1zt-joey-5223s-projects.vercel.app`, custom domain verified at `https://www.airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/event-marketing-agency`: hero, unlisted-city, industry-fit, and final quote CTAs route to attributed `/get-quote?source=event-marketing-agency&intent=...` URLs; call CTAs route to `tel:+13037206060`.
- Verified apex `https://airfreshmarketing.com/event-marketing-agency` resolves to the `www` custom domain and contains the attributed CTA URLs plus direct phone links.
- Verified `/get-quote?source=event-marketing-agency&intent=hero` loads the quote funnel and preserves `lead_source=event-marketing-agency` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/promotional-staffing-agency`, `/technology`, and high-impression blog/internal link modules.



## 2026-05-13 03:17 MDT

Goal: continue quote-funnel attribution on the next high-intent service page after the event marketing sweep.

Shipped candidate:
- Updated `/promotional-staffing-agency` so seven quote-intent CTAs route to `/get-quote?source=promotional-staffing-agency&intent=...` instead of unattributed quote/contact paths.
- Added attribution for hero, custom staffing, pricing custom quote, unlisted city, FAQ pricing, FAQ specialized role, and final CTA clicks.
- Changed visible phone CTA buttons from `/contact` to direct `tel:+13037206060` links so call-intent visitors are not detoured through the contact page.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit for `fix: attribute promotional staffing ctas`.
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-9e0lqhg0z-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/promotional-staffing-agency`: all seven quote-intent links now include `source=promotional-staffing-agency` with distinct intent values; visible phone CTAs route to `tel:+13037206060`.
- Verified apex `https://airfreshmarketing.com/promotional-staffing-agency` resolves to the `www` custom domain.
- Verified `/get-quote?source=promotional-staffing-agency&intent=hero` loads the quote funnel and preserves `lead_source=promotional-staffing-agency` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/technology`, `/field-marketing-agency`, `/mobile-marketing-tours`, and high-impression blog/internal link modules.

## 2026-05-13 04:45 MDT

Goal: improve homepage conversion and make the homepage proposal-builder path land in the dedicated quote funnel instead of the general contact form.

Shipped candidate:
- Sharpened the homepage hero above-fold positioning around event staffing, brand ambassadors, street teams, product sampling, and experiential marketing.
- Changed the primary hero CTA from a vague strategy-audit ask to `Get an Event Staffing Quote` with `source=homepage&intent=hero-event-staffing-quote` attribution.
- Routed the homepage `ActivationPlanner` / proposal-builder CTA to `/get-quote` with `source=activation-planner&intent=proposal-builder` plus planner details.
- Added `/get-quote` prefill support for planner query params so service type, city, date, staff count, budget, roles, and planner summary carry into the quote form without submitting a fake lead.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local browser verification confirmed the homepage H1/CTA updates and the proposal-builder link target.
- Local quote-funnel verification confirmed planner params prefill step 2 fields (`Sampling Campaign`, `Denver`, `2026-07-04`) without submitting a lead.
- Committed and pushed code/work-log commit `79f7f30` (`feat: route homepage planner into quote funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-f3o9oxly4-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/`: H1 now leads with event staffing + brand ambassadors, hero CTA is `Get an Event Staffing Quote`, and the proposal-builder CTA routes to attributed `/get-quote?source=activation-planner&intent=proposal-builder`.
- Verified `/get-quote?source=activation-planner&intent=proposal-builder&service=Product+Sampling&market=Denver&date=2026-07-04&team=12&budget=$10k+-+$25k&message=Planner+summary` preserves `lead_source=activation-planner` and `lead_intent=proposal-builder` in localStorage and prefills quote form event fields without submitting a lead.
- Verified apex `https://airfreshmarketing.com/` 308-redirects to `https://www.airfreshmarketing.com/`.

Next actions:
- Continue CTA attribution on `/technology`, `/field-marketing-agency`, `/mobile-marketing-tours`, and high-impression blog/internal link modules.

## 2026-05-13 05:57 MDT

Goal: continue quote-funnel attribution on the high-intent technology proof page.

Shipped candidate:
- Updated `/technology` so the hero “See a Demo” CTA routes to `/get-quote?source=technology&intent=hero-demo` instead of the general contact page.
- Updated the final “Schedule a Demo” CTA to `/get-quote?source=technology&intent=final-demo` so demo/quote intent is measurable through the quote funnel.
- Normalized the visible phone CTA to `tel:+13037206060` for consistent direct call routing.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `7089fbe` (`fix: attribute technology demo ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-iffh3vivo-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/technology`: hero and final demo CTAs route to attributed `/get-quote?source=technology&intent=...` URLs, and the visible phone CTA routes to `tel:+13037206060`.
- Verified `/get-quote?source=technology&intent=hero-demo` loads the quote funnel and preserves `lead_source=technology` plus `lead_intent=hero-demo` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/technology` 308-redirects to `https://www.airfreshmarketing.com/technology`.

Next actions:
- Continue CTA attribution on `/field-marketing-agency`, `/mobile-marketing-tours`, and high-impression blog/internal link modules.

## 2026-05-13 07:12 MDT

Goal: continue high-intent CTA attribution on `/mobile-marketing-tours` after the technology proof-page pass.

Shipped candidate:
- Added a `quoteHref()` helper for `/mobile-marketing-tours` so quote/proposal CTAs consistently route to `/get-quote?source=mobile-marketing-tours&intent=...`.
- Updated the hero tour proposal CTA, tour-format recommendation link, route-planning CTA, related-links quote pill, final tour proposal CTA, and strategy-call CTA to carry distinct quote-funnel intent values.
- Left navigational `Contact Us` and direct phone links alone.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `fee8679` (`fix: attribute mobile tour ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-gfhxxy12y-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/mobile-marketing-tours`: all six proposal/recommendation/planning/strategy quote CTAs route to `/get-quote?source=mobile-marketing-tours&intent=...` with distinct intent values.
- Verified `/get-quote?source=mobile-marketing-tours&intent=hero-tour-proposal` loads the quote funnel and preserves `lead_source=mobile-marketing-tours` plus `lead_intent=hero-tour-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/mobile-marketing-tours` resolves to `https://www.airfreshmarketing.com/mobile-marketing-tours`.

Next actions:
- Continue CTA attribution on `/field-marketing-agency`, service pages with remaining quote-intent `/contact` links, and high-impression blog/internal link modules.

## 2026-05-13 08:33 MDT

Goal: continue high-intent quote-funnel attribution on `/brand-activation-agency`.

Shipped candidate:
- Added a page-level `quoteHref()` helper for `/brand-activation-agency`.
- Updated five activation/proposal CTAs from bare `/get-quote` links to `/get-quote?source=brand-activation-agency&intent=...`.
- Preserved navigational service links and direct phone CTAs; no fake lead submissions.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `e974033` (`fix: attribute brand activation ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-55wdbia1g-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/brand-activation-agency`: all five activation/proposal CTAs route to `/get-quote?source=brand-activation-agency&intent=...` with distinct intent values.
- Verified `/get-quote?source=brand-activation-agency&intent=hero-activation-proposal` loads the quote funnel and preserves `lead_source=brand-activation-agency` plus `lead_intent=hero-activation-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/brand-activation-agency` 308-redirects to `https://www.airfreshmarketing.com/brand-activation-agency`.

Next actions:
- Continue CTA attribution on `/field-marketing-agency`, `/brand-ambassador-agency`, and remaining high-intent service pages with bare `/get-quote` links.

## 2026-05-13 09:47 MDT

Goal: continue high-intent quote CTA routing and attribution on the next major service landing page.

Shipped candidate:
- Updated `/experiential-marketing-agency` so seven quote-intent CTAs use attributed `/get-quote` URLs instead of the bare quote path.
- Added a local `quoteHref()` helper with `source=experiential-marketing-agency` and unique intent values for hero, activation-type body, process, custom-market, partner-selection, and final CTA clicks.
- Preserved informational/internal links and phone CTA behavior; no fake lead submissions.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed to `main`.
- Deployed production with Vercel CLI: `https://afm-website-koqjd23nk-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/experiential-marketing-agency` exposes all seven attributed quote links and `/get-quote?source=experiential-marketing-agency&intent=hero-campaign-proposal` loads the quote funnel without submitting a lead.

Next actions:
- Continue CTA attribution sweep on `/brand-activation-agency` remaining resource CTA and `/experiential-marketing-agency` adjacent service pages if Search Console access remains unavailable.

## 2026-05-13 11:06 MDT

Goal: continue high-intent quote-funnel attribution on `/field-marketing-agency`, the next major service page called out by the prior run.

Shipped candidate:
- Added a local `quoteHref()` helper for `/field-marketing-agency` with `source=field-marketing-agency` and unique intent values.
- Updated six quote-intent CTAs from bare `/get-quote` or `/contact` routes to attributed quote-funnel URLs: hero, custom strategy, three pricing cards, and final proposal.
- Normalized visible phone CTAs to direct `tel:+13037206060` links and preserved navigational Contact links elsewhere.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `00df500` (`fix: attribute field marketing ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-o9iku4pzl-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and verified on `https://www.airfreshmarketing.com`.
- Verified live `/field-marketing-agency` exposes all six attributed quote links with `source=field-marketing-agency` and distinct `intent` values; visible section phone CTAs route to `tel:+13037206060`.
- Verified `/get-quote?source=field-marketing-agency&intent=hero-field-marketing-quote` loads the quote funnel and preserves `lead_source=field-marketing-agency` plus `lead_intent=hero-field-marketing-quote` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/field-marketing-agency` resolves to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/brand-ambassador-agency`, remaining service pages with bare quote links, and high-intent blog CTAs.

## 2026-05-13 12:20 MDT

Goal: continue high-intent quote-funnel attribution on `/brand-ambassador-agency`, the next page called out by the prior run.

Shipped candidate:
- Added a local `quoteHref()` helper with `source=brand-ambassador-agency` and unique intent values.
- Updated six quote-intent CTAs from bare `/get-quote` or `/contact` routes to attributed quote-funnel URLs: hero, custom ambassador type, campaign brief, pricing custom quote, SEO body proposal, and final CTA.
- Normalized visible phone CTAs to direct `tel:+13037206060` links while leaving footer/global Contact navigation unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `666026e` (`fix: attribute brand ambassador agency ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-k96oo84gd-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/brand-ambassador-agency` exposes all six attributed quote links with `source=brand-ambassador-agency` and distinct `intent` values; visible phone CTAs route to `tel:+13037206060`.
- Verified `/get-quote?source=brand-ambassador-agency&intent=hero` loads the quote funnel and preserves `lead_source=brand-ambassador-agency` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/brand-ambassador-agency` 308-redirects to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/product-sampling-agency`, remaining service pages with bare quote links, and high-intent blog CTAs.

## 2026-05-13 13:30 MDT

Goal: continue high-intent quote-funnel attribution on `/product-sampling-agency`, the next page called out by the prior run.

Shipped candidate:
- Added a local `quoteHref()` helper with `source=product-sampling-agency` and unique intent values.
- Updated five sampling proposal/quote CTAs from bare `/get-quote` links to attributed quote-funnel URLs: hero proposal, custom sampling strategy, pricing custom quote, and both final proposal CTAs.
- Normalized visible phone CTAs to direct `tel:+13037206060` links while preserving informational/internal links.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `e72a77c` (`fix: attribute product sampling ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-e1zsm7wyq-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/product-sampling-agency` exposes all five attributed sampling quote links with `source=product-sampling-agency` and distinct `intent` values; visible phone CTAs route to `tel:+13037206060`.
- Verified `/get-quote?source=product-sampling-agency&intent=hero-sampling-proposal` loads the quote funnel and preserves `lead_source=product-sampling-agency` plus `lead_intent=hero-sampling-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/product-sampling-agency` 308-redirects to the `www` custom domain.

Next actions:
- Continue CTA attribution on remaining service pages with bare quote links and high-intent blog CTAs.

## 2026-05-13 14:45 MDT

Goal: continue high-intent quote-funnel attribution on `/services/retail-activations`, a service page still sending buyer CTAs to `/contact`.

Shipped candidate:
- Added a local `quoteHref()` helper with `source=retail-activations` and unique intent values.
- Routed the hero “Get Started” and final “Get a Free Consultation” CTAs directly to `/get-quote` with source/intent attribution instead of `/contact`.
- Converted the retail page buttons to the Radix-safe `Button asChild` anchor pattern while preserving the case studies link.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `57aaf86` (`fix: attribute retail activation ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-kgdfamezi-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/services/retail-activations` exposes both attributed retail quote links with `source=retail-activations` and distinct `intent` values, while the case studies link remains informational.
- Verified `/get-quote?source=retail-activations&intent=hero-get-started` loads the quote funnel and preserves `lead_source=retail-activations` plus `lead_intent=hero-get-started` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/services/retail-activations` 308-redirects to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/services/luxury-brand-marketing`, `/industries`, `/venues`, and high-intent blog CTAs that still route buyer intent to `/contact`.

## 2026-05-13 15:58 MDT

Goal: continue high-intent quote-funnel attribution on `/services/luxury-brand-marketing`, the next service page called out by the prior run.

Shipped candidate:
- Added a local `quoteHref()` helper with `source=luxury-brand-marketing` and unique intent values.
- Routed the hero consultation CTA and final private consultation CTA directly to `/get-quote` with source/intent attribution instead of `/contact`.
- Converted the affected luxury-page buttons to the Radix-safe `Button asChild` anchor pattern while preserving the portfolio link as informational.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `efb5d17` (`fix: attribute luxury marketing ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-9chii9jlr-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/services/luxury-brand-marketing` exposes both attributed consultation quote links with `source=luxury-brand-marketing` and distinct `intent` values, while the portfolio link remains informational.
- Verified `/get-quote?source=luxury-brand-marketing&intent=hero-private-consultation` loads the quote funnel and preserves `lead_source=luxury-brand-marketing` plus `lead_intent=hero-private-consultation` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/services/luxury-brand-marketing` resolves to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/industries`, `/venues`, and high-intent blog CTAs that still route buyer intent to `/contact`.

## 2026-05-13 17:11 MDT

Goal: continue high-intent quote-funnel attribution on dynamic `/services/[service]` landing pages, which still had bare quote links on core service pages.

Shipped candidate:
- Added a local `quoteHref()` helper to `app/services/[service]/page.tsx` using the requested service slug as `source`.
- Updated the hero “Get a Staffing Quote” and final “Request a Proposal” CTAs to route to `/get-quote` with distinct `intent` values instead of bare quote links.
- Preserved informational links such as portfolio and all-services navigation; no fake lead submissions.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `a76d95b` (`fix: attribute dynamic service ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-d2id0sul1-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/services/brand-ambassadors` exposes the hero and final dynamic service CTAs as `/get-quote?source=brand-ambassadors&intent=...` while preserving the global nav quote link.
- Verified `/get-quote?source=brand-ambassadors&intent=hero-staffing-quote` loads the quote funnel and preserves `lead_source=brand-ambassadors` plus `lead_intent=hero-staffing-quote` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/services/brand-ambassadors` 308-redirects to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/industries`, `/venues`, and high-intent blog CTAs that still route buyer intent to `/contact`.

## 2026-05-14 23:55 MDT

Goal: render blog post markdown links as real anchors (they were being shown as literal `[text](/url)` text on every blog article), and attribute embedded body `/get-quote` CTAs.

Shipped candidate:
- `app/blog/[slug]/page.tsx` `processInlineFormatting` now converts `[label](href)` markdown links into real anchor tags with internal-vs-external handling and a styled underline. Italic regex tightened to avoid eating bold markers.
- `renderContent` now accepts `slug` and rewrites embedded bare `](/get-quote)` to `](/get-quote?source=blog-<slug>&intent=body-blog-cta)` before rendering, restoring buyer-intent attribution inside article bodies.
- This affects ~58 in-body quote CTAs and ~190 in-body internal `/services/...` links across the blog corpus.

Checks:
- `npm run check` passed.
- `npm run build` passed.
- Committed and pushed code commit `a61bdd4` (`fix: render blog markdown links and attribute quote ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-m0tk9grkk-joey-5223s-projects.vercel.app`, aliased to `airfreshmarketing.com` and resolving on `www.airfreshmarketing.com`.
- Verified live `/blog/sports-stadium-brand-activations-guide`: 0 raw markdown link tokens remaining, 28 real `/services/...` anchors in-article, embedded body quote CTA = `/get-quote?source=blog-sports-stadium-brand-activations-guide&intent=body-blog-cta`, and "Activate at your stadium" now renders as an anchor rather than literal text.
- Verified apex `airfreshmarketing.com/blog/...` 308-redirects to the `www` custom domain.

Next actions:
- Audit homepage hero/H1 conversion clarity and proof-above-fold pass.
- Continue GSC opportunity pass on pages with impressions, low CTR, and positions 4–15.
