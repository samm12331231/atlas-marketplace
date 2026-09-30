# AI and Tools Disclosure

**Candidate:** Samyukth Kalathil
**Task:** Atlas Marketplace — Intern, Technology, Greenstone (GSE Equity)
**Date:** 30 September 2026

I used AI tools extensively in this task. This document says exactly which tools, what each one produced, what I decided or changed myself, and how I checked the output. I have tried to be specific rather than reassuring, including where the tools got things wrong.

---

## 1. Summary

| Tool | What it was used for | What it produced | What I did with the output |
| --- | --- | --- | --- |
| **Figma Make** | Generating the starting scaffold for the prototype | A runnable React 19 + Vite + TypeScript app shell: sidebar navigation, status tracker, design system, and first-pass screens (dashboard, create listing, transferability, teaser, data room, bid, compare, closing, journey map) | Kept the shell and design system; removed what did not fit the concept; extended it substantially (see §3) |
| **AI coding assistant (Claude / Codebuff)** | Writing and refactoring the prototype code | The *Buyer profile*, *Q&A and messages*, *Deal flow* and *Seller profile* screens, the two-workspace navigation and role switcher, the six-stage three-lane journey map, all supporting CSS, and repairs to the scaffold's TypeScript | Reviewed every screen in the running app, corrected the design and copy, and fixed the errors it introduced and inherited |
| **AI chat assistant** | Research and pressure-testing | Explanations of secondary-market mechanics (unfunded commitments, GP consent, right of first refusal, % of NAV pricing, LP-led vs GP-led) and challenges to my reasoning on valuation and bidding | Independently checked the mechanics against public secondaries market practice before using them; adopted the framing, rejected several suggestions (see §4) |
| **Public web sources** | Grounding the strategic-fit argument in §1.4 of the concept | The firm's public positioning as a GCC placement agent, its investor and family-office relationships, and its DIFC expansion | Used only publicly stated positioning; internal priorities are not assumed or claimed |
| **Spreadsheet / plain notes** | Structuring the concept, prioritisation, assumptions, alternatives | The v1 in/out scope, assumption list, alternatives table and state machine | Written by me, informed by the AI discussion above |
| **Not used** | — | No licensed or scraped third-party market data; no real fund documents; no confidential information | All named entities and all figures in the prototype are fictional and illustrative |

---

## 2. What the AI did **not** decide

These are the decisions I made, and I can defend each one in the interview:

- **The choice of asset class** — LP interests in private equity funds, rather than physical goods, services or collectables.
- **The core structural judgement** — that Atlas is a *venue and process operator*, not a principal, that it does not value the asset itself, and that the GP must be modelled as a first-class process participant.
- **The prioritisation** — the concierge, seller-side-operated first release; the explicit decision that a self-serve marketplace is the wrong v1; the "not in scope" list.
- **The alternatives analysis** — rejecting an order book, tokenisation, open ascending auctions and public ratings, and the reasons for each.
- **The assumptions list** and the order in which I would validate them.
- **The valuation architecture** — three layers (GP NAV anchor → indicative band → sealed price discovery) and the decision that Atlas never publishes a single-point price.

AI was used as a **sparring partner and a fast implementer**, not as the source of the concept. Where I disagreed with it, I overrode it.

---

## 3. How the prototype was actually built

