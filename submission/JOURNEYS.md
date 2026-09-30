# Atlas Marketplace — User Journeys and Decision Points

**Deliverable 2 of the brief.** Standalone written companion to the prototype.

**Presentation version:** [journeys-deck.pdf](journeys-deck.pdf) (11 slides) or [journeys-deck.html](journeys-deck.html) to present from a browser. The deck follows the structure of this document, slide by slide.

> **This file is the source of truth for the journeys.** If you build a deck, a diagram or a visual from it, reuse the labels here **exactly** — the stage names, the decision questions and the exception outcomes. An invented synonym for a stage is how two deliverables end up contradicting each other, and inconsistency reads worse than either one alone.

Stage names, decision points and outcomes below match the prototype's *Journey map* screen and its 15-state status tracker exactly.

The prototype implements these journeys as **two switchable workspaces** — the LP seller's and the secondaries buyer's — because a single linear pipeline hides one of the two sides the brief asks about. The journey map highlights the lane belonging to whichever workspace you are in.

---

## 1. The six stages

| # | Stage | The question this stage answers | Where the transaction state sits |
| --- | --- | --- | --- |
| 01 | **DISCOVER** | Does a tradeable position exist, and who might want it? | Draft → Verification → Transferability → Teaser → Matching |
| 02 | **QUALIFY** | Is this counterparty allowed to see the deal? | Matching & NDA |
| 03 | **DILIGENCE** | What is actually being bought? | Data Room |
| 04 | **ASK** | What is still unknown, and who else needs to know it? | Data Room (live) |
| 05 | **COMPETE** | What is it worth, and on what terms? | Bidding → Final Bids → Buyer Selected |
| 06 | **CLOSE** | Can it actually complete? | Compliance → GP Approval → Documentation → Settlement → Completed |

**Why these six and not five.** Stage 04 exists as its own stage deliberately. In a private-market process, price is not set at the bidding stage — it is set by what the buyer learns about a stale NAV during Q&A. Folding ASK into DILIGENCE hides the step where value is actually established, and hides the fairness rule that every answer goes to every qualified buyer.

---

## 2. The journey map

Three lanes across six stages. **D** = decision point, **✕** = exception outcome.

| Participant | 01 DISCOVER | 02 QUALIFY | 03 DILIGENCE | 04 ASK | 05 COMPETE | 06 CLOSE |
| --- | --- | --- | --- | --- | --- | --- |
| **SELLER** | Create opportunity — position details | **D:** Transferable? → *NO · STOP* | Approve teaser — identity protected | Answer Q&A — respond once, logged | Review final bids — shortlist & select | Sign & settle — receive proceeds |
| **BUYER** | Discover — matched opportunity | **D:** Qualified? → *NO · DENY*<br>**D:** NDA signed? → *NO · NO ACCESS* | Diligence — data room + seller profile | Ask & clarify — Q&A + threads | **D:** Qualifying bid? → *NO · OUT* | Sign & settle — assume interest |
| **ATLAS** | Verify — ownership & data | Qualify & match — control access | Manage diligence — track activity | Broker Q&A — log every answer | Run process — compare execution | **D:** Compliance approved? → *NO · PAUSE*<br>**D:** GP approved? → *NO · NEXT BIDDER*<br>Close — document & settle |

---

## 3. Seller journey

| Stage | What the seller does | Decision point | If "no" |
| --- | --- | --- | --- |
| DISCOVER | Creates the opportunity: fund details, position details (NAV, ownership, unfunded commitment, NAV as-of date), timing | — | Abandoned draft |
| QUALIFY | Reviews the transferability opinion produced by Atlas Legal | **Is the interest transferable?** | Process stops. Nothing is marketed, no buyer ever sees it |
| DILIGENCE | Approves the anonymous teaser and the buyer shortlist | — | Edit or withdraw the teaser |
| ASK | Answers questions in the logged one-to-many Q&A | — | Missing the one-business-day SLA damages the process and shows on the profile |
| COMPETE | Reviews final bids side by side, shortlists, may issue improvement requests | **Is there a bid worth accepting?** | Reprice and reopen, or withdraw |
| CLOSE | Signs, settles, receives proceeds | **Did compliance and the GP clear?** | Compliance failure pauses everything; GP rejection moves to the next bidder; ROFR exercised ends the deal |

**What the seller gains that they do not have today:** they never lose control of their own distribution list, they see which buyers are genuinely working the deal rather than fishing, and they answer each question once instead of eleven times.

---

## 4. Buyer journey

