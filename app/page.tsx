import Image from "next/image";
import EnquiryChat from "./EnquiryChat";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const imagePath = (path: string) => `${basePath}${path}`;

const navItems = [
  {
    label: "Operations",
    href: "#facilities",
    children: [
      ["Facilities", "#facilities"],
      ["Core Services", "#services"],
      ["QHSE", "#qhse"],
      ["Completed Projects", "#projects"],
    ],
  },
];

const facilityCards = [
  {
    id: "dry-dock",
    image: imagePath("/images/gallery-drydock-operation.jpg"),
    title: "Mega 40,000 DWT Dry Dock",
    text: "400 m effective length, 40 m clear width, and 12.8 m structural depth for heavy commercial and technical vessel programs.",
    details: ["Floating caisson gate: 42 m length", "30-minute deballasting capability", "Intermediate dock gate for flexible dual-zone dry-dock operations", "3-speed trolley friction winches and multi-point capstan winches"],
  },
  {
    id: "lifting",
    image: imagePath("/images/gallery-overhead-lifting.jpg"),
    title: "Wharf, Bridge & Lifting",
    text: "Deepwater outfitting and heavy crane systems support block movement, outfitting, and vessel handover operations.",
    details: ["Outfitting wharf: 220 x 25 m", "Approach bridge: 72 x 10 m", "High-absorption cone/D-type fenders and up to 2000 kN bollards", "400-ton gantry crane with 105 m rail gauge span and 58 m hoist clearance", "40-ton portal cranes x3"],
  },
  {
    id: "workshops",
    image: imagePath("/images/gallery-shipbuilding-infrastructure.png"),
    title: "Production Workshops",
    text: "Purpose-built shops for hull assembly, welding, blasting, painting, logistics, stockyard flow, and controlled production.",
    details: ["Hull assembly and welding shop: 150 x 44 m", "Electromagnetic overhead cranes and 400 pin jigs", "Enclosed climate-controlled PLC blasting and painting shop", "Automated abrasive recovery system", "400 m open-air block yard with 200-ton transporter"],
  },
];

const services = [
  ["Capital Ship Repair & Maintenance", "Dry-docking up to 40,000 DWT, hull blasting, coating, machinery overhauls, steel renewal, docking and undocking."],
  ["New Construction", "Tankers, container vessels, and naval fleet surface combatants supported by hull fabrication, outfitting, and production planning."],
  ["Ship Conversion & Retrofitting", "Modernization and retrofit work packages planned through engineering review, class alignment, and controlled dock windows."],
  ["Heavy Industrial & Offshore Fabrication", "Steel blocks, mooring modules, pressure piping grids, and heavy marine fabrication packages."],
  ["Engineering & Naval Architecture", "CAD/CAM support, stability calculations, production planning, Tribon M3, and ShipConstructor capability."],
  ["Blasting & Painting", "Abrasive surface preparation, coating controls, enclosed blasting systems, and documented coating acceptance checks."],
];

const qhse = [
  {
    title: "Zero-Harm Safety",
    items: ["Permit-to-work (PTW)", "Lockout/tagout (LOTO)", "PPE, JSA, toolbox talks", "Emergency response and housekeeping"],
  },
  {
    title: "QA/QC Assurance",
    items: ["ISO 9001:2015 quality practices", "UT, RT, and MPI inspection", "1,000 kW load-bank testing", "Traceable acceptance records"],
  },
  {
    title: "Environmental Compliance",
    items: ["Raw water treatment: 100 t/h", "Industrial sewage treatment: 130 m3/day", "Canteen effluent pool: 22 m3/day", "Oily wastewater tank: 10 m3/day"],
  },
];

const coreValues = [
  ["Operational Precision", "Rigorous engineering controls and absolute accuracy."],
  ["Safety & Integrity First", "Zero-incident culture across all workspaces."],
  ["Reliability & Fleet Readiness", "Minimum off-hire times and optimized scheduling."],
  ["Environmental Stewardship", "Cutting-edge wastewater treatment plants."],
];