1. **Scaffold (Figma Make).** Generated a working React/TypeScript app with a dense, institutional design system and a first pass at the screens. This gave me a navigable starting point instead of a blank file.
2. **Filling the gaps I identified.** Reviewing the scaffold against the brief, three requirements were materially missing: **buyer/seller profiles**, **communication**, and **discovery/trust signals**. I specified what those screens needed to contain — masked identity before NDA, verified credentials, mandate, attributable track record, approved references, behavioural metrics; and a logged one-to-many Q&A channel plus a direct thread — and had the AI implement them.
3. **Correcting the journey model.** The scaffold's journey map had five stages and omitted the step where buyers actually *ask* questions — which is where price is really set. I restructured it to **six stages** (Discover, Qualify, Diligence, Ask, Compete, Close) and three lanes (Seller, Buyer, Atlas), with the failure branches made explicit.
4. **Restructuring the navigation around the two sides.** The first version was a single linear pipeline, which framed the whole product as the seller's workspace and showed the buyer only as embedded views. Since the brief's first required area is the *relationship* between the two sides, I split it into two switchable workspaces and added the two screens the buyer side was missing entirely — *Deal flow* (discovery) and *Seller profile* (assessing the counterparty). A review of an alternative prototype built by a family member prompted the rethink of that structure.
5. **Rewriting copy as the domain demanded.** Label text, metric names, bid fields and warnings were rewritten to match how a secondaries process actually works — for example, the status step "NDA" became **"Matching & NDA"** to reflect that qualification and matching happen together, and the unfunded commitment was added as an explicit bid term.
6. **Repairing the scaffold's bugs.** The generated code contained five TypeScript errors (missing semicolons in inline type annotations). The bundler tolerated them; the compiler did not. I found them by type-checking and had them fixed.

---

## 4. What I changed or rejected

- **Rejected:** an early suggestion to include a public five-star rating for buyers and sellers. In this asset class transaction volumes per participant are far too low for a rating to be statistically meaningful, so evidence, verified credentials and behavioural metrics replace it.
- **Rejected:** treating the seller's listing as something the seller could freely edit while live. The asset cannot be marketed before transferability is confirmed, so the listing is gated by a hard stop.
- **Corrected:** copy that implied an Atlas-computed "market price". The NAV is a **reference**, and the indicative band is labelled as an estimate — Atlas should not be the valuer.
- **Corrected:** an initial framing of matching as search. Search would leak seller intent to the market, so discovery is curated and seller-controlled.
- **Verified and kept:** the secondaries mechanics — GP consent, right of first refusal, % of NAV pricing, treatment of unfunded commitments, LP-led vs GP-led split, and the quarterly, lagged nature of NAV.

---

## 5. How I checked the output

**Code correctness**
- Ran the TypeScript compiler over the project — it reports no errors.
- Ran a production build — it completes, with a single JS bundle of ~245 kB (72 kB gzipped).
- Walked every screen in the running application at desktop width and exercised each interactive element: the NDA masked/unmasked toggle on **both** the buyer and seller profiles, the simulated failed transferability review, the bid comparison and shortlisting selection, the compliance-failure and GP-rejection branches on the closing dashboard, and the Q&A screen's logged questions and message thread.
- Checked the role switcher both ways: that switching changes the signed-in user, the navigation and the journey-map lane, that shared screens keep whichever workspace you are in, and that no text overflows and no horizontal scroll appears at 1440px.
- Confirmed the strategic-fit section in §1.4 against the firm's public positioning rather than assuming anything about its internal priorities.

**Design and content correctness**
- Re-read the brief line by line against the built screens to confirm all three required marketplace areas are answered in product, not just in prose.
- Audited every figure on every screen for internal consistency (the NAV, the ownership percentage, the bid percentages, the proceeds figures, the unfunded amount and the closing timeline all reconcile with each other).
- Labelled the interface as a concept: entity names are fictional and the numbers are illustrative, so nothing reads as real market data.

**Where AI output needed human judgement**
- The scaffold was **confidently plausible but not strictly correct** — it looked finished while missing three of the brief's requirements and containing code the compiler rejected. That is the main lesson: AI output shifts effort from writing to **verification**, and the verification is the part that cannot be delegated.
- Domain specifics were the highest-risk area. AI-generated finance content can be fluent and subtly wrong, so every mechanic in the concept was checked against how these transactions are actually run before it went into a screen.

---

## 6. What is mine, and what is machine-generated

- **Mine:** the concept, the asset choice, the marketplace structure, the three required areas' answers, the prioritisation, the assumptions, the alternatives considered, the risk analysis, and this written proposal.
- **Machine-generated, directed and reviewed by me:** the React/TypeScript implementation of the prototype, the CSS, the initial design system, and first-draft screen copy, which I then rewrote.
- **Neither:** no real fund documents, portfolio data, counterparty names or market statistics were used. Nothing in this submission comes from a confidential source.
