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
