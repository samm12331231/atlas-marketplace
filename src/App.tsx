import { useState, type ReactNode } from "react"

type Screen =
  | "dashboard"
  | "create"
  | "transfer"
  | "teaser"
  | "profile"
  | "messages"
  | "room"
  | "bid"
  | "compare"
  | "closing"
  | "journey"

type IconName =
  | "grid"
  | "plus"
  | "check"
  | "lock"
  | "file"
  | "bid"
  | "compare"
  | "close"
  | "map"
  | "arrow"
  | "chevron"
  | "shield"
  | "eye"
  | "download"
  | "clock"
  | "building"
  | "menu"
  | "more"
  | "id"
  | "chat"

const screens: { id: Screen; label: string; icon: IconName }[] = [
  { id: "dashboard", label: "Opportunities", icon: "grid" },
  { id: "create", label: "Create opportunity", icon: "plus" },
  { id: "transfer", label: "Transferability", icon: "check" },
  { id: "teaser", label: "Anonymous teaser", icon: "eye" },
  { id: "profile", label: "Buyer profile", icon: "id" },
  { id: "messages", label: "Q&A and messages", icon: "chat" },
  { id: "room", label: "Secure data room", icon: "lock" },
  { id: "bid", label: "Bid submission", icon: "bid" },
  { id: "compare", label: "Compare bids", icon: "compare" },
  { id: "closing", label: "Closing", icon: "close" },
]

const statusSteps = [
  "Draft",
  "Verification",
  "Transferability",
  "Teaser",
  "Matching",
  "Matching & NDA",
  "Data Room",
  "Bidding",
  "Final Bids",
  "Buyer Selected",
  "Compliance",
  "GP Approval",
  "Documentation",
  "Settlement",
  "Completed",
]

const statusIndex: Record<Screen, number> = {
  dashboard: 8,
  create: 0,
  transfer: 2,
  teaser: 3,
  profile: 5,
  messages: 6,
  room: 6,
  bid: 8,
  compare: 8,
  closing: 11,
  journey: 0,
}

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    file: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5M9 13h6M9 17h6" />
      </>
    ),
    bid: (
      <>
        <path d="M4 7h16v12H4zM8 7V5h8v2M8 12h8M8 15h5" />
      </>
    ),
    compare: (
      <>
        <path d="M7 4v16M17 4v16M3 8h8M13 16h8" />
      </>
    ),
    close: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    map: (
      <>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14m-5-5 5 5-5 5" />
      </>
    ),
    chevron: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-4-4 4 4 4-4M5 21h14" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    building: (
      <>
        <path d="M4 21h16M6 21V8l6-4 6 4v13M9 12h1M14 12h1M9 16h1M14 16h1" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    id: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="11" r="2" />
        <path d="M5.6 16.2c.6-1.5 1.7-2.4 2.9-2.4s2.3.9 2.9 2.4" />
        <path d="M14 9.5h5M14 12.5h5M14 15.5h3" />
      </>
    ),
    chat: (
      <>
        <path d="M21 11.5a8 8 0 0 1-8 8c-1.2 0-2.4-.2-3.4-.7L4 20l1.3-4.1A8 8 0 1 1 21 11.5z" />
        <path d="M9 10.5h6M9 13.5h4" />
      </>
    ),
  }
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "danger"
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode
  tone?: "neutral" | "success" | "warning" | "info" | "danger"
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

function Field({
  label,
  value,
  prefix,
  suffix,
}: {
  label: string
  value: string
  prefix?: string
  suffix?: string
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="field-control">
        {prefix && <b>{prefix}</b>}
        <input defaultValue={value} />
        {suffix && <em>{suffix}</em>}
      </div>
    </label>
  )
}

function SelectField({ label, value }: { label: string; value: string }) {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="select-control">
        {value}
        <Icon name="chevron" size={15} />
      </div>
    </label>
  )
}

function Toggle({
  checked,
  onClick,
}: {
  checked: boolean
  onClick: () => void
}) {
  return (
    <button
      className={`toggle ${checked ? "is-on" : ""}`}
      onClick={onClick}
      aria-label="Toggle setting"
    >
      <span />
    </button>
  )
}

function PageTitle({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="page-title">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {action && <div className="title-action">{action}</div>}
    </div>
  )
}

function Metric({
  label,
  value,
  detail,
}: {
  label: string
  value: string
  detail?: string
}) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
      {detail && <small>{detail}</small>}
    </div>
  )
}

