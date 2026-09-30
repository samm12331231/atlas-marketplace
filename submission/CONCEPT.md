# Atlas Marketplace — Concept Proposal

**Candidate:** Sampath Kumar
**Role applied for:** Intern, Technology — Greenstone (GSE Equity), Dubai
**Date:** 30 September 2026
**Submitted to:** Cyrus Alavi, Managing Director and Head of Technology

**Deliverables in this submission**

| # | Deliverable | Where |
| --- | --- | --- |
| 1 | Written concept proposal | this document |
| 2 | User journeys and decision points | [Section 6](#6-user-journeys-and-decision-points) and the *Journey map* screen in the prototype |
| 3 | Visual concept — clickable prototype | `atlas-marketplace` prototype (11 screens, see [Section 10](#10-how-the-prototype-maps-to-the-brief)) |
| 4 | AI and tools disclosure | [DISCLOSURE.md](DISCLOSURE.md) |
| 5 | Supporting links | [README.md](README.md) |

---

## 0. The idea in six lines

1. **Atlas Marketplace is a secondary market for LP interests in private equity funds.**
2. A seller is an investor (pension fund, family office, fund-of-funds, sovereign investor) who has committed capital to a private fund and wants liquidity **years before the fund's natural end**.
3. A buyer is a specialist secondaries fund, institution or family office willing to take over that commitment — including the **obligation to fund future capital calls**.
4. These trades happen today, but through **phone calls, PDFs, email distribution lists and spreadsheets**. Atlas replaces that with one audited, permissioned process.
5. The hard part is not a shopping cart. It is **trust before identity is revealed, a defensible valuation of an illiquid mark, and a bid that is comparable to another bid**.
6. My first release therefore sells **one interest at a time, to a small qualified buyer set, with Atlas running the process** — not a self-serve exchange.

---

## 1. What is bought and sold, and why this category suits a marketplace

### 1.1 The asset

A **limited partner (LP) interest in a closed-end private fund**: a slice of an existing buyout, growth or credit fund. The position has three unusual properties that shape every screen in this concept:

- **It is priced off an estimate, not a market price.** The only anchor is the fund's **GP-reported NAV**, which is quarterly, lagged by 45–90 days, and based on the GP's own marks of unlisted companies.
- **It carries an obligation.** The buyer inherits **unfunded commitment** — capital the GP can still call. Buyers therefore pay a price as a **percentage of NAV**, and separately decide how to treat the unfunded portion.
- **It cannot be transferred freely.** Transfer almost always requires **GP consent**, may be subject to a **right of first refusal (ROFR)** held by other LPs, and is constrained by the fund's LPA and any side letters.

### 1.2 Why this category suits a marketplace

| Marketplace precondition | LP secondaries |
| --- | --- |
| Fragmented on both sides | Thousands of LPs across thousands of funds; buyers are a few hundred specialist funds, institutions and family offices |
| Genuinely illiquid | No exchange, no clearing house, no public tape |
| High value per transaction | Ticket sizes large enough that a broker-style fee funds a high-touch process |
| Price discovery is weak | Buyers and sellers disagree because the NAV anchor is stale — a marketplace's real value is *credible price discovery* |
| Trust is the bottleneck | You are revealing fund economics and asking two institutions to commit large sums to each other |
| Process is repeated and manual | The same eight steps run on every deal, every time, in email |

A marketplace earns its place where **matching, trust and price discovery are the scarce resources** — which is exactly this asset. It is not a marketplace for something fungible where a price is already published.

### 1.3 Categories I considered and set aside

I chose fund secondaries over the more obvious options deliberately:

- **Physical goods / collectables** — easy to model, but price is usually already discoverable (eBay, auction houses, StockX). The hard problems are logistics and fraud, not valuation or trust at institutional scale.
- **Services / freelance work** — the matching problem is real, but transactions are small, frequent and low-stakes; there is no negotiation architecture to design.
- **Digital goods / collectables** — high volume but the trust, identity and regulated-activity parts of the brief largely disappear, which is where the interesting judgement is.
- **Direct stakes in private companies** — almost the same trust and valuation problems, but deal-by-deal, one-off transactions make a repeatable product process much harder to justify for a first release. This is the natural **v2** (see [Section 8.4](#84-roadmap-after-v1)).

Fund secondaries let me answer all three required marketplace areas with real substance, because each one is a genuine problem rather than a screen I could assume away.

---

## 2. Participants

### 2.1 The seller

| | Persona | What they want | What makes them nervous |
| --- | --- | --- | --- |
| S1 | **Investment operations / treasury lead** at a pension fund or insurer | Clean up an over-committed programme, hit a liquidity or capital target before year-end | Leaking a forced-seller signal; the GP finding out late and badly; a deal that dies at signing |
| S2 | **Principal at a family office** | A one-off exit from a legacy commitment; simplicity | Process cost and time; not knowing whether a price is fair |
| S3 | **Portfolio manager at a fund-of-funds** | Move out of tail-end positions, recycle capital | Managing 20 concurrent small processes; inconsistent buyers |

### 2.2 The buyer

| | Persona | What they want | What makes them nervous |
| --- | --- | --- | --- |
| B1 | **Secondaries fund** | Deal flow, and to win on speed and certainty at a fair price | Wasted diligence effort; sellers who shop their bid; not seeing the real portfolio |
| B2 | **Institutional investor / endowment** | Fills a strategy or vintage gap, small tickets | Being unable to diligence properly; a bid that is not comparable to the others |
| B3 | **Family office** | Access to a fund it would never have been allocated | Trusting an anonymous counterparty; process opacity |

### 2.3 The participant who is not a user — the GP

The **general partner** of the fund is not a buyer or seller, but gates every transaction: transfer consent and the ROFR period. A marketplace that ignores the GP will produce deals that never close. Atlas therefore treats the GP as a **first-class process participant from the beginning**: consent is requested early, the ROFR clock is tracked, and the GP sees only what it needs — that a transfer of a specific interest is proposed, to a qualified transferee.

### 2.4 Atlas's own role

Atlas is the **venue and process operator**, not a principal:

- It does **not** take positions, does **not** custody interests, and does **not** price deals itself on its own book.
- It verifies both sides, runs the process, keeps the audit trail and coordinates closing.
- **Regulatory posture to confirm with counsel:** in the UAE, arranging deals in investments and operating a multilateral trading facility are regulated activities under the DFSA (DIFC) and FSRA (ADGM) regimes. My design assumption is that Atlas operates within a **professional-client-only** perimeter, does not offer retail participation, and either operates under an arranging permission or partners with a licensed broker for execution. This is an assumption I would validate first, because it constrains the product more than any design choice (see [Section 7](#7-assumptions)).

---

## 3. Required area 1 — Buyer and seller relationship

> *How are buyers and sellers represented? How do they discover and assess one another? How do they communicate? What establishes trust?*

### 3.1 Representation — profiles

Each side gets a **profile that is graded, not decorated**. A marketplace profile is not a marketing page; it is a **risk summary** the other side can act on.

**Buyer profile** (prototype screen: *Buyer profile*)

| Block | Contents | Why |
| --- | --- | --- |
| Identity | Legal entity, jurisdiction, regulator status — **masked to "Buyer 03" until the NDA is signed** | Prevents buyers building a picture of who is bidding |
| Atlas credentials | Member since, completed transactions, average funding speed, open disputes | The platform's own track record is the strongest trust signal available |
| Investment mandate | Price range (% of NAV), preferred structures (LP-led / GP-led), target cheque size, close speed, sectors and geographies covered | Lets sellers see **fit**, and lets Atlas match rather than spam |
| Verified track record | Individual closed transactions with the asset type, price and days to close | Evidence, not claims — a referenceable, admin-confirmed record |
| Seller references | Two short quotes from counterparties who closed with them | Social proof, but attributable and permissioned |
| Behavioural signals | Response rate, average time to answer a question, percentage of bids converted | Predicts what working with them feels like |

The masked/unmasked toggle is deliberate: the prototype shows the seller **comparing a masked profile against the same profile after NDA**. The information that matters commercially (mandate, track record, behaviour) is visible before NDA; the information that matters competitively (who they are) is not.

**Seller profile** is the mirror image: verification of the position (statement-confirmed NAV and unfunded), a track record of completed processes, average time to respond to questions, and a clear statement of how many buyers are being shown the deal.

### 3.2 Discovery

Discovery is **curated, not searched**. Buyers do not browse a catalogue of funds — that would leak every seller's intention to the market. Instead:

1. The seller approves an **anonymous teaser** (*Anonymous opportunity* screen): vintage, strategy, region, reference NAV band, fund status (investing/harvesting), investment highlights. No fund name, no seller name, no portfolio detail.
2. Atlas matches it against buyer mandates and produces an **Atlas match score**, with a visible explanation of *why* each buyer matched (mandate fit, cheque size, vintage appetite, close speed).
3. The seller **selects which buyers to invite** — the seller remains in control of their own distribution list. The teaser screen shows a shortlist composition breakdown (in the prototype: 54% secondaries funds, 31% institutions and endowments, 15% family offices) so a seller can deliberately diversify the buyer mix rather than accept whichever buyer Atlas serves first.

This is a design decision with a cost: curated matching is slower and does not scale as fast as an open search. I accept that, because the alternative leaks seller intent — the one thing that destroys price for the seller.

### 3.3 Communication

Two channels, deliberately separated (*Q&A and messages* screen):

**Channel 1 — Logged Q&A (one seller, many buyers).** Every typed question (Q-118, Q-117, Q-116) is visible to **all qualified buyers simultaneously**, with status Answered / Pending and a response deadline ("Awaiting seller response — due within one business day"). This is not a nicety, it is an **anti-selection control**: if one buyer learns something material in a private email, every other bidder is disadvantaged and the process becomes indefensible. One-to-many disclosure also means the seller answers a question **once** instead of eleven times.

**Channel 2 — Direct thread (one-to-one).** For logistics and negotiation: availability, calls, clarifications. Every message is attributable, timestamped and retained. The prototype includes an Atlas system message inside the thread warning both sides that moving an introduction off-platform breaches their agreement — because disintermediation is a real commercial risk of any introduction marketplace.

Unknowns are surfaced explicitly: I have assumed sellers will accept a **one-business-day response SLA** during a live process. If sellers reject that, the Q&A channel becomes a bottleneck and I would fall back to scheduled "Q&A batches" twice a week.

### 3.4 Trust

Trust in this marketplace is **constructed from seven verifiable things**, not from a star rating:

1. **The position is verified** — capital account statement reconciled, LPA and side letters uploaded, GP contact confirmed. A badge is only granted after this.
2. **Transferability is confirmed before marketing** (*Transferability review* screen). Atlas reads the LPA, identifies consent and ROFR provisions and produces a written legal note ("The LPA permits transfers to institutional investors subject to GP consent, which may not be unreasonably withheld"). If a blocking restriction exists, **the process stops and nothing is marketed** — visible in the prototype by simulating a failed review.
3. **Both sides pass compliance** — KYC, AML, sanctions and source-of-funds checks before closing.
4. **Procedural fairness is enforced by the platform** — all qualified buyers see the same teaser, the same data room and the same Q&A.
5. **Behaviour is measured and public** — response times, completion rate, dispute record on every profile.
6. **Money is held, not promised** — a deposit at bid acceptance through an escrow arrangement.
7. **Every action is logged** — who saw what, when, and who said what. This is what makes a dispute resolvable after the fact, and it is why the third footer of the journey map reads *"Every question is logged."*

**Where trust is NOT placed:** I deliberately avoided a public "five-star seller" rating, because transaction volume per participant is far too low for ratings to be statistically meaningful — a seller with two deals has a rating that is noise. Evidence and credentials beat sentiment at this deal frequency.

---

## 4. Required area 2 — Listing and valuation

> *How does a seller create and manage a listing? What information does a buyer need? How is price or value established, supported, compared or challenged?*

### 4.1 Creating and managing the listing

The seller's listing is built in three short steps (*Create an opportunity* screen):

| Step | Fields | Notes |
| --- | --- | --- |
| 01 Fund details | Fund name, strategy, vintage year, fund domicile | Fund name is **never** shown buyer-side before NDA |
| 02 Position details | Current NAV, ownership %, unfunded commitment, NAV as-of date | Pre-filled from the capital account statement where possible; the seller is told explicitly that figures must match the most recent fund statement |
| 03 Timing | Desired signing, desired settlement | Turns the seller's urgency into a **calibrated process**, and lets Atlas sequence buyers by close speed |

The seller then progresses through a managed lifecycle, and the prototype's **status tracker (15 states, Draft → Completed)** is visible on every screen so the seller always knows where the process stands and what happens next. "What happens next" is shown as a three-item list on the listing screen itself (ownership verification → transferability review → anonymous teaser), because a seller who does not understand the next step stalls the process.

**Managing** a live listing means handling events, not editing a post: a buyer joins or drops out, a bid is withdrawn, the NAV is restated in a new quarterly report, the GP declines consent. Each of these has a defined state change in [Section 5.5](#55-transaction-states).

### 4.2 What a buyer needs

A buyer cannot price this asset from a teaser. The **secure data room** (*Secure data room*) gates access and holds the evidence package. The prototype shows four representative documents — the **Q3 capital account statement** (the NAV anchor), the **quarterly GP report**, the **LPA** (with transfer provisions flagged), and the **portfolio company overview** — with the wider package the concept calls for being: audited financials, side letters and the subscription agreement, a company-level portfolio schedule, historical and **projected capital call and distribution cash flows** (the buyer is pricing the whole future obligation, not just today's NAV), concentration and FX risk disclosures, and the process documents (bid rules, baseline terms, timeline).

Access is **gated in three steps and tracked at document level** — the screen states this explicitly, and the gates are visible: *buyer qualification* (approved or pending Atlas review) → *NDA executed* (signed by both parties or not) → *data room access* (unlocked only when both are true). The seller-side intent behind document-level tracking is that a seller can see **who is genuinely working the deal** versus who is fishing — information sellers have never had in an email-based process. The prototype demonstrates the gates and the tracking model rather than a built reporting view for the seller.

### 4.3 How value is established — three layers

The critical design judgement here is that **Atlas should not be the valuer**. The mark belongs to the GP; the price belongs to the market. Atlas's job is to make those two things meet in a defensible way.

| Layer | What it is | Who owns it |
| --- | --- | --- |
| **1. NAV anchor** | The GP's most recent NAV, dated and disclosed as a *reference*, never as "the price" | The GP |
| **2. Indicative band** | An Atlas-derived range expressed as **% of NAV**, built from recent comparable secondary transactions in the same strategy and vintage, adjusted for the age of the NAV mark, portfolio composition, unfunded ratio and the seller's stated timeline | Atlas (as information, clearly labelled as an estimate) |
| **3. Price discovery** | Competing sealed bids from qualified buyers | The market |

The prototype deliberately shows **both**: the teaser carries a *Reference NAV* of $70–75M (a band, acknowledging that the mark is an estimate), while the *Compare final bids* screen shows real bids at 91.0%, 92.5% and 93.0% of NAV. The gap between the band and the outcome is the market's judgement of the mark — and capturing that gap is exactly how Atlas's own comps database gets better over time.

**Supporting** a valuation means giving the buyer the evidence trail behind every input. **Comparing** it means normalising every bid to the same denominator (% of NAV, with the unfunded commitment treated explicitly) so two bids can be read side by side without mental arithmetic.

### 4.4 Challenging a valuation

For an asset whose price rests on someone else's estimate, the marketplace needs a formal way to disagree. Two mechanisms:

1. **Valuation challenge (data room).** A qualified buyer can raise a challenge against a specific NAV component — for example, "the September mark on the European holdings looks stale against the FX move" — with reasoning. The challenge is logged, visible to the seller, and the seller must respond. This produces a written record of what was disputed and how it was resolved, which protects both sides after closing and feeds Atlas's knowledge of which NAV inputs are contested in which vintages.
2. **Confirmatory diligence window.** The winning bid is followed by a period in which the buyer tests its assumptions against the data room before the price becomes binding. Mitigates the risk that a stale mark is discovered after signature.

The prototype includes the FX question (Q-118) that a real buyer would ask, and the seller's answer pointing to a sensitivity memo in the data room — including the seller's obligation to disclose it to **every** buyer, not just the one who asked.

---

## 5. Required area 3 — Bidding and purchase

> *How does a buyer submit a bid or offer? How does negotiation and completion work?*

### 5.1 What a bid must contain

The single biggest failure mode in a private deal process is that **bids are not comparable**. A 93% bid with 15% deferred and a confirmatory-diligence condition is not better than a 91% bid paid 100% at close. So a bid is a **structured package of six elements** (*Bid submission* screen):

| Element | Example | Why it is separate |
| --- | --- | --- |
| Price | % of reference NAV | The headline, but never the whole story |
| Implied purchase price | $ figure at that price | Converts a percentage into a number the seller can bank |
| Payment structure | 100% at close, or 85% / 15% deferred | Deferred consideration shifts risk back to the seller |
| Conditions | GP consent only, vs confirmatory diligence | Conditionality is the single best predictor of whether a deal closes |
| Unfunded treatment | Assumed at 100%, discounted, or excluded | The unfunded obligation is real money the buyer must be able to fund |
| Timing & approvals | Days to close; IC approved vs IC pending | Certainty, not just price |

The prototype's **compare-bids workspace** ranks the three final bids with a **certainty score** (93 / 78 / 96) computed from conditionality, approvals status and close speed. The default selection in the prototype is deliberately **not** the highest headline price: it is 92.5% at 28 days with investment-committee approval (certainty 96), flagged *Atlas preferred*, ahead of 93.0% with 15% deferred consideration and a pending IC (certainty 78). Atlas states its recommendation, and the seller overrides it — the recommendation is information, not a decision. That is the marketplace doing its job: making the **real** difference between offers visible instead of letting a single percentage win an argument.

### 5.2 The bid process — sealed, two rounds

1. **Round 1 — indicative bids.** Sealed. Each buyer sees only their own bid and a coarse competitiveness signal ("competitive" / "not competitive"), never a rival's number or rank.
2. **Shortlist.** The seller selects two or three bidders to advance. The prototype shows two of three shortlisted.
3. **Round 2 — final, conditional bids** after full data room access and Q&A, with the deposit attached.

**Why sealed, and why two rounds?** An open ascending auction drives price but invites buyers to learn each other's appetite, which chills participation over time — and in a market with a handful of repeat buyers, protecting buyer participation protects long-run liquidity. Two rounds gives buyers a chance to react to new information in the data room without turning the process into a price war. Fee structure is a **success fee on close**, never on bid — so Atlas is never paid for producing a bid that does not complete.

### 5.3 Negotiation

Negotiation happens on a **structured, logged surface**, not in email threads:

- The seller can **issue improvement requests** to shortlisted bidders on specific terms ("improve close certainty" or "remove the confirmatory condition") rather than a blunt "raise your price."
- The seller sees a **counter-offer log** per bidder, so the process cannot be spun into a claim no one remembers making.
- A buyer can **revise a bid only while the round is open**; once final bids close, revisions require the seller to reopen the round. Bound rounds are what make a final bid final.
- A buyer may **withdraw**, but the withdrawal is recorded on its profile. Reputation is the enforcement mechanism for behaviour that a contract cannot easily police.

### 5.4 Completion

*Closing dashboard* — Atlas coordinates every party through four tracked milestones and the terminal state. The screen also carries **scenario controls** (compliance Approved / Pending / Failed, and a GP-approved toggle) so both exception paths can be exercised live:

| Milestone | What happens | Exception path in the prototype |
| --- | --- | --- |
| **Buyer & seller compliance** | KYC, AML, sanctions, source of funds | If an exception is raised, **the whole process pauses** — no documentation or settlement activity continues |
| **GP approval & ROFR** | Consent request submitted, 10-day ROFR period tracked | If the GP rejects, the process does **not** collapse: Atlas reconfirms the next shortlisted bidder and restarts consent |
| **Documentation & signing** | Purchase agreement, assignment and tax forms | Shows "In progress · 5 of 8" until the GP clears |
| **Settlement** | Funds transfer and register update, against escrow | Target date shown on the milestone |
| **Completed** (terminal state) | Positions and records updated on both profiles | The 15th and final state in the status tracker |

Target settlement, days remaining, estimated net proceeds and progress (8 of 13 closing items) sit at the top of the closing dashboard as a single **"are we going to close?"** answer, because that is the only question either party has at that stage. Setting compliance to *Failed* pauses everything and 44% progress; toggling GP approval off returns the process to the next shortlisted bidder. Those two branches are the difference between a mock-up and a model of how a private-market deal actually fails.

### 5.5 Transaction states

The state machine is the backbone of the marketplace. Every screen in the prototype is bound to one of these 15 states.

| # | State | Owner | Entry trigger | Exception / branch |
| --- | --- | --- | --- | --- |
| 1 | Draft | Seller | Seller starts a listing | Abandoned |
| 2 | Verification | Atlas | Seller submits | Position cannot be verified → back to seller |
| 3 | Transferability | Atlas Legal | Records verified | Blocking restriction → **marketing prohibited, stop** |
| 4 | Teaser | Seller | Legal note cleared | Seller edits or withdraws |
| 5 | Matching | Atlas | Teaser approved | No matching buyers → widen or hold |
| 6 | NDA & qualification | Buyer + Atlas | Buyer invited, requests access | Buyer fails compliance → excluded |
| 7 | Data room | Seller | NDA countersigned | — |
| 8 | Bidding (round 1) | Buyers | Round opens | No qualifying bid → reprice or withdraw |
| 9 | Final bids (round 2) | Shortlisted buyers | Shortlist confirmed | Bid withdrawn → promote next bidder |
| 10 | Buyer selected | Seller | Bid review | All bids declined → back to 8 |
| 11 | Compliance | Atlas Compliance | Bid accepted | Exception → **pause** |
| 12 | GP approval & ROFR | GP | Consent requested | GP rejects → buyer #2; ROFR exercised → deal ends |
| 13 | Documentation | Both + Atlas | Consent received | — |
| 14 | Settlement | Escrow + Atlas | Documents executed | Buyer default → deposit applied, next bidder |
| 15 | Completed | Atlas | Funds and interest transferred | — |

Three states are **terminals that are not failure**: the seller withdraws, no bid qualifies, or the ROFR is exercised. A marketplace must handle "no deal" honestly, because in this asset class a large share of processes legitimately end without a transaction — the prototype shows the failed-transferability and GP-rejection branches explicitly rather than pretending every listing closes.

---

## 6. User journeys and decision points

The prototype contains a **Journey map** screen with three lanes — **Seller**, **Buyer**, **Atlas** — across six stages, with the decision points marked as diamonds.

**Stages:** 01 DISCOVER → 02 QUALIFY → 03 DILIGENCE → 04 ASK → 05 COMPETE → 06 CLOSE

### 6.1 Seller journey (with decision points)

| Stage | Seller does | Decision point | If "no" |
| --- | --- | --- | --- |
| Discover | Creates the opportunity, sets timing | — | — |
| Qualify | Reviews the transferability opinion | **Is the interest transferable?** | Process stops; nothing is marketed |
| Diligence | Approves the anonymous teaser | — | Edit or withdraw |
| Ask | Answers logged Q&A to all buyers | — | Missed SLA damages the process |
| Compete | Reviews final bids side by side | **Is there a bid worth accepting?** | Reprice, reopen, or withdraw |
| Close | Signs, settles | **Did compliance and the GP clear?** | GP rejection → next bidder; ROFR → deal ends |

### 6.2 Buyer journey

| Stage | Buyer does | Decision point | If "no" |
| --- | --- | --- | --- |
| Discover | Sees an anonymous teaser matching its mandate | — | — |
| Qualify | Requests access, passes KYC, signs the NDA | **Am I qualified, and do I accept the NDA?** | Exit; no fund identity revealed |
| Diligence | Works the data room, examines the portfolio schedule and cash flow forecast | — | Pass without bidding (recorded — honest pass is useful signal) |
| Ask | Asks questions to all buyers simultaneously; raises valuation challenges | — | — |
| Compete | Submits an indicative bid, then a final bid | **Is my price and structure competitive?** | Withdraw before close; recorded on profile |
| Close | Deposits, confirms diligence, signs, funds | **Is my bid accepted and does the GP consent?** | Not selected, or GP rejection, or ROFR |

### 6.3 The Atlas journey

Verify → qualify and match → manage diligence → broker Q&A → run the process → compliance, GP coordination and close. Atlas is the only party present in all six stages, which is the commercial argument for the venue existing at all.

---

## 7. Assumptions

Explicit, so they can be challenged — and each one is a thing I would test first.

1. **Professional-client-only.** All participants are professional/institutional investors. No retail, no mass-market access.
2. **Asset scope in v1:** LP-led transfers of interests in closed-end private funds (buyout, growth, private credit). **GP-led continuation vehicles are out of scope for v1** — even though they are a large and growing share of the secondaries market — because the seller is the GP and the process is structurally different.
3. **Ticket size** large enough to support a high-touch process (illustratively $5m+ of NAV, as in the prototype's ~$72m position). Below that, process cost dominates.
4. **Single interest or small portfolio per process.** No fractionalisation, no tokenisation.
5. **Atlas takes no principal risk** and holds no assets; funds move through escrow.
6. **GP consent is generally obtainable** — I assume the majority of transfers clear, with ROFR exercise being the exception rather than the norm.
7. **Sellers accept a response SLA** (one business day) during a live process.
8. **Regulatory perimeter** is a professional-client arranging venue, confirmed with counsel before launch; execution may route through a licensed partner.
9. **Valuation:** the GP NAV is the anchor and Atlas never publishes a single-point "market price." The indicative band is information, not an offer.
10. **Institutional-grade security** — data room encryption, access logging, audit trail — is a prerequisite, not a feature.
11. **No base rate assumed for the numbers shown in the prototype.** The figures (NAV $72.4M, bids 91.0–93.0%, 28–45 day closes) are **illustrative and internally consistent**, used to make the screens legible; they are not sourced market data.

---

## 8. Prioritisation — what I would build first

### 8.1 The wedge

The chicken-and-egg problem in this market is severe: buyers will not join for a catalogue that does not exist, and sellers will not list without buyers present. I would break it the way the asset's economics allow — **depth on one side, then the other**:

> **v1 = a sell-side-operated, concierge secondary process.** Atlas brings the qualified buyer set (a shortlist of perhaps 10–40 relationships held directly by the Atlas team), runs one to five processes concurrently with heavy manual involvement, and puts the *seller* experience fully in product.

A seller needs only one place to run everything, so a single good process wins a seller. A buyer needs enough deal flow to be worth a login, and that is achieved in v1 by Atlas manually curating the buyer list per deal and inviting them — the platform does not have to be self-serve for buyers to be real.

### 8.2 In scope for the first release

| Area | v1 |
| --- | --- |
| Seller onboarding | Full in-product listing and verification wizard |
| Transferability review | Written Atlas opinion; hard stop if blocked |
| Teaser & matching | Anonymous teaser; Atlas match score with explanation; seller picks the list |
| Buyer side | Profile with verified credentials, NDA gate, data room with access logging |
| Communication | Logged one-to-many Q&A + logged one-to-one threads, with SLAs and audit |
| Valuation | NAV anchor, indicative % NAV band from comps, valuation challenge workflow |
| Bidding | Structured six-element bids, sealed two rounds, compare workspace with certainty score |
| Closing | Compliance, GP consent and ROFR tracking, documentation, escrow settlement, milestone dashboard |
| Trust | Verification badges, behavioural metrics, full audit log |

### 8.3 Deliberately **not** in the first release

| Excluded | Why |
| --- | --- |
| Self-serve buyer signup and open browsing | Leaks seller intent, and matching quality collapses without curation |
| Order book / continuous matching | These assets are not fungible and trade once; an order book models the wrong thing |
| Instant automated valuation | Would turn an estimate into a false price and expose Atlas to liability |
| Fractionalisation / tokenisation | Regulatory weight enormous, demand unproven, and it destroys the single-counterparty simplicity that makes the process work |
| Primary fundraising | Different market, different regulation, different buyer motivation |
| Secondary trading of the interest *after* purchase | No evidence of demand, and it would create a price-discovery problem for a position that has no price |
| GP-led continuation vehicles | Structurally different (the seller is the GP); a v2 |
| Automated document negotiation | Contract terms need lawyers until the baseline-terms library is proven |

### 8.4 Roadmap after v1

- **v1.1** — buyer-side self-serve profile and mandate; automated matching; Atlas comps database exposed as a benchmarking tool.
- **v1.2** — portfolio sales (multiple interests in one process); standardised baseline terms to shorten documentation.
- **v2** — GP-led secondaries (continuation vehicles) as a separate process type; direct secondaries.
- **v3** — data products: secondary pricing benchmarks for the region, the most defensible long-term asset Atlas could own.

### 8.5 What I would measure

| Metric | Why it matters |
| --- | --- |
| Time from listing to first indicative bid | The core liquidity promise |
| Data room views → bid conversion | Are qualified buyers actually working, or window-shopping? |
| Bid spread (highest vs lowest final bid) | Whether price discovery is working |
| Achieved % of NAV vs the indicative band | Is Atlas's pricing guidance calibrated? |
| Completion rate (bids accepted → settled) | The real product is closed transactions, not bids |
| GP consent rate and ROFR incidence | Predicts process feasibility and the size of the addressable pool |
| Non-off-platform leakage | Protects the commercial model |
| Seller and buyer NPS, and repeat participation | Whether the two-sided flywheel is turning |

---

## 9. Alternatives considered and rejected

| Alternative | Why I rejected it | What I kept from it |
| --- | --- | --- |
| **Open exchange with an order book** (like a stock market) | These interests are non-fungible and each trades once. An order book needs continuous price and standardised units; neither exists. | Price discovery through competition — delivered via sealed bidding instead |
| **Fully self-serve marketplace from day one** | With no liquidity, an empty self-serve marketplace is a worse seller experience than a phone call. High-touch is the wedge. | Automation for the seller-side admin, which is where effort is genuinely wasted |
| **Tokenised / fractionalised fund interests** | Heavy regulation, uncertain institutional demand, and it introduces a price-discovery problem for a token whose underlying has no price. | Nothing — worth revisiting only if the regulatory picture changes |
| **Atlas sets an indicative price and market-makes** | Makes Atlas a principal with valuation liability, and removes the market's judgement from the price. | A clearly-labelled indicative band as *information* |
| **Public bidding (open ascending auction)** | Maximises price in a single deal but teaches repeat buyers each other's appetite, chilling participation over time. | Two rounds, with a sealed indicative round |
| **Public ratings for buyers and sellers** | Volumes are too low per participant for a rating to be statistically meaningful. | Behavioural metrics (response rate, close speed, dispute record) and attributable references |
| **Anonymous both ways throughout** | Buyer anonymity is essential pre-NDA; full anonymity through closing makes real-money settlement and compliance impossible. | Progressive disclosure: anonymous teaser → NDA → identity at qualification |
| **Direct stakes in private companies as the first asset** | Same trust problems but one-off transactions, making a repeatable product process much harder to justify in v1. | The verification and diligence architecture, reused directly in v2 |
| **Ignoring the GP and treating consent as paperwork** | Deals would be agreed and never close — the worst possible seller experience. | GP consent and ROFR modelled as tracked states with explicit failure paths |

---

## 10. How the prototype maps to the brief

The prototype (`atlas-marketplace`, 11 screens) is navigable from the sidebar; every screen is bound to a numbered state in the status tracker.

| Brief requirement | Prototype screen |
| --- | --- |
| Seller creates and manages a listing | *Create opportunity* |
| Is the position legally sellable? | *Transferability review* |
| How buyers discover (without leaking the seller) | *Anonymous opportunity* |
| Buyer/seller representation and trust | *Buyer profile* — masked and unmasked, credentials, mandate, track record |
| How they communicate | *Q&A and messages* — logged one-to-many Q&A, direct thread, composer |
| What a buyer needs before pricing | *Secure data room* |
| How a buyer bids | *Bid submission* — structured six-element bid |
| How offers are compared and chosen | *Compare final bids* — certainty score, shortlisting, counter-offer log |
| Compliance, GP consent, ROFR, settlement | *Closing dashboard* — milestones, exception paths, pause and fallback |
| Journeys and decision points | *Journey map* — three lanes, six stages, decision diamonds, failure paths |

---

## 11. Risks and open questions

| Risk | Mitigation |
| --- | --- |
| **Regulatory perimeter** (arranging / MTF) | Confirm with counsel before launch; catalogue-first MVP, professional clients only, execution via a licensed partner if required |
| **Thin liquidity both sides** | One-sided wedge: concierge buyer list curated by Atlas per process |
| **Disintermediation** (parties go direct) | Contractual fee agreements, logged communication, anti-off-platform notice in-thread, and the value of the closing coordination Atlas provides |
| **Valuation disputes** | NAV is a reference, never a price; formal valuation challenge workflow; confirmatory diligence window |
| **Information leakage to the GP or market** | Anonymous teaser, buyer masking until NDA, access logging, seller controls the buyer list |
| **Deal fatigue** (processes that end without a transaction) | Honest failure paths; a well-run non-completion is still a referenceable experience |
| **Data security** | Institutional-grade controls and audit logging as a prerequisite |

**What I would validate first, in order:** (1) the regulatory perimeter; (2) whether sellers genuinely accept a one-business-day response SLA during a live process; (3) whether buyers will bid in a sealed two-round process or demand to see competitors; (4) whether the indicative % NAV band is close enough to outcomes to be trusted. Items 2 and 4 are cheap to test with five interviews and a spreadsheet of comps long before anything is built.