| Stage | What the buyer does | Decision point | If "no" |
| --- | --- | --- | --- |
| DISCOVER | Sees an anonymous teaser matched to its mandate (vintage, strategy, region, reference NAV band, highlights) | — | — |
| QUALIFY | Requests access, passes KYC/AML, signs the NDA | **Am I qualified?** / **Do I accept the NDA?** | Denied — no fund identity revealed. Not signing means no data room access |
| DILIGENCE | Works the data room: capital account statement, quarterly report, LPA, portfolio overview | — | Pass without bidding — recorded, and an honest pass is useful signal to the seller |
| ASK | Asks questions visible to all qualified buyers; raises valuation challenges against specific NAV components | — | — |
| COMPETE | Submits a structured indicative bid, then a final bid after full diligence | **Is my price and structure competitive?** | Withdraw before the round closes — recorded on the buyer's profile |
| CLOSE | Deposits, confirms diligence, signs, funds | **Is my bid accepted, and does the GP consent?** | Not selected; GP rejection; or ROFR exercised by another LP |

---

## 5. Atlas journey

Atlas is the only participant present in all six stages, which is the commercial argument for the venue existing at all.

**Verify** (ownership & position data reconciled) → **Qualify & match** (control who sees what, when) → **Manage diligence** (track document-level activity) → **Broker Q&A** (log every answer, enforce simultaneous disclosure) → **Run the process** (sealed rounds, compare execution quality as well as price) → **Close** (compliance, GP consent and ROFR tracking, documentation, escrow settlement).

---

## 6. The four exception outcomes

These are the branches that separate a real process model from a happy-path mock-up. Each is a deliberate, visible failure state in the prototype.

| Exception | Where it triggers | What happens | Why it is designed this way |
| --- | --- | --- | --- |
| **NO · STOP** | QUALIFY — transferability review | The position cannot be marketed at all. No buyer is ever approached | The LPA, consent or ROFR position blocks the transfer. Marketing a position that cannot legally move wastes the seller's confidentiality and damages Atlas's credibility |
| **NO · DENY** / **NO · NO ACCESS** | QUALIFY — buyer | Buyer is excluded, or remains outside the data room until the NDA is countersigned | Identity and fund economics are released progressively, only after the counterparty is permitted to see them |
| **NO · OUT** | COMPETE — bidding | No qualifying bid. The seller reprices and reopens, or withdraws | In this asset class a share of processes legitimately end without a trade. Pretending otherwise sets false expectations |
| **NO · PAUSE** | CLOSE — compliance | Everything stops: no documentation, no settlement, progress frozen | Compliance failure is not a warning; it is a hard stop |
| **NO · NEXT BIDDER** | CLOSE — GP approval | The process does not collapse. Atlas reconfirms the next shortlisted bidder and restarts consent | GP consent and ROFR are the most common reason a signed deal dies. The fallback must exist in the design, not in someone's inbox |

---

## 7. Slide-ready outline

One slide per journey, plus the map. Suggested content if you are building this as a deck:

| Slide | Title | Content |
| --- | --- | --- |
| 1 | **The end-to-end journey** | The three-lane grid from §2. Six stage headers, three rows, decision points marked as diamonds, exception outcomes marked in red |
| 2 | **Seller journey** | The six steps from §3 with the two decision points inline: *Transferable?* and *Is there a bid worth accepting?* |
| 3 | **Buyer journey** | The six steps from §4 with the gates: *Qualified?* → *NDA signed?* → *Qualifying bid?* |
| 4 | **Atlas journey** | The operating model — verify, qualify, manage, broker, run, close. Make the point that Atlas is the only party present throughout |
| 5 | **When it goes wrong** | The exception table from §6. This is the slide that differentiates — most concepts only show the happy path |
| 6 | **States and ownership** | The 15 transaction states, who owns each, and what triggers the move to the next one (see CONCEPT.md §5.5) |

---

## 8. Do not change these labels

Whatever tool builds the visual, these strings should appear unchanged so the deck, the proposal and the prototype agree:

**Stages:** DISCOVER · QUALIFY · DILIGENCE · ASK · COMPETE · CLOSE

**Decision points:** *Transferable?* · *Qualified?* · *NDA signed?* · *Qualifying bid?* · *Compliance approved?* · *GP approved?*

**Exception outcomes:** NO · STOP · NO · DENY · NO · NO ACCESS · NO · OUT · NO · PAUSE · NO · NEXT BIDDER

**Participants:** SELLER · BUYER · ATLAS
