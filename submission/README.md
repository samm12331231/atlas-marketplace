# Atlas Marketplace — Submission Index

**Candidate:** Sampath Kumar
**Task:** Atlas Marketplace — Intern, Technology, Greenstone (GSE Equity)
**Submitted:** 30 September 2026 (deadline 1 October 2026, 5:00 p.m. GST)

---

## What is in this submission

| # | Brief's requested deliverable | File |
| --- | --- | --- |
| 1 | Concept presentation / written proposal | [CONCEPT.md](CONCEPT.md) |
| 2 | User journeys and flows | [CONCEPT.md §6](CONCEPT.md) plus the **Journey map** screen in the prototype |
| 3 | Visual concept — wireframes / screens / clickable prototype | The `atlas-marketplace` prototype (11 screens) |
| 4 | AI and tools disclosure | [DISCLOSURE.md](DISCLOSURE.md) |
| 5 | Supporting links | The public prototype URL (see below) |

---

## Opening the prototype

The prototype is a running web application, not static images — every screen is clickable, and several contain live branches you can toggle.

### Option A — hosted link (recommended)

A public URL is the safest way to meet the brief's requirement that links *open without requesting permissions*. Anything behind a personal Google Drive, Dropbox or Figma account can prompt for access and will be rejected by a reviewer.

To publish, build the app and drop the resulting `dist/` folder onto a free static host:

```bash
npm install          # or: npm exec --yes pnpm@10 -- install
npm run build        # produces dist/
```

Then either:

- **Netlify Drop** — open <https://app.netlify.com/drop> and drag the `dist/` folder in. Gives a public URL immediately, no account required to start.
- **GitHub Pages** — push the repository and enable Pages on the `dist/` output (or a `gh-pages` branch).
- **Vercel / Cloudflare Pages** — import the repository; build command `npm run build`, output directory `dist`.

### Option B — run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (default <http://localhost:8443>).

---

## Suggested five-minute walk-through

If you only have five minutes, this order shows the concept end to end and hits all three required marketplace areas:

| Order | Screen | What to look at |
| --- | --- | --- |
| 1 | **Journey map** | The whole concept on one page: three lanes (Seller, Buyer, Atlas) across six stages, with the decision points and failure paths shown. |
| 2 | **Create opportunity** | How a seller lists an illiquid interest — position details, unfunded commitment, timing. |
| 3 | **Transferability review** | The gate that most concepts miss: the interest cannot be marketed until the LPA, consent and ROFR position is confirmed. **Click "Simulate failed review"** to see the hard stop. |
| 4 | **Anonymous opportunity** | What a buyer sees before identity is revealed — and what is deliberately withheld. |
| 5 | **Buyer profile** | Representation and trust: masked vs unmasked identity, verified credentials, mandate, track record, references. **Toggle "Under NDA".** |
| 6 | **Q&A and messages** | Communication: one-to-many logged Q&A with response deadlines, plus the one-to-one thread. |
| 7 | **Secure data room** | The evidence a buyer needs to price the asset, plus who viewed what. |
| 8 | **Bid submission** | A bid as a structured package — price, payment, conditions, unfunded treatment, timing — not just a number. |
| 9 | **Compare final bids** | Three bids ranked by economics **and** a certainty score. Note that the seller can shortlist and the highest price is not automatically the best offer. |
| 10 | **Closing dashboard** | Compliance, GP consent and ROFR, documentation, settlement. Open **Scenario controls** on the right: set compliance to *Failed — pause* to see the process stop, or toggle **GP approved** off to see it fall through to the next bidder. |

---

## The concept in one paragraph

Atlas Marketplace is a secondary market for **LP interests in private equity funds** — investors exiting a commitment years before the fund ends, and specialist buyers taking it on, including the unfunded obligation that comes with it. Today these trades run on phone calls, email distribution lists and spreadsheets. Atlas replaces that with one audited, permissioned process: an anonymous teaser, verified counterparties, a data room with access logging, logged Q&A, a defensible valuation anchored on the GP's NAV and settled by sealed competitive bidding, and finally compliance, GP consent and settlement tracked in one place. The first release is deliberately **not** a self-serve exchange — it is a concierge, seller-side-operated process, because with no liquidity an empty marketplace is worse than a phone call, and trust is the scarce resource in this asset class.

---

## Important note on the data

- **Every entity is fictional.** *Northbridge Partners Fund VII* (the fund), *Summit View Family Office* (the seller), *MeridianEvergreen* (the buyer behind the masked profile *Buyer 03*), and the other buyer names are illustrative.
- **Every figure is illustrative and internally consistent**, used to make the screens legible: NAV of $72.4M, 1.84% ownership, $8.2M unfunded, bids of 91.0% / 92.5% / 93.0% of reference NAV, closes measured in 28–45 days.
- **No licensed, purchased, scraped or confidential market data or fund documents were used.** Nothing in this submission comes from a confidential source.

---

## Pre-send checklist

- [ ] Replace the candidate name and any contact details with your own.
- [ ] **Read [DISCLOSURE.md](DISCLOSURE.md) and confirm every statement in it is accurate for how you actually worked.** It is written to be honest, including the parts that are not flattering to the tools — keep it that way. If any tool or step is described incorrectly, correct it.
- [ ] Build and publish the prototype, then **open the link in a private/incognito browser window** to confirm it loads with no sign-in or request-access prompt.
- [ ] Confirm the prototype is readable at a normal laptop width — it is designed desktop-first for a dense, institutional interface, not for phones.
- [ ] Check `submission/CONCEPT.md` renders correctly if converted to PDF, and attach a PDF copy alongside the Markdown.
- [ ] Send to `Cyrus.alavi@gsequity.com` before **Thursday 1 October 2026, 5:00 p.m. GST**.