function Dashboard({ go }: { go: (s: Screen) => void }) {
  return (
    <>
      <PageTitle
        eyebrow="Seller workspace"
        title="Good morning, Alexandra."
        description="Three active opportunities require your attention."
        action={
          <Button onClick={() => go("create")}>
            <Icon name="plus" size={16} /> Create opportunity
          </Button>
        }
      />
      <div className="metrics-grid">
        <Metric
          label="Portfolio NAV in market"
          value="$184.6M"
          detail="Across 3 opportunities"
        />
        <Metric
          label="Qualified bids"
          value="7"
          detail="2 new since yesterday"
        />
        <Metric
          label="Est. net proceeds"
          value="$163.2M"
          detail="Based on leading bids"
        />
        <Metric
          label="Closing this quarter"
          value="2"
          detail="$91.4M combined NAV"
        />
      </div>
      <div className="panel opportunity-panel">
        <div className="panel-head">
          <div>
            <h2>Active opportunities</h2>
            <p>Confidential transactions managed by Atlas</p>
          </div>
          <Button variant="ghost">
            View all <Icon name="arrow" size={15} />
          </Button>
        </div>
        <div className="opportunity-table table-head">
          <span>Opportunity</span>
          <span>NAV</span>
          <span>Status</span>
          <span>Next action</span>
          <span></span>
        </div>
        <button
          className="opportunity-table opportunity-row"
          onClick={() => go("compare")}
        >
          <span className="opp-name">
            <i>NH</i>
            <span>
              <strong>Northbridge VII</strong>
              <small>2018 Buyout · OP-1048</small>
            </span>
          </span>
          <span className="table-value">$72.4M</span>
          <span>
            <Badge tone="warning">Final bids</Badge>
          </span>
          <span>
            <strong>Review 3 final bids</strong>
            <small>Due today, 5:00 PM</small>
          </span>
          <Icon name="chevron" size={17} />
        </button>
        <button
          className="opportunity-table opportunity-row"
          onClick={() => go("closing")}
        >
          <span className="opp-name">
            <i>HC</i>
            <span>
              <strong>Harbor Capital IV</strong>
              <small>2020 Growth · OP-1039</small>
            </span>
          </span>
          <span className="table-value">$51.8M</span>
          <span>
            <Badge tone="success">GP approval</Badge>
          </span>
          <span>
            <strong>Review consent package</strong>
            <small>2 documents ready</small>
          </span>
          <Icon name="chevron" size={17} />
        </button>
        <button
          className="opportunity-table opportunity-row"
          onClick={() => go("transfer")}
        >
          <span className="opp-name">
            <i>AR</i>
            <span>
              <strong>Arcadia Real Assets III</strong>
              <small>2019 Infrastructure · OP-1051</small>
            </span>
          </span>
          <span className="table-value">$60.4M</span>
          <span>
            <Badge tone="info">Transferability</Badge>
          </span>
          <span>
            <strong>Confirm ownership details</strong>
            <small>Atlas review in progress</small>
          </span>
          <Icon name="chevron" size={17} />
        </button>
      </div>
      <div className="lower-grid">
        <div className="panel">
          <div className="panel-head">
            <div>
              <h2>Recent activity</h2>
              <p>Across your active transactions</p>
            </div>
          </div>
          <div className="activity">
            <i>
              <Icon name="bid" size={16} />
            </i>
            <div>
              <strong>Final bid received from Buyer 03</strong>
              <p>Northbridge VII · 18 minutes ago</p>
            </div>
          </div>
          <div className="activity">
            <i>
              <Icon name="file" size={16} />
            </i>
            <div>
              <strong>GP consent package uploaded</strong>
              <p>Harbor Capital IV · 2 hours ago</p>
            </div>
          </div>
          <div className="activity">
            <i>
              <Icon name="eye" size={16} />
            </i>
            <div>
              <strong>Four buyers entered the data room</strong>
              <p>Northbridge VII · Today</p>
            </div>
          </div>
          <div className="activity">
            <i>
              <Icon name="chat" size={16} />
            </i>
            <div>
              <strong>Buyer 03 asked a diligence question</strong>
              <p>Northbridge VII · Today, 9:12 AM</p>
            </div>
          </div>
        </div>
        <div className="panel advisor-card">
          <div className="advisor-top">
            <i>EC</i>
            <div>
              <span>Your Atlas advisor</span>
              <strong>Elena Chen</strong>
            </div>
          </div>
          <p>
            “The Northbridge bids are ready for review. I’ve highlighted the key
            execution differences.”
          </p>
          <Button variant="secondary">Message Elena</Button>
        </div>
      </div>
    </>
  )
}

