# Atlas Marketplace — Submission Index

**Candidate:** Samyukth Kalathil
**Task:** Atlas Marketplace — Intern, Technology, Greenstone (GSE Equity)
**Submitted:** 30 September 2026 (deadline 1 October 2026, 5:00 p.m. GST)

---

## What is in this submission

| # | Brief's requested deliverable | File |
| --- | --- | --- |
| 1 | Concept presentation / written proposal | [CONCEPT.md](CONCEPT.md) |
| 2 | User journeys and flows | [JOURNEYS.md](JOURNEYS.md) — standalone, plus [CONCEPT.md §6](CONCEPT.md) and the **Journey map** screen in the prototype |
| 3 | Visual concept — wireframes / screens / clickable prototype | The `atlas-marketplace` prototype — 13 screens across two switchable workspaces |
| 4 | AI and tools disclosure | [DISCLOSURE.md](DISCLOSURE.md) |
| 5 | Supporting links | **<https://samm12331231.github.io/atlas-marketplace/>** — public, no sign-in, no access request |

---

## Opening the prototype

The prototype is a running web application, not static images — every screen is clickable, and several contain live branches you can toggle.

It is organised as **two switchable workspaces**, because the brief's first required area is the relationship between buyers and sellers rather than one side of it:

- **Seller (LP) workspace** — Summit View, a family office exiting a fund interest: create, verify transferability, approve the teaser, review buyer profiles, compare bids, close.
- **Buyer workspace** — MeridianEvergreen, a secondaries fund: matching deal flow, opportunity detail, seller profile, data room, Q&A, bid.

Use the **Seller (LP) / Buyer** switch at the top of the sidebar to change sides. Switching also changes the signed-in user, the navigation and which lane the journey map highlights.

### Option A — the public link (recommended)

**<https://samm12331231.github.io/atlas-marketplace/>**

This is already published on GitHub Pages and needs no sign-in or access request, which is what the brief requires. Anything behind a personal Google Drive, Dropbox or Figma account can prompt for a reviewer to request access, so avoid those.

Source: <https://github.com/samm12331231/atlas-marketplace> (public). Every push to `main` redeploys automatically via the workflow in [.github/workflows/deploy-pages.yml](../.github/workflows/deploy-pages.yml). See [PUBLISH.md](PUBLISH.md) for how it was set up, the Netlify Drop alternative, and the failure-symptom table.

### Option B — run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (default <http://localhost:8443>).

---

## Suggested walk-through

Start on **Journey map** — the whole concept on one page: three lanes (Seller, Buyer, Atlas) across six stages, with decision points and failure paths. Your own lane is highlighted.

The order below shows both workspaces and hits all three required marketplace areas.

### Seller (LP) workspace

| # | Screen | What to look at |
| --- | --- | --- |
| 1 | **Opportunities** | The seller's view of three live processes. Note the **Switch to buyer view** button — the two sides are peers here, not one pipeline. |
| 2 | **Create opportunity** | How a seller lists an illiquid interest — position details, unfunded commitment, timing. |
| 3 | **Transferability** | The gate most concepts miss: the interest cannot be marketed until the LPA, consent and ROFR position is confirmed. **Click "Simulate failed review"** to see the hard stop. |
| 4 | **Anonymous teaser** | What the buyer sees before identity is revealed, from the seller's side that approves it. |
| 5 | **Buyer profile** | Assessing a counterparty: masked vs unmasked identity, verified credentials, mandate, track record, references. **Toggle "Under NDA".** |
| 6 | **Compare bids** | Three bids ranked by economics **and** a certainty score. The highest price is not the default selection. |
| 7 | **Closing** | Compliance, GP consent and ROFR, documentation, settlement. Open **Scenario controls**: set compliance to *Failed — pause* to stop the process, or toggle **GP approved** off to watch it fall through to the next bidder. |

### Buyer workspace

Switch to **Buyer** at the top of the sidebar. The signed-in user, the navigation and the journey map all change.

| # | Screen | What to look at |
| --- | --- | --- |
| 8 | **Deal flow** | Discovery from the other side: mandate-matched opportunities with fit scores, and deliberately **no open search** — a catalogue would leak seller intent. |
| 9 | **Opportunity detail** | The anonymous teaser as the buyer actually receives it. |
| 10 | **Seller profile** | The mirror of *Buyer profile*: the buyer assessing the counterparty. Reconciled position facts, process record, behavioural signals, references. **Toggle "Before NDA"** — the fund name and seller identity are withheld. |
| 11 | **Secure data room** | The evidence a buyer needs to price the asset, gated on qualification then NDA, with document-level tracking. |
| 12 | **Q&A and messages** | One-to-many logged Q&A with response deadlines, plus the one-to-one thread. |
| 13 | **Bid submission** | A bid as a structured package — price, payment, conditions, unfunded treatment, timing — not just a number. |

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