const projects = [
  {
    title: "Project 1 (SS1)",
    type: "18,000 DWT General Cargo Ship",
    result: "Completed with zero defects under IACS survey.",
    image: imagePath("/images/project-bulk-carrier-renewal.jpg"),
  },
  {
    title: "Project 2 (Big Deck 1)",
    type: "20,000 DWT Barge",
    result: "Completed heavy-deck barge project reference for commercial marine operations.",
    image: imagePath("/images/project-supply-vessel-upgrade.jpg"),
  },
];

const gallery = [
  [imagePath("/images/gallery-shipyard-overview.png"), "Shipyard overview"],
  [imagePath("/images/gallery-active-berth-operations.png"), "Active berth operations"],
  [imagePath("/images/gallery-shipbuilding-infrastructure.png"), "Shipbuilding infrastructure"],
  [imagePath("/images/gallery-drydock-operation.jpg"), "Dry dock operations"],
  [imagePath("/images/gallery-overhead-lifting.jpg"), "Heavy lifting alignment"],
  [imagePath("/images/gallery-engineering-inspection.jpg"), "Engineering inspection"],
  [imagePath("/images/gallery-vessel-outfitting.jpg"), "Vessel outfitting"],
  [imagePath("/images/gallery-heavy-yard-equipment.jpg"), "Heavy yard equipment"],
];