function CreateOpportunity({ go }: { go: (s: Screen) => void }) {
  return (
    <>
      <PageTitle
        eyebrow="New opportunity"
        title="Create an opportunity"
        description="Provide high-level position details. Nothing is shared with buyers at this stage."
      />
      <div className="form-layout">
        <div className="panel form-panel">
          <div className="section-title">
            <span>01</span>
            <div>
              <h2>Fund details</h2>
              <p>Identify the interest you are considering for sale.</p>
            </div>
          </div>
          <div className="form-grid">
            <Field label="Fund name" value="Northbridge Partners Fund VII" />
            <SelectField label="Strategy" value="Buyout" />
            <SelectField label="Vintage year" value="2018" />
            <SelectField label="Fund domicile" value="Delaware, US" />
          </div>
          <div className="divider" />
          <div className="section-title">
            <span>02</span>
            <div>
              <h2>Position details</h2>
              <p>Figures should reflect the most recent fund statement.</p>
            </div>
          </div>
          <div className="form-grid">
            <Field label="Current NAV" value="72,400,000" prefix="$" />
            <Field label="Ownership" value="1.84" suffix="%" />
            <Field label="Unfunded commitment" value="8,200,000" prefix="$" />
            <Field label="NAV as of" value="September 30, 2025" />
          </div>
          <div className="divider" />
          <div className="section-title">
            <span>03</span>
            <div>
              <h2>Timing</h2>
              <p>Atlas will calibrate the process to your objectives.</p>
            </div>
          </div>
          <div className="form-grid">
            <SelectField label="Desired signing" value="Within 60 days" />
            <SelectField label="Desired settlement" value="Q2 2026" />
          </div>
          <div className="form-actions">
            <Button variant="ghost" onClick={() => go("dashboard")}>
              Save as draft
            </Button>
            <Button onClick={() => go("transfer")}>
              Submit for verification <Icon name="arrow" size={16} />
            </Button>
          </div>
        </div>
        <div className="side-stack">
          <div className="panel info-card">
            <Icon name="shield" size={22} />
            <h3>Confidential by design</h3>
            <p>
              Fund and seller identity remain private until a qualified buyer
              signs the NDA.
            </p>
          </div>
          <div className="panel steps-card">
            <h3>What happens next</h3>
            <ol>
              <li>
                <span>1</span>
                <div>
                  <strong>Ownership verification</strong>
                  <small>Atlas reviews position records</small>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <strong>Transferability review</strong>
                  <small>Restrictions, consent and ROFR</small>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <strong>Anonymous teaser</strong>
                  <small>Shared only with matched buyers</small>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

function Transferability({ go }: { go: (s: Screen) => void }) {
  const [transferable, setTransferable] = useState(true)
  return (
    <>
      <PageTitle
        eyebrow="OP-1048 · Northbridge Partners VII"
        title="Transferability review"
        description="Atlas is confirming that this interest can be sold and identifying required approvals."
        action={
          <Badge tone={transferable ? "success" : "danger"}>
            {transferable ? "Likely transferable" : "Not transferable"}
          </Badge>
        }
      />
      <div className="review-layout">
        <div className="panel review-panel">
          <div className="review-summary">
            <div className={`score-ring ${transferable ? "" : "failed"}`}>
              <Icon name={transferable ? "check" : "lock"} size={25} />
            </div>
            <div>
              <h2>
                {transferable
                  ? "Review substantially complete"
                  : "Process stopped"}
              </h2>
              <p>
                {transferable
                  ? "No blocking restrictions identified. GP consent and ROFR apply."
                  : "A blocking transfer restriction prevents Atlas from marketing this position."}
              </p>
            </div>
          </div>
          <div className="check-row">
            <i className="check-icon">
              <Icon name="check" size={15} />
            </i>
            <div>
              <strong>Ownership confirmed</strong>
              <p>Legal owner matches submitted entity and fund records.</p>
            </div>
            <Badge tone="success">Verified</Badge>
          </div>
          <div className="check-row">
            <i className="check-icon">
              <Icon name="check" size={15} />
            </i>
            <div>
              <strong>Transfer restrictions reviewed</strong>
              <p>
                No absolute prohibition. Transfers to qualified institutions
                permitted.
              </p>
            </div>
            <Badge tone="success">Clear</Badge>
          </div>
          <div className="check-row">
            <i className="pending-icon">
              <Icon name="clock" size={15} />
            </i>
            <div>
              <strong>GP consent required</strong>
              <p>Written consent is required after buyer selection.</p>
            </div>
            <Badge tone="warning">At closing</Badge>
          </div>
          <div className="check-row">
            <i className="pending-icon">
              <Icon name="clock" size={15} />
            </i>
            <div>
              <strong>Right of first refusal</strong>
              <p>GP has 10 business days to exercise ROFR on final terms.</p>
            </div>
            <Badge tone="warning">10 days</Badge>
          </div>
          {!transferable && (
            <div className="stop-banner">
              <strong>Atlas cannot proceed</strong>
              <span>
                This opportunity will remain private and no buyer outreach will
                occur.
              </span>
            </div>
          )}
          <div className="form-actions">
            <Button
              variant="secondary"
              onClick={() => setTransferable(!transferable)}
            >
              {transferable ? "Simulate failed review" : "Restore transferable"}
            </Button>
            <Button onClick={() => go("teaser")} disabled={!transferable}>
              Approve anonymous teaser <Icon name="arrow" size={16} />
            </Button>
          </div>
        </div>
        <div className="side-stack">
          <div className="panel detail-card">
            <h3>Position snapshot</h3>
            <dl>
              <div>
                <dt>Fund</dt>
                <dd>Northbridge VII</dd>
              </div>
              <div>
                <dt>Strategy</dt>
                <dd>Buyout</dd>
              </div>
              <div>
                <dt>Vintage</dt>
                <dd>2018</dd>
              </div>
              <div>
                <dt>NAV</dt>
                <dd>$72.4M</dd>
              </div>
              <div>
                <dt>Unfunded</dt>
                <dd>$8.2M</dd>
              </div>
            </dl>
          </div>
          <div className="panel note-card">
            <span>Atlas legal note</span>
            <p>
              The LPA permits transfers to institutional investors subject to GP
              consent, which may not be unreasonably withheld.
            </p>
            <small>Reviewed by Atlas Legal · Jan 18</small>
          </div>
        </div>
      </div>
    </>
  )
}

function AnonymousTeaser({ go }: { go: (s: Screen) => void }) {
  return (
    <>
      <PageTitle
        eyebrow="Buyer-facing preview"
        title="Anonymous opportunity"
        description="This is what matched buyers see before qualification and NDA."
        action={
          <div className="segmented">
            <button className="active">Buyer view</button>
            <button>Seller view</button>
          </div>
        }
      />
      <div className="teaser-shell">
        <div className="confidential-bar">
          <span>
            <Icon name="shield" size={15} /> Atlas verified opportunity
          </span>
          <span>Seller identity withheld · OP-1048</span>
        </div>
        <div className="teaser-hero">
          <div>
            <Badge tone="info">North American Buyout</Badge>
            <h2>Established upper mid-market buyout fund</h2>
            <p>
              Diversified portfolio with meaningful realization activity and a
              mature investment profile.
            </p>
          </div>
          <div className="fit-score">
            <span>Atlas match</span>
            <strong>94</strong>
            <small>Strong fit</small>
          </div>
        </div>
        <div className="teaser-metrics">
          <Metric label="Vintage" value="2018" />
          <Metric label="Reference NAV" value="$70–75M" />
          <Metric label="Fund status" value="Harvesting" />
          <Metric label="Geography" value="North America" />
        </div>
        <div className="teaser-body">
          <div>
            <h3>Investment highlights</h3>
            <ul className="highlight-list">
              <li>
                <Icon name="check" size={15} /> High-quality, diversified
                portfolio across business services, healthcare and software
              </li>
              <li>
                <Icon name="check" size={15} /> Approximately 1.6x gross
                multiple with significant distributions to date
              </li>
              <li>
                <Icon name="check" size={15} /> Clear near-term realization
                pipeline across three core assets
              </li>
            </ul>
          </div>
          <div className="redacted-card">
            <div>
              <Icon name="lock" size={19} />
              <strong>Sensitive details protected</strong>
            </div>
            <p>
              Fund identity, seller name, portfolio companies and financial
              statements become available after qualification and NDA.
            </p>
          </div>
        </div>
        <div className="teaser-footer">
          <span>
            <Icon name="clock" size={16} /> Indications of interest due February
            12, 2026
          </span>
          <Button onClick={() => go("profile")}>
            Request access <Icon name="arrow" size={16} />
          </Button>
        </div>
      </div>
    </>
  )
}

function DataRoom({ go }: { go: (s: Screen) => void }) {
  const [qualified, setQualified] = useState(true)
  const [nda, setNda] = useState(true)
  const unlocked = qualified && nda
  const docs = [
    ["Q3 2025 Capital Account Statement", "Financial", "1.8 MB", "Jan 20"],
    ["Northbridge VII Quarterly Report", "Fund report", "12.4 MB", "Jan 20"],
    ["Limited Partnership Agreement", "Legal", "4.2 MB", "Jan 19"],
    ["Portfolio Company Overview", "Portfolio", "8.7 MB", "Jan 19"],
  ]
  return (
    <>
      <PageTitle
        eyebrow="OP-1048 · Buyer 03 view"
        title="Secure data room"
        description="Controlled diligence environment with document-level activity tracking."
        action={
          <Badge tone={unlocked ? "success" : "warning"}>
            {unlocked ? "Access granted" : "Access restricted"}
          </Badge>
        }
      />
      <div className="access-gates">
        <div className={qualified ? "gate complete" : "gate"}>
          <i>
            <Icon name={qualified ? "check" : "clock"} size={15} />
          </i>
          <span>
            <strong>Buyer qualification</strong>
            <small>
              {qualified ? "Approved Jan 20" : "Pending Atlas review"}
            </small>
          </span>
          <Toggle
            checked={qualified}
            onClick={() => setQualified(!qualified)}
          />
        </div>
        <div className={nda ? "gate complete" : "gate"}>
          <i>
            <Icon name={nda ? "check" : "lock"} size={15} />
          </i>
          <span>
            <strong>NDA executed</strong>
            <small>
              {nda ? "Signed by both parties" : "Signature required"}
            </small>
          </span>
          <Toggle checked={nda} onClick={() => setNda(!nda)} />
        </div>
        <div className={unlocked ? "gate complete" : "gate"}>
          <i>
            <Icon name={unlocked ? "check" : "lock"} size={15} />
          </i>
          <span>
            <strong>Data room access</strong>
            <small>
              {unlocked ? "Unlocked" : "Qualification + NDA required"}
            </small>
          </span>
        </div>
      </div>
      <div className="room-layout">
        <div className={`panel doc-panel ${!unlocked ? "locked-panel" : ""}`}>
          <div className="panel-head">
            <div>
              <h2>Documents</h2>
              <p>12 files · Updated January 20, 2026</p>
            </div>
            <Button variant="secondary" disabled={!unlocked}>
              <Icon name="download" size={15} /> Download all
            </Button>
          </div>
          {docs.map((doc, i) => (
            <div className="doc-row" key={doc[0]}>
              <i>
                <Icon name="file" size={18} />
              </i>
              <div>
                <strong>{doc[0]}</strong>
                <small>
                  {doc[1]} · {doc[2]}
                </small>
              </div>
              <span>{doc[3]}</span>
              <button aria-label="More actions">
                <Icon name="more" size={18} />
              </button>
            </div>
          ))}
          {!unlocked && (
            <div className="lock-overlay">
              <Icon name="lock" size={26} />
              <strong>Access restricted</strong>
              <p>Complete buyer qualification and execute the NDA to enter.</p>
            </div>
          )}
        </div>
        <div className="panel activity-panel">
          <div className="panel-head">
            <div>
              <h2>Activity log</h2>
              <p>Visible to seller and Atlas</p>
            </div>
          </div>
          <div className="log-item">
            <i>RB</i>
            <div>
              <strong>Buyer 03 viewed Quarterly Report</strong>
              <span>Today, 10:42 AM</span>
            </div>
          </div>
          <div className="log-item">
            <i>RB</i>
            <div>
              <strong>Buyer 03 downloaded CAS</strong>
              <span>Today, 10:31 AM</span>
            </div>
          </div>
          <div className="log-item">
            <i>RB</i>
            <div>
              <strong>Buyer 03 asked about Q3 FX exposure in Q&A</strong>
              <span>Today, 9:12 AM</span>
            </div>
          </div>
          <div className="log-item atlas">
            <i>AT</i>
            <div>
              <strong>Atlas added 4 documents</strong>
              <span>Yesterday, 4:18 PM</span>
            </div>
          </div>
          <Button onClick={() => go("bid")} disabled={!unlocked}>
            Continue to bid <Icon name="arrow" size={16} />
          </Button>
        </div>
      </div>
    </>
  )
}

function BidSubmission({ go }: { go: (s: Screen) => void }) {
  const [finalBid, setFinalBid] = useState(false)
  return (
    <>
      <PageTitle
        eyebrow="OP-1048 · Northbridge Partners VII"
        title="Submit a bid"
        description="Terms are shared confidentially with the seller and Atlas."
        action={
          <div className="segmented">
            <button
              className={!finalBid ? "active" : ""}
              onClick={() => setFinalBid(false)}
            >
              Indicative
            </button>
            <button
              className={finalBid ? "active" : ""}
              onClick={() => setFinalBid(true)}
            >
              Final
            </button>
          </div>
        }
      />
      <div className="bid-layout">
        <div className="panel form-panel">
          <div className="bid-stage">
            <span className={!finalBid ? "active" : "done"}>1</span>
            <div />
            <span className={finalBid ? "active" : ""}>2</span>
            <p>Indicative bid</p>
            <p>Final bid</p>
          </div>
          <div className="section-title">
            <span>01</span>
            <div>
              <h2>Economics</h2>
              <p>Enter your offer as a percentage of reference NAV.</p>
            </div>
          </div>
          <div className="form-grid">
            <Field
              label="Price (% of NAV)"
              value={finalBid ? "92.5" : "90.0"}
              suffix="%"
            />
            <Field
              label="Implied purchase price"
              value={finalBid ? "66,970,000" : "65,160,000"}
              prefix="$"
            />
            <SelectField label="Payment structure" value="100% at settlement" />
            <SelectField
              label="Unfunded commitment"
              value="Buyer assumes in full"
            />
          </div>
          <div className="divider" />
          <div className="section-title">
            <span>02</span>
            <div>
              <h2>Execution terms</h2>
              <p>Clarify timing, approvals and any conditions.</p>
            </div>
          </div>
          <div className="form-grid">
            <Field label="Proposed close date" value="March 27, 2026" />
            <SelectField
              label="Internal approvals"
              value="Investment committee approved"
            />
            <label className="field full">
              <span>Conditions</span>
              <textarea
                defaultValue={
                  finalBid
                    ? "Customary GP consent and completion of confirmatory diligence. No financing condition."
                    : "Subject to confirmatory diligence, investment committee approval and GP consent."
                }
              />
            </label>
          </div>
          <div className="certify">
            <input type="checkbox" defaultChecked={finalBid} />
            <span>
              I certify that the information provided is accurate and that this
              bid is authorized for submission.
            </span>
          </div>
          <div className="form-actions">
            <Button variant="ghost">Save draft</Button>
            <Button onClick={() => go("compare")}>
              Submit {finalBid ? "final" : "indicative"} bid{" "}
              <Icon name="arrow" size={16} />
            </Button>
          </div>
        </div>
        <div className="side-stack">
          <div className="panel detail-card">
            <h3>Opportunity summary</h3>
            <dl>
              <div>
                <dt>Reference NAV</dt>
                <dd>$72.4M</dd>
              </div>
              <div>
                <dt>NAV date</dt>
                <dd>Sep 30, 2025</dd>
              </div>
              <div>
                <dt>Unfunded</dt>
                <dd>$8.2M</dd>
              </div>
              <div>
                <dt>Bid deadline</dt>
                <dd>Feb 12, 5 PM</dd>
              </div>
            </dl>
          </div>
          <div className="panel info-card">
            <Icon name="shield" size={22} />
            <h3>Binding status</h3>
            <p>
              {finalBid
                ? "Final bids are binding subject only to the conditions stated in your submission."
                : "Indicative bids are non-binding and used by the seller to determine the final bid shortlist."}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

const shortlistStats = [
  { label: "Secondaries funds", value: 54 },
  { label: "Institutions & endowments", value: 31 },
  { label: "Family offices", value: 15 },
]

function BuyerProfile({ go }: { go: (s: Screen) => void }) {
  const [revealed, setRevealed] = useState(true)
  return (
    <>
      <PageTitle
        eyebrow="OP-1048 · Seller view"
        title="Buyer 03 · Profile"
        description="Who you are actually negotiating with. Identity is revealed only under NDA."
        action={
          <div className="segmented">
            <button
              className={revealed ? "active" : ""}
              onClick={() => setRevealed(true)}
            >
              Under NDA
            </button>
            <button
              className={!revealed ? "active" : ""}
              onClick={() => setRevealed(false)}
            >
              Before NDA
            </button>
          </div>
        }
      />
      <div className="profile-layout">
        <div className="side-stack">
          <div className="panel identity-card">
            <div className="identity-top">
              {revealed ? <i>ME</i> : <i className="masked">?</i>}
              <div>
                <strong>
                  {revealed ? "MeridianEvergreen" : "Buyer 03"}
                </strong>
                <small>
                  {revealed
                    ? "Evergreen secondary vehicle · London"
                    : "Identity withheld until NDA"}
                </small>
              </div>
            </div>
            <div className="verify-strip">
              <span>
                <Icon name="shield" size={12} /> Atlas verified
              </span>
              <span>
                <Icon name="check" size={12} /> KYC / AML clear
              </span>
              <span>
                <Icon name="file" size={12} /> Reg. status filed
              </span>
            </div>
          </div>
          <div className="panel detail-card">
            <h3>Atlas credentials</h3>
            <dl>
              <div>
                <dt>Member since</dt>
                <dd>2021</dd>
              </div>
              <div>
                <dt>Transactions closed</dt>
                <dd>14 on Atlas</dd>
              </div>
              <div>
                <dt>AUM range</dt>
                <dd>{revealed ? "$2.1B evergreen" : "Disclosed under NDA"}</dd>
              </div>
              <div>
                <dt>Avg. time to wire</dt>
                <dd>26 days from selection</dd>
              </div>
              <div>
                <dt>Disputes / fails</dt>
                <dd>None</dd>
              </div>
            </dl>
          </div>
          <div className="panel note-card">
            <span>Why this matters</span>
            <p>
              Track record is the strongest predictor of closing. Atlas scores
              execution certainty from verified history, not self-reported
              claims.
            </p>
          </div>
        </div>
        <div className="panel profile-main">
          <div className={`profile-body ${revealed ? "" : "is-masked"}`}>
            <div className="section-title">
              <span>01</span>
              <div>
                <h2>Investor profile</h2>
                <p>
                  A permanent-capital vehicle acquiring quality buyout and
                  growth positions from institutional sellers.
                </p>
              </div>
            </div>
            <div className="metrics-grid">
              <Metric label="Price range" value="88–95% NAV" />
              <Metric label="Structures" value="Single & LP strips" />
              <Metric label="Closing speed" value="4–6 weeks" />
              <Metric label="Coverage" value="US & Europe" />
            </div>
            <div className="section-title">
              <span>02</span>
              <div>
                <h2>Track record</h2>
                <p>Verified by Atlas against settlement records.</p>
              </div>
            </div>
            <div className="track-row">
              <span>
                <strong>2019 Buyout · $41M strip</strong>
                <small>Closed at 91% NAV · 38 days</small>
              </span>
              <Badge tone="success">Settled</Badge>
            </div>
            <div className="track-row">
              <span>
                <strong>2020 Growth · $28M single</strong>
                <small>Closed at 94% NAV · 31 days</small>
              </span>
              <Badge tone="success">Settled</Badge>
            </div>
            <div className="track-row">
              <span>
                <strong>2022 Infrastructure · $55M strip</strong>
                <small>Closed at 89% NAV · 44 days</small>
              </span>
              <Badge tone="success">Settled</Badge>
            </div>
            <div className="section-title">
              <span>03</span>
              <div>
                <h2>Seller references</h2>
                <p>Anonymized feedback from past counterparties.</p>
              </div>
            </div>
            <div className="reference-quote">
              “Clean process, no re-trade at the finish line. Wire arrived on
              the agreed date.”
              <small>— Family office seller, Q4 2025</small>
            </div>
            <div className="reference-quote">
              “Responsive during confirmatory diligence. Didn’t churn the data
              room.”
              <small>— Institutional seller, Q2 2025</small>
            </div>
            <div className="section-title">
              <span>04</span>
              <div>
                <h2>Shortlist composition</h2>
                <p>How Atlas matched this buyer to the opportunity.</p>
              </div>
            </div>
            {shortlistStats.map((s) => (
              <div className="mix-row" key={s.label}>
                <span>{s.label}</span>
                <div className="mix-bar">
                  <i style={{ width: `${s.value}%` }} />
                </div>
                <small>{s.value}%</small>
              </div>
            ))}
          </div>
          {!revealed && (
            <div className="mask-overlay">
              <Icon name="lock" size={26} />
              <strong>Identity and history protected</strong>
              <p>
                Buyers see the seller’s teaser before qualification. Sellers
                see a buyer’s full profile only after the NDA binds both
                parties.
              </p>
              <Button onClick={() => setRevealed(true)}>
                Simulate executed NDA
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="form-actions profile-actions">
        <Button variant="ghost" onClick={() => go("messages")}>
          <Icon name="chat" size={15} /> Open Q&A and messages
        </Button>
        <Button variant="secondary" onClick={() => go("room")}>
          Continue to data room <Icon name="arrow" size={16} />
        </Button>
      </div>
    </>
  )
}

const qaItems = [
  {
    id: "Q-118",
    buyer: "Buyer 03",
    q: "Does the reference NAV include the Q3 FX revaluation on the European positions?",
    a: "Yes — the September 30 statement reflects the quarter-end revaluation. The FX sensitivity memo is in the data room.",
    status: "Answered",
    tone: "success" as const,
    when: "Today, 9:12 AM",
  },
  {
    id: "Q-117",
    buyer: "Buyer 01",
    q: "Have any portfolio companies initiated dividend recapitalizations since the statement date?",
    a: "One portfolio company completed a recap in November. Proceeds are reflected in the CAS and the deal summary has been updated.",
    status: "Answered",
    tone: "success" as const,
    when: "Yesterday, 4:40 PM",
  },
  {
    id: "Q-116",
    buyer: "Buyer 02",
    q: "Can you confirm the ROFR window has not been triggered by any current LP?",
    a: "Awaiting seller response — due within one business day per the Q&A protocol.",
    status: "Pending",
    tone: "warning" as const,
    when: "Today, 7:55 AM",
  },
]

function Messages({ go }: { go: (s: Screen) => void }) {
  return (
    <>
      <PageTitle
        eyebrow="OP-1048 · Buyer 03 view"
        title="Q&A and messages"
        description="One question, one answer, visible to every qualified buyer. Every exchange is logged."
        action={
          <Badge tone="info">Q&A protocol · 1 business day</Badge>
        }
      />
      <div className="msg-layout">
        <div className="panel msg-qa">
          <div className="panel-head">
            <div>
              <h2>Diligence Q&A log</h2>
              <p>3 of 12 questions shown</p>
            </div>
            <Button variant="secondary">
              <Icon name="chat" size={14} /> Ask a question
            </Button>
          </div>
          {qaItems.map((item) => (
            <div className="qa-item" key={item.id}>
              <div className="qa-head">
                <Badge tone={item.tone}>{item.status}</Badge>
                <span>
                  {item.id} · {item.buyer} · {item.when}
                </span>
              </div>
              <p className="qa-q">{item.q}</p>
              <p className="qa-a">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="msg-side">
          <div className="panel msg-thread">
            <div className="panel-head">
              <div>
                <h2>Direct thread</h2>
                <p>Seller ↔ Buyer 03 · NDA-scoped</p>
              </div>
            </div>
            <div className="thread-body">
              <div className="bubble buyer">
                Confirming our final bid at 92.5% stands. We can sign the
                assignment as drafted.
                <small>Buyer 03 · 10:24 AM</small>
              </div>
              <div className="bubble seller">
                Acknowledged — we are reviewing the bid comparison today and
                will respond through Atlas by 5:00 PM.
                <small>Seller · 10:41 AM</small>
              </div>
              <div className="bubble system">
                <Icon name="shield" size={13} /> Atlas on this thread · no
                off-platform contact
                <small>Atlas · auto-note</small>
              </div>
            </div>
            <div className="composer">
              <input placeholder="Message Buyer 03 — logged and archived…" />
              <Button>Send</Button>
            </div>
          </div>
          <div className="panel info-card">
            <Icon name="shield" size={22} />
            <h3>Fair communication by design</h3>
            <p>
              Material answers go to all qualified buyers simultaneously.
              Direct threads exist for execution logistics — never for
              preferential economics. Bids can only move on the record, through
              the bid form.
            </p>
          </div>
        </div>
      </div>
      <div className="form-actions profile-actions">
        <Button variant="ghost" onClick={() => go("profile")}>
          <Icon name="id" size={15} /> View buyer profile
        </Button>
        <Button onClick={() => go("room")}>
          Continue to data room <Icon name="arrow" size={16} />
        </Button>
      </div>
    </>
  )
}

const bidders = [
  {
    id: "Buyer 01",
    type: "Secondaries fund",
    price: "91.0%",
    proceeds: "$65.34M",
    payment: "100% at close",
    conditions: "GP consent only",
    unfunded: "Assumes 100%",
    close: "35 days",
    approvals: "IC approved",
    certainty: 93,
  },
  {
    id: "Buyer 02",
    type: "Global asset manager",
    price: "93.0%",
    proceeds: "$66.58M",
    payment: "85% close / 15% deferred",
    conditions: "Confirmatory diligence",
    unfunded: "Assumes 100%",
    close: "45 days",
    approvals: "Final IC pending",
    certainty: 78,
  },
  {
    id: "Buyer 03",
    type: "Institutional investor",
    price: "92.5%",
    proceeds: "$66.97M",
    payment: "100% at close",
    conditions: "GP consent only",
    unfunded: "Assumes 100%",
    close: "28 days",
    approvals: "IC approved",
    certainty: 96,
  },
]

function BidComparison({ go }: { go: (s: Screen) => void }) {
  const [selected, setSelected] = useState(2)
  const [shortlisted, setShortlisted] = useState([true, false, true])
  return (
    <>
      <PageTitle
        eyebrow="OP-1048 · Decision workspace"
        title="Compare final bids"
        description="Evaluate economics and execution terms side by side."
        action={<Badge tone="warning">Decision due today</Badge>}
      />
      <div className="compare-summary">
        <div>
          <span>3</span>
          <small>Final bids</small>
        </div>
        <div>
          <span>$66.97M</span>
          <small>Highest net proceeds</small>
        </div>
        <div>
          <span>96%</span>
          <small>Best execution certainty</small>
        </div>
        <div className="advisor-callout">
          <i>EC</i>
          <span>
            <strong>Atlas view</strong>
            <small>Buyer 03 offers the strongest risk-adjusted outcome.</small>
          </span>
        </div>
      </div>
      <div className="comparison">
        <div className="compare-labels">
          <div className="buyer-head">
            <span>Buyer</span>
          </div>
          {[
            "Price / NAV",
            "Net proceeds",
            "Payment structure",
            "Conditions",
            "Unfunded commitment",
            "Closing timeline",
            "Approvals",
            "Execution certainty",
          ].map((x) => (
            <div key={x}>{x}</div>
          ))}
        </div>
        {bidders.map((buyer, i) => (
          <div
            className={`buyer-column ${selected === i ? "selected" : ""}`}
            key={buyer.id}
            onClick={() => setSelected(i)}
          >
            <div className="buyer-head">
              <div>
                <i>B{i + 1}</i>
                <span>
                  <strong>{buyer.id}</strong>
                  <small>{buyer.type}</small>
                </span>
              </div>
              {i === 2 && <Badge tone="success">Atlas preferred</Badge>}
            </div>
            <div className="key-value">
              <strong>{buyer.price}</strong>
              {i === 1 && <Badge tone="info">Highest</Badge>}
            </div>
            <div className="key-value">
              <strong>{buyer.proceeds}</strong>
              {i === 2 && <Badge tone="success">Best net</Badge>}
            </div>
            <div>{buyer.payment}</div>
            <div>{buyer.conditions}</div>
            <div>{buyer.unfunded}</div>
            <div>{buyer.close}</div>
            <div>{buyer.approvals}</div>
            <div className="certainty">
              <span>
                <i style={{ width: `${buyer.certainty}%` }} />
              </span>
              <strong>{buyer.certainty}%</strong>
            </div>
            <div className="buyer-actions">
              <label>
                <input
                  type="checkbox"
                  checked={shortlisted[i]}
                  onChange={() =>
                    setShortlisted(
                      shortlisted.map((x, n) => (n === i ? !x : x)),
                    )
                  }
                />{" "}
                Shortlist
              </label>
              <Button
                variant={selected === i ? "primary" : "secondary"}
                onClick={() => setSelected(i)}
              >
                Select
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky-decision">
        <div>
          <Icon name="shield" size={20} />
          <span>
            <strong>{bidders[selected].id} selected</strong>
            <small>
              {bidders[selected].proceeds} net proceeds ·{" "}
              {bidders[selected].certainty}% execution certainty
            </small>
          </span>
        </div>
        <Button onClick={() => go("closing")}>
          Confirm buyer selection <Icon name="arrow" size={16} />
        </Button>
      </div>
    </>
  )
}

function ClosingDashboard({ go }: { go: (s: Screen) => void }) {
  const [compliance, setCompliance] = useState<"pending" | "passed" | "failed">(
    "passed",
  )
  const [gpApproved, setGpApproved] = useState(true)
  const paused = compliance === "failed"
  return (
    <>
      <PageTitle
        eyebrow="OP-1048 · Buyer 03 selected"
        title="Closing dashboard"
        description="Atlas coordinates all parties through approval, documentation and settlement."
        action={
          <Badge tone={paused || !gpApproved ? "danger" : "success"}>
            {paused
              ? "Paused"
              : !gpApproved
                ? "Next bidder required"
                : "On track"}
          </Badge>
        }
      />
      <div className="closing-hero">
        <div>
          <span>Target settlement</span>
          <strong>March 27, 2026</strong>
          <small>34 days remaining</small>
        </div>
        <div className="closing-progress">
          <div>
            <span style={{ width: paused || !gpApproved ? "44%" : "61%" }} />
          </div>
          <small>
            {paused
              ? "Process paused at compliance"
              : !gpApproved
                ? "GP rejected · returning to Buyer 01"
                : "8 of 13 closing items complete"}
          </small>
        </div>
        <div>
          <span>Estimated net proceeds</span>
          <strong>$66.97M</strong>
          <small>92.5% of reference NAV</small>
        </div>
      </div>
      {(paused || !gpApproved) && (
        <div className="branch-alert">
          <Icon name={paused ? "lock" : "arrow"} size={21} />
          <div>
            <strong>
              {paused
                ? "Compliance review failed — process paused"
                : "GP approval rejected — move to next shortlisted bidder"}
            </strong>
            <p>
              {paused
                ? "No documentation or settlement activity can continue until Atlas Compliance clears the exception."
                : "Buyer 01 is next in line. Atlas will reconfirm its $65.34M bid before restarting GP consent."}
            </p>
          </div>
          <Button
            variant={paused ? "secondary" : "primary"}
            onClick={() => (paused ? setCompliance("passed") : go("compare"))}
          >
            {paused ? "Resolve exception" : "Review next bidder"}
          </Button>
        </div>
      )}
      <div className="closing-layout">
        <div className="panel milestone-panel">
          <div className="panel-head">
            <div>
              <h2>Closing milestones</h2>
              <p>Managed by Atlas transaction operations</p>
            </div>
          </div>
          <div
            className={`milestone ${
              compliance === "passed"
                ? "complete"
                : compliance === "failed"
                  ? "failed"
                  : "active"
            }`}
          >
            <i>
              <Icon
                name={compliance === "passed" ? "check" : "shield"}
                size={17}
              />
            </i>
            <div>
              <strong>Buyer & seller compliance</strong>
              <p>KYC, AML, sanctions and source-of-funds checks</p>
            </div>
            <span>
              {compliance === "passed"
                ? "Completed Feb 20"
                : compliance === "failed"
                  ? "Exception found"
                  : "In review"}
            </span>
          </div>
          <div
            className={`milestone ${
              gpApproved && !paused ? "complete" : "active"
            }`}
          >
            <i>
              <Icon
                name={gpApproved && !paused ? "check" : "building"}
                size={17}
              />
            </i>
            <div>
              <strong>GP approval & ROFR</strong>
              <p>Consent request and 10-day ROFR period</p>
            </div>
            <span>
              {gpApproved && !paused
                ? "Approved Feb 23"
                : paused
                  ? "Blocked"
                  : "Rejected"}
            </span>
          </div>
          <div className={`milestone ${gpApproved && !paused ? "active" : ""}`}>
            <i>
              <Icon name="file" size={17} />
            </i>
            <div>
              <strong>Documentation & signing</strong>
              <p>Purchase agreement, assignment and tax forms</p>
            </div>
            <span>
              {gpApproved && !paused ? "In progress · 5 of 8" : "Not started"}
            </span>
          </div>
          <div className="milestone">
            <i>
              <Icon name="close" size={17} />
            </i>
            <div>
              <strong>Settlement</strong>
              <p>Funds transfer and register update</p>
            </div>
            <span>Target Mar 27</span>
          </div>
        </div>
        <div className="side-stack">
          <div className="panel scenario-card">
            <h3>Scenario controls</h3>
            <p>Explore how exception paths affect the process.</p>
            <label>
              <span>Compliance approved</span>
              <select
                value={compliance}
                onChange={(e) =>
                  setCompliance(e.target.value as typeof compliance)
                }
              >
                <option value="passed">Approved</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed — pause</option>
              </select>
            </label>
            <label>
              <span>GP approved</span>
              <Toggle
                checked={gpApproved}
                onClick={() => setGpApproved(!gpApproved)}
              />
            </label>
          </div>
          <div className="panel parties-card">
            <h3>Closing parties</h3>
            <div>
              <i>SV</i>
              <span>
                <strong>Seller</strong>
                <small>Summit View Family Office</small>
              </span>
              <Badge tone="success">Ready</Badge>
            </div>
            <div>
              <i>B3</i>
              <span>
                <strong>Buyer 03</strong>
                <small>Institutional investor</small>
              </span>
              <Badge tone="success">Ready</Badge>
            </div>
            <div>
              <i>GP</i>
              <span>
                <strong>Fund GP</strong>
                <small>Northbridge Partners</small>
              </span>
              <Badge tone="success">Approved</Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

type MapNode = { title: string; sub?: string; decision?: string; no?: string }

const journey: { lane: string; cells: MapNode[][] }[] = [
  {
    lane: "SELLER",
    cells: [
      [{ title: "Create opportunity", sub: "Position details" }],
      [{ title: "Transferable?", decision: "Yes", no: "NO · STOP" }],
      [{ title: "Approve teaser", sub: "Identity protected" }],
      [{ title: "Answer Q&A", sub: "Respond once, logged" }],
      [{ title: "Review final bids", sub: "Shortlist & select" }],
      [{ title: "Sign & settle", sub: "Receive proceeds" }],
    ],
  },
  {
    lane: "BUYER",
    cells: [
      [{ title: "Discover", sub: "Matched opportunity" }],
      [
        { title: "Qualified?", decision: "Yes", no: "NO · DENY" },
        { title: "NDA signed?", decision: "Yes", no: "NO · NO ACCESS" },
      ],
      [{ title: "Diligence", sub: "Data room + seller profile" }],
      [{ title: "Ask & clarify", sub: "Q&A + threads" }],
      [{ title: "Qualifying bid?", decision: "Yes", no: "NO · OUT" }],
      [{ title: "Sign & settle", sub: "Assume interest" }],
    ],
  },
  {
    lane: "ATLAS",
    cells: [
      [{ title: "Verify", sub: "Ownership & data" }],
      [{ title: "Qualify & match", sub: "Control access" }],
      [{ title: "Manage diligence", sub: "Track activity" }],
      [{ title: "Broker Q&A", sub: "Log every answer" }],
      [{ title: "Run process", sub: "Compare execution" }],
      [
        { title: "Compliance approved?", decision: "Yes", no: "NO · PAUSE" },
        { title: "GP approved?", decision: "Yes", no: "NO · NEXT BIDDER" },
        { title: "Close", sub: "Document & settle" },
      ],
    ],
  },
]

function JourneyMap({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="map-page">
      <PageTitle
        eyebrow="End-to-end operating model"
        title="Atlas transaction journey"
        description="A confidential, controlled path from discovery to settlement."
        action={
          <Button variant="secondary" onClick={() => go("dashboard")}>
            Return to prototype
          </Button>
        }
      />
      <div className="map-legend">
        <span>
          <i className="legend-node" /> Process
        </span>
        <span>
          <i className="legend-diamond" /> Decision
        </span>
        <span>
          <i className="legend-no" /> Exception outcome
        </span>
      </div>
      <div className="journey-map">
        <div className="map-corner">PARTICIPANT</div>
        {["DISCOVER", "QUALIFY", "DILIGENCE", "ASK", "COMPETE", "CLOSE"].map(
          (x, i) => (
            <div className="map-col-head" key={x}>
              <span>0{i + 1}</span>
              {x}
            </div>
          ),
        )}
        {journey.map((row) => (
          <div className="map-row-contents" key={row.lane}>
            <div className={`lane-label lane-${row.lane.toLowerCase()}`}>
              <span>{row.lane}</span>
            </div>
            {row.cells.map((cell, ci) => (
              <div className="map-cell" key={ci}>
                {ci < 5 && (
                  <div className="straight-connector">
                    <Icon name="arrow" size={18} />
                  </div>
                )}
                <div className="cell-stack">
                  {cell.map((node, ni) =>
                    node.decision ? (
                      <div className="decision-wrap" key={node.title}>
                        <div className="diamond">
                          <div>
                            <strong>{node.title}</strong>
                            <small>{node.decision} →</small>
                          </div>
                        </div>
                        <span className="no-outcome">{node.no}</span>
                      </div>
                    ) : (
                      <div className="process-node" key={node.title}>
                        <strong>{node.title}</strong>
                        {node.sub && <small>{node.sub}</small>}
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="map-footer">
        <div>
          <Icon name="shield" size={19} />
          <span>
            <strong>Confidentiality is continuous</strong>
            <small>
              Identity and sensitive data are released only after qualification
              and NDA.
            </small>
          </span>
        </div>
        <div>
          <Icon name="close" size={19} />
          <span>
            <strong>Atlas orchestrates every handoff</strong>
            <small>
              Exception paths stop, pause or advance to the next bidder—never
              loop.
            </small>
          </span>
        </div>
        <div>
          <Icon name="chat" size={19} />
          <span>
            <strong>Every question is logged</strong>
            <small>
              Q&A is answered once, shared fairly, and archived with the
              process.
            </small>
          </span>
        </div>
      </div>
    </div>
  )
}

function StatusTracker({ current }: { current: Screen }) {
  const active = statusIndex[current]
  return (
    <div className="status-wrap">
      <div className="status-meta">
        <span>OP-1048 · Northbridge Partners VII</span>
        <strong>{statusSteps[active]}</strong>
      </div>
      <div className="status-track">
        {statusSteps.map((step, i) => (
          <div
            className={`status-step ${
              i < active ? "complete" : i === active ? "active" : ""
            }`}
            key={step}
          >
            <i>{i < active ? <Icon name="check" size={10} /> : i + 1}</i>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const initialScreen = window.location.hash.replace("#", "") as Screen
  const [screen, setScreen] = useState<Screen>(
    [...screens.map((item) => item.id), "journey"].includes(initialScreen)
      ? initialScreen
      : "dashboard",
  )
  const go = (next: Screen) => {
    setScreen(next)
    window.history.replaceState(null, "", `#${next}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const content: Record<Screen, ReactNode> = {
    dashboard: <Dashboard go={go} />,
    create: <CreateOpportunity go={go} />,
    transfer: <Transferability go={go} />,
    teaser: <AnonymousTeaser go={go} />,
    profile: <BuyerProfile go={go} />,
    messages: <Messages go={go} />,
    room: <DataRoom go={go} />,
    bid: <BidSubmission go={go} />,
    compare: <BidComparison go={go} />,
    closing: <ClosingDashboard go={go} />,
    journey: <JourneyMap go={go} />,
  }
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand" onClick={() => go("dashboard")}>
          <span>A</span>
          <strong>ATLAS</strong>
        </button>
        <div className="workspace-switch">
          <i>SV</i>
          <span>
            <strong>Summit View</strong>
            <small>Seller workspace</small>
          </span>
          <Icon name="chevron" size={15} />
        </div>
        <nav>
          <span>TRANSACTION WORKSPACE</span>
          {screens.map((item) => (
            <button
              key={item.id}
              className={screen === item.id ? "active" : ""}
              onClick={() => go(item.id)}
            >
              <Icon name={item.icon} size={17} />
              <span>{item.label}</span>
              {item.id === "compare" && <b>3</b>}
              {item.id === "messages" && <b>2</b>}
            </button>
          ))}
        </nav>
        <div className="nav-divider" />
        <nav>
          <span>PRESENTATION</span>
          <button
            className={screen === "journey" ? "active" : ""}
            onClick={() => go("journey")}
          >
            <Icon name="map" size={17} />
            <span>Journey map</span>
          </button>
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card">
            <Icon name="shield" size={19} />
            <strong>Private by default</strong>
            <small>Atlas protects your identity throughout the process.</small>
          </div>
          <button className="profile">
            <i>AS</i>
            <span>
              <strong>Alexandra Stone</strong>
              <small>Managing Director</small>
            </span>
            <Icon name="more" size={17} />
          </button>
        </div>
      </aside>
      <main>
        <header>
          <button className="mobile-menu">
            <Icon name="menu" />
          </button>
          <div className="header-crumb">
            <span>Atlas Secondary</span>
            <Icon name="chevron" size={13} />
            <strong>
              {screen === "journey"
                ? "Journey map"
                : screens.find((x) => x.id === screen)?.label}
            </strong>
          </div>
          <div className="header-actions">
            <span className="secure">
              <Icon name="lock" size={13} /> Secure session
            </span>
            <button className="notification">2</button>
          </div>
        </header>
        {screen !== "dashboard" && screen !== "journey" && (
          <StatusTracker current={screen} />
        )}
        <div
          className={screen === "journey" ? "content map-content" : "content"}
        >
          {content[screen]}
        </div>
      </main>
    </div>
  )
}
