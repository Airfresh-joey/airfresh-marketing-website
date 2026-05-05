# Air Fresh Website Deep Review

Date: 2026-05-05

## Current State

Air Fresh already has a serious SEO footprint: thousands of city, service, event, venue, industry, neighborhood, comparison, case study, and blog pages. The site builds successfully and has a strong base of proof assets, service coverage, case studies, and lead capture.

The next level is not "more pages." The next level is turning the site into a sharper trust and conversion machine: faster first impression, clearer proof, fewer broken paths, cleaner technical SEO, and a homepage that feels premium instead of just comprehensive.

## What I Fixed Immediately

1. Fixed a production runtime crash caused by conflicting `/industries` dynamic route segment names.
   - Moved the single-industry route from `app/industries/[slug]` to `app/industries/[industry]`.
   - Updated route params in the industry page/layout.

2. Fixed `/services/event-staffing` returning 404.
   - Added event-staffing metadata.
   - Mapped `/services/event-staffing` to the existing event-management service config so existing internal links resolve.

3. Improved the mobile homepage hero.
   - Made the hero headline visible on first paint instead of waiting for client-side animation.
   - Hid the duplicate large hero logo on mobile.
   - Strengthened text contrast over the hero image.
   - Tightened mobile CTA spacing so "Get Your Strategy Audit" appears in the first viewport.

4. Improved the floating quote CTA on mobile.
   - Moved it from center-bottom to bottom-right on mobile.
   - Shortened the mobile label to "Quote" so it covers less content.

## Verified

- `npm ci` completes.
- `npm run check` passes.
- `npm run build` passes.
- Local production server runs on `http://localhost:3001`.
- Homepage loads after the `/industries` route fix.
- `/services/event-staffing` now loads with the event staffing metadata title.

## Critical Risks

### 1. Security Dependencies

`npm audit --omit=dev --audit-level=high` reported production vulnerabilities, including:

- Critical `fast-xml-parser` issues through AWS SDK paths.
- High `next` advisories.
- High `drizzle-orm` SQL identifier escaping advisory.
- High `nodemailer`, `multer`, `lodash`, `jws`, `express/path-to-regexp`, and glob-related advisories.

Recommendation: run a controlled dependency upgrade branch, not `npm audit fix --force` blindly. Prioritize Next, Drizzle, Nodemailer, Multer, AWS-related packages, and Express/server dependencies.

### 2. Build Type Validation

Status: fixed. `next build` now runs TypeScript validation instead of skipping it.

### 3. Lint Script Is Broken

`npm run lint` runs `next lint`, which is no longer valid for this Next version. It currently fails with:

```text
Invalid project directory provided, no such directory: .../lint
```

Recommendation: add a real ESLint config and update the script to `eslint .`, or adopt the Next-supported lint setup for this version.

### 4. Sitemap Has Duplicate URLs

The sitemap returns 6,237 URL entries but only 6,125 unique URLs. That means at least 112 duplicate entries.

Status: fixed. `app/sitemap.ts` now dedupes by canonical URL before returning.

### 5. Image Config Uses Deprecated `images.domains`

Status: fixed. Remote image hosts now use `images.remotePatterns`.

### 6. Conflicting Robots Sources

There is both `public/robots.txt` and `app/robots.ts`. The app route is currently the one returned locally, but the static file still blocks `/_next/`, which is bad if it ever ships or is served directly.

Status: fixed. `public/robots.txt` is aligned with `app/robots.ts` and no longer blocks `/_next/`.

## Conversion Review

### Homepage

What works:

- Strong category targeting: experiential marketing, brand ambassadors, event staffing.
- Strong trust markers: 500+ brands, 50+ cities, 5000+ ambassadors.
- Good primary CTA direction.
- Real images and case study assets.

What should change:

- The hero should say what Air Fresh does in one sharper line:
  - "Nationwide event staffing and brand activations, verified by tech."
  - Then support with "brand ambassadors, street teams, product sampling, trade shows, pop-ups."
- "Get Your Strategy Audit" is good, but explain the promise nearby: "Free campaign plan, market recommendations, and quote in 24 hours."
- Put one proof row immediately under the hero CTA: client logos, campaign count, cities, nationwide execution network, response time.
- Move the video section lower or make it one concise proof module. Right now the page starts to feel long before the user gets a buying path.
- Reduce the giant service/event link cloud on the homepage. It is SEO useful, but visually it reads like a directory. Make it a searchable/browsable "Find your service, city, or event" module.

### Contact Page

What works:

- Clear hero.
- Call and email options are visible.
- Form asks for minimal required info.
- Strong trust bullets.

What should change:

- Add "Company" back as optional. B2B lead qualification matters.
- Add event date and city fields, even optional, so the team can route faster.
- Add a short reassurance below submit: "No spam. A real campaign lead will review this."
- Consider replacing Formspree with a backend/API route that also sends to CRM, email, Slack, and ad conversion tracking server-side.

## SEO Review

What works:

- Large long-tail footprint.
- Dedicated pages for cities, states, venues, events, industries, and services.
- Structured data exists.
- Sitemaps generate.

What should change:

- Keep monitoring sitemap quality now that duplicates are removed.
- Check all internal links to `/services/event-staffing` and decide whether it should be a real unique page or canonical alias.
- Avoid adding more thin/location pages until the existing page set has stronger unique proof.
- Add more first-party media and case study snippets on city/event pages so they do not feel templated.
- Be careful with aggregate rating schema. Only use review/rating markup where visible reviews and compliant sources support it.
- Add "last reviewed" or "updated" dates to major guides and high-value evergreen pages.

## Brand And Design Direction

To be "the best website" in this category, the site should feel like Air Fresh is:

1. Operationally reliable.
2. Creative enough for memorable activations.
3. Tech-enabled without sounding like generic SaaS.
4. Trusted by real brands with real field execution.
5. Fast to contact and easy to buy.

Suggested homepage narrative:

1. Hero: what you do, who it is for, primary CTA.
2. Proof strip: logos, cities, campaigns, nationwide execution network.
3. "Choose your need": event staffing, brand ambassadors, sampling, trade shows, street teams, mobile tours.
4. Case study wall: real campaigns with photos, numbers, cities, outcomes.
5. Platform/operations: GPS check-in, training, recaps, reporting.
6. Cities/events module: find coverage without overwhelming the page.
7. CTA: request campaign proposal / activation plan.

## Priority Roadmap

### This Week

- Replace broken lint script.
- Upgrade high-risk dependencies in a controlled branch.
- Decide whether `/services/event-staffing` is a unique page or canonical alias.

### Next Sprint

- Redesign homepage information hierarchy around conversion.
- Reduce homepage link-cloud density.
- Add stronger proof cards above the fold.
- Improve mobile menu backdrop and spacing.
- Add company/date/city fields to quote form.
- Add server-side lead handling and CRM routing.

### Bigger Swing

- Build an interactive "Plan my activation" flow:
  - event type
  - city
  - date
  - onsite team size
  - service type
  - budget range
  - output: instant recommended activation plan and next-step CTA

That would make Air Fresh feel more useful than competitors before a sales call even happens.
