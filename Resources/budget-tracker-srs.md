# Budget Tracker — Build Roadmap (SRS)

Solo build. Project = primary learning. Reference Scrimba for new concepts, MDN or mentor for deep dives.

---

## v0.1.0 — Core CRUD + localStorage
- **HTML:** form with amount (number input), category (select or text), type (income/expense — radio or select), date (date input), submit button. Empty-list container for rendering transactions.
- **CSS:** none required yet — bare structure is fine. Don't polish before logic works.
- **JS:** array of transaction objects `{id, amount, category, type, date}`. Add on submit, delete per transaction, persist to `localStorage` (stringify/parse). Render list on load and on every change.

## v0.2.0 — Totals & Summary
- **HTML:** summary section (total income, total expenses, balance).
- **CSS:** basic visual separation for the summary block from the list.
- **JS:** compute totals using `.reduce()` — one for income, one for expenses, balance = income − expenses. Recalculate after every add/delete.

## v0.3.0 — Category Filtering
- **HTML:** filter control (dropdown or button group) listing categories in use.
- **CSS:** active-filter highlight (same pattern as SouqTrack's `.sort-btn.active`).
- **JS:** `.filter()` transactions by selected category before rendering. "All" option resets filter.

## v0.4.0 — Dark/Light Mode
- **HTML:** toggle button/switch, placed in header or nav.
- **CSS:** two sets of CSS custom properties (`:root` for one theme, a `[data-theme="light"]` or `.light` class override for the other).
- **JS:** toggle a class/attribute on `<body>` or `<html>` on click; persist choice to `localStorage`; apply saved theme on page load before first paint if possible.

## v0.5.0 — Mobile Burger Menu
- **HTML:** burger icon button, nav/menu container (can hold filters, theme toggle, etc. on small screens).
- **CSS:** menu hidden off-canvas or `display: none` by default on mobile; slide-in or fade transition when open. Desktop breakpoint shows nav normally (burger hidden above `600px`, matching your existing breakpoint).
- **JS:** toggle menu open/closed on burger click — same show/hide pattern you already know from SouqTrack's alert input toggle.

## v0.6.0 — Budget-Limit Notifications
- **HTML:** input to set a monthly budget limit.
- **JS:** compare running total expenses against the limit after each add; when crossed, fire a toast — reuse your exact SouqTrack notification pattern (text span + dismiss button, distinct color per meaning).
- **CSS:** reuse/adapt `.coin-error` / `.coin-success` / `.coin-alert` equivalents.

## v0.7.0 — Chart
- **HTML:** container element for the chart (canvas if using Chart.js, or an SVG if hand-rolling).
- **JS:** category breakdown (pie/bar) or spending-over-time (line/bar) — decide based on which feels more useful once data exists. Library choice (Chart.js vs hand-rolled SVG) to be decided at this stage.
- **CSS:** sizing/responsiveness for the chart container.

## v0.8.0 — Currency Conversion API
- **JS:** fetch live exchange rates from a free API (e.g. frankfurter.app or exchangerate-api). Convert transactions logged in a non-base currency to your base currency for accurate totals.
- **HTML:** currency selector per transaction (extends the v0.1.0 form).
- **CSS:** minor — style the added selector to match existing form inputs.

## v0.9.0 — Export Feature
- **JS:** export transaction list — CSV (simple: build a string, trigger download via a Blob + temporary link) or PDF (more involved — decide scope when you arrive here).
- **HTML:** export button.

## v1.0.0 — Polish + Ship
- Cross-check all versions together, fix rough edges, mobile pass, commit, tag `v1.0.0`, post.

---

**Rule for every version:** don't start the next one until the current one works end-to-end and is committed. One feature, fully done, before the next.