const messagingContacts = [
  { label: "Telegram", icon: "fa-telegram", href: "" },
  { label: "Viber", icon: "fa-viber", href: "" },
  { label: "WhatsApp", icon: "fa-whatsapp", href: "" },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid px-lg-5">
            <a className="navbar-brand d-flex align-items-center gap-3" href="#home">
              <Image src={imagePath("/images/logo.jpg")} alt="Thilawa Shipyard logo" width={74} height={74} className="brand-logo" priority />
              <span>
                <strong>Thilawa Shipyard</strong>
                <small>Corporate Portal</small>
              </span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto align-items-xl-center">
                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#profile">Profile</a></li>
                {navItems.map((item) => (
                  <li className="nav-item dropdown" key={item.label}>
                    <a className="nav-link dropdown-toggle" href={item.href} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {item.label}
                    </a>
                    <ul className="dropdown-menu">
                      {item.children.map(([label, href]) => (
                        <li key={label}><a className="dropdown-item" href={href}>{label}</a></li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                <li className="nav-item ms-xl-3"><a className="btn btn-primary nav-cta" href="#contact">Request RFQ</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <Image src={imagePath("/images/cover.jpg")} alt="Thilawa Shipyard cover" fill priority className="hero-image" />
          <div className="hero-overlay" />
          <div className="container position-relative">
            <div className="hero-copy">
              <p className="eyebrow">Thilawa Shipyard Corporate Portal</p>
              <h1>Precision Engineering. Absolute Integrity. Global Maritime Excellence.</h1>
              <p className="hero-lead">40,000 DWT dry docking, capital ship repair, new construction, heavy fabrication, and QHSE-controlled delivery.</p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href="#facilities">Explore Capacity</a>
                <a className="btn btn-outline-light btn-lg" href="#contact">Prepare RFQ</a>
              </div>
            </div>
            <div className="hero-metrics">
              <Metric value="400 m" label="Effective dry dock length" />
              <Metric value="40,000" label="DWT dry dock capacity" />
              <Metric value="400 t" label="Gantry crane capacity" />
              <Metric value="220 m" label="Deepwater outfitting wharf" />
            </div>
          </div>
        </section>

        <section id="profile" className="section">
          <div className="container">
            <div className="profile-layout">
              <div className="profile-title">
                <p className="eyebrow">Profile & Identity</p>
                <h2 className="profile-heading">World-class maritime engineering, newbuilding, and ship repair powerhouse in Southeast Asia.</h2>
              </div>
              <div className="profile-summary">
                <div id="mission" className="feature-panel mission-card">
                  <p><strong>Mission:</strong> Engineering safe, high-performance vessels with swift turnaround and strict environmental compliance.</p>
                  <p><strong>Vision:</strong> World-class premier maritime engineering, newbuilding, and ship repair powerhouse in Southeast Asia.</p>
                  <p><strong>Motto:</strong> Precision Engineering. Absolute Integrity. Global Maritime Excellence.</p>
                </div>
              </div>
              <div id="background" className="timeline profile-timeline">
              <Timeline year="April 30, 1998" text="Official contract signing marked a historical milestone in the shipyard's development." />
              <Timeline year="October 15, 1998" text="Modernization and heavy expansion construction operations commenced in three phases." />
              <Timeline year="December 24, 2019" text="Third phase started with the driving of the historic first pile." />
              <Timeline year="2019-2026" text="Infrastructure and machinery integration stages delivered the mega dry dock, outfitting wharf, crane systems, blast/paint facilities, software, and environmental plants." />
              </div>
            </div>
            <div className="values-panel mt-5">
              <div>
                <p className="eyebrow">Core Values</p>
                <h3>Operational discipline for safety, accuracy, readiness, and environmental care.</h3>
              </div>
              <div className="values-grid">
                {coreValues.map(([title, text]) => (
                  <article key={title}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="facilities" className="section section-dark">
          <div className="container">
            <div className="section-title">
              <p className="eyebrow">Yard Facilities & Infrastructure</p>
              <h2>Heavy maritime infrastructure designed for controlled production flow.</h2>
            </div>
            <div className="row g-4">
              {facilityCards.map((card) => (
                <div className="col-lg-4" key={card.title} id={card.id}>
                  <article className="capacity-card h-100">
                    <Image src={card.image} alt={card.title} width={760} height={440} className="capacity-image" />
                    <div className="capacity-copy">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                      <ul>
                        {card.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-title">
              <p className="eyebrow">Core Services Provided</p>
              <h2>Integrated maritime services for repair, construction, fabrication, and engineering.</h2>
            </div>
            <div className="service-matrix">
              {services.map(([title, text], index) => (
                <article className="service-row" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="qhse" className="section section-soft">
          <div className="container">
            <div className="section-title">
              <p className="eyebrow">QHSE</p>
              <h2>Zero-harm safety, documented quality, and environmental treatment systems.</h2>
            </div>
            <div className="row g-4">
              {qhse.map((item) => (
                <div className="col-lg-4" key={item.title}>
                  <article className="qhse-card">
                    <h3>{item.title}</h3>
                    <ul>
                      {item.items.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
            <div id="standards" className="standards-strip">
              <span>ISO 9001:2015</span>
              <span>ISO 14001:2015</span>
              <span>ISO 45001:2018</span>
              <span>IACS Compliance</span>
              <span>DNV / ABS / LR / ClassNK / CCS pathways</span>
            </div>
            <div className="certification-note">
              <p><strong>IACS Compliance:</strong> Industrial workflows adhere to international maritime standards.</p>
              <p><strong>Class Approvals:</strong> Authorized under major IACS members including DNV, ABS, LR, ClassNK, and CCS.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-title">
              <p className="eyebrow">Completed Projects</p>
              <h2>Completed commercial vessel and barge references.</h2>
            </div>
            <div className="row g-4">
              {projects.map((project) => (
                <div className="col-md-6" key={project.title}>
                  <article className="project-card">
                    <Image src={project.image} alt={project.type} width={900} height={560} />
                    <div>
                      <p className="eyebrow">{project.title}</p>
                      <h3>{project.type}</h3>
                      <p>{project.result}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section section-dark">
          <div className="container">
            <div className="section-title">
              <p className="eyebrow">Gallery</p>
              <h2>Yard infrastructure, outfitting, inspection, and heavy-lift activity.</h2>
            </div>
            <div className="gallery-grid">
              {gallery.map(([src, label]) => (
                <figure key={src}>
                  <Image src={src} alt={label} width={620} height={430} />
                  <figcaption>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-6">
                <div className="contact-panel h-100">
                  <p className="eyebrow">Port, Power & Contact</p>
                  <h2>RFQ and commercial contact</h2>
                  <p>Submit vessel particulars, defect list or scope, class certificates, and structural drawings for technical review.</p>
                  <ul className="contact-list">
                    <li><strong>Email:</strong> commercial@thilawashipyard.com</li>
                    <li><strong>Location:</strong> Thilawa Maritime Zone, Yangon Region, Myanmar</li>
                    <li><strong>Exact coordinate:</strong> 16.703389, 96.228917</li>
                    <li><strong>Power grid:</strong> 33 kV / 6.6 kV station, 10 MVA transformer, 3,250 kW generator backup</li>
                  </ul>
                  <iframe
                    title="Thilawa Shipyard location"
                    src="https://www.google.com/maps?q=16.703389,96.228917&hl=en&z=15&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <form className="rfq-form h-100">
                  <label>Full name<input className="form-control" type="text" /></label>
                  <label>Email<input className="form-control" type="email" /></label>
                  <label>Company<input className="form-control" type="text" /></label>
                  <label>Service required
                    <select className="form-select">
                      <option>Capital Ship Repair & Maintenance</option>
                      <option>New Construction</option>
                      <option>Ship Conversion & Retrofitting</option>
                      <option>Heavy Industrial & Offshore Fabrication</option>
                      <option>Engineering & Naval Architecture</option>
                    </select>
                  </label>
                  <label>RFQ details<textarea className="form-control" rows={5} placeholder="Vessel particulars, defect list/scope, class certificates, drawings..." /></label>
                  <button className="btn btn-primary btn-lg" type="button">Prepare Enquiry</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-about">
            <div className="footer-brand-row">
              <Image src={imagePath("/images/logo.jpg")} alt="Thilawa Shipyard logo" width={58} height={58} />
              <div>
                <strong>Thilawa Shipyard</strong>
                <p>Corporate maritime engineering portal.</p>
              </div>
            </div>
            <p>40,000 DWT dry docking, capital ship repair, new construction, heavy fabrication, and QHSE-controlled delivery from Thilawa Maritime Zone.</p>
          </div>

          <div>
            <h4>Capabilities</h4>
            <a href="#facilities">Yard Facilities</a>
            <a href="#services">Core Services</a>
            <a href="#qhse">QHSE</a>
            <a href="#projects">Completed Projects</a>
          </div>

          <div>
            <h4>RFQ Documents</h4>
            <p>Vessel particulars</p>
            <p>Defect list / scope of work</p>
            <p>Class certificates</p>
            <p>Structural drawings</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p><a href="mailto:commercial@thilawashipyard.com">commercial@thilawashipyard.com</a></p>
            <p>Thilawa Maritime Zone, Yangon Region, Myanmar</p>
            <p>16.703389, 96.228917</p>
            <div className="footer-socials" aria-label="Messaging contacts">
              {messagingContacts.map((contact) =>
                contact.href ? (
                  <a key={contact.label} href={contact.href} target="_blank" rel="noreferrer" aria-label={contact.label}>
                    <i className={`fa-brands ${contact.icon}`} aria-hidden="true" />
                    <span>{contact.label}</span>
                  </a>
                ) : (
                  <span key={contact.label} className="is-pending" aria-label={`${contact.label} contact not added yet`}>
                    <i className={`fa-brands ${contact.icon}`} aria-hidden="true" />
                    <span>{contact.label}</span>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Thilawa Shipyard. All rights reserved.</span>
          <span>Precision Engineering. Absolute Integrity. Global Maritime Excellence.</span>
        </div>
      </footer>
      <EnquiryChat />
    </>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Timeline({ year, text }: { year: string; text: string }) {
  return (
    <article>
      <span>{year}</span>
      <p>{text}</p>
    </article>
  );
}
