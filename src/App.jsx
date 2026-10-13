import { useState } from 'react'

const navigation = [['Home', 'home'], ['Capabilities', 'capabilities'], ['About GridSync', 'about'], ['How We Work', 'how-we-work'], ['Contact', 'contact']]
const capabilities = [
  { title: 'Grid Modernization', intro: 'Connecting technology with utility operations.', items: ['ADMS/OMS implementation support', 'Operational workflows and requirements validation', 'System integration coordination', 'Operator readiness'] },
  { title: 'Utility Consulting', intro: 'Practical support for complex utility environments.', items: ['Distribution operations expertise', 'Process improvement and operational assessments', 'Training development', 'Project support'] },
  { title: 'Outage Coordination', intro: 'Bringing plans, schedules, and stakeholders together.', items: ['TOA/ORCA coordination', 'Switching-order development support', 'Outage planning, scheduling, and revisions', 'Contractor coordination'] },
  { title: 'Specialized Field Services', intro: 'Building toward the next layer of infrastructure support.', developing: true, items: ['Overhead and underground electrical infrastructure', 'Cable services', 'Electrical testing and diagnostics', 'Fault location and repair'] },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="GridSync Solutions LLC home" onClick={() => setMenuOpen(false)}>
            <img src="/brand/gridsync-horizontal-original.svg" alt="GridSync Solutions — Integrate, Coordinate, Deliver" width="1280" height="770" />
          </a>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
          <nav id="navigation" aria-label="Main navigation" className={menuOpen ? 'navigation is-open' : 'navigation'}>
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="small-rule" /> GRIDSYNC SOLUTIONS LLC</p>
              <h1>Utility Expertise.<br /><span>Integrated Solutions.</span></h1>
              <p className="hero-description">Supporting electric utilities and infrastructure contractors through grid modernization, operational consulting, outage coordination, and specialized field services.</p>
              <a className="button" href="#capabilities">Explore our capabilities <span className="arrow" aria-hidden="true" /></a>
              <p className="hero-note">Utility consulting &amp; specialized field services</p>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-top"><span>CONNECTED EXPERTISE</span><span>GS / 01</span></div>
              <div className="logo-stage"><img src="/brand/gridsync-horizontal-original.svg" alt="" width="1280" height="770" /></div>
              <div className="art-bottom"><span>INTEGRATE</span><span>COORDINATE</span><span>DELIVER</span></div>
            </div>
          </div>
          <div className="container audience"><span>Supporting the grid ecosystem</span><div>Electric utilities <span aria-hidden="true">/</span> Infrastructure contractors <span aria-hidden="true">/</span> Grid technology organizations</div></div>
        </section>
        <section id="capabilities" className="section container">
          <span id="services" className="legacy-anchor" aria-hidden="true" />
          <div className="section-heading"><div><p className="eyebrow">01 / CAPABILITIES</p><h2>Expertise across<br />a changing grid.</h2></div><p>From operational systems to project coordination, GridSync connects utility knowledge with practical support.</p></div>
          <div className="capability-grid">
            {capabilities.map((capability, index) => <article className={`capability${capability.developing ? ' developing' : ''}`} key={capability.title}>
              <div className="card-top"><span className="card-number">0{index + 1}</span>{capability.developing && <span className="status">Developing capability</span>}</div>
              <h3>{capability.title}</h3><p>{capability.intro}</p>
              <ul>{capability.items.map(item => <li key={item}>{item}</li>)}</ul>
              {capability.developing && <p className="availability">GridSync is expanding toward these services. They are areas of development and are not all currently available. Contact us to confirm scope and availability.</p>}
            </article>)}
          </div>
        </section>
        <section id="about" className="about section">
          <div className="container about-layout"><div><p className="eyebrow">02 / ABOUT GRIDSYNC</p><h2>Utility knowledge.<br />A connected perspective.</h2></div><div><p className="large-copy">GridSync Solutions LLC is a utility consulting and specialized field-services company serving electric utilities, infrastructure contractors, and grid technology organizations.</p><p>Our focus brings together grid modernization, utility operations, and outage coordination, with specialized field services under development. We support the connections between systems, people, and project requirements.</p><div className="tagline">INTEGRATE • COORDINATE • DELIVER</div></div></div>
        </section>
        <section id="how-we-work" className="section container">
          <div className="section-heading"><div><p className="eyebrow">03 / HOW WE WORK</p><h2>Aligned from the start.</h2></div><p>A practical approach shaped around your operational environment, project needs, and team.</p></div>
          <div className="process-grid">{[
            ['Integrate', 'Understand the context.', 'Review the scope, operational requirements, and existing workflows to define where support fits.'],
            ['Coordinate', 'Connect the moving parts.', 'Align stakeholders, system requirements, outage plans, and project schedules around a shared scope.'],
            ['Deliver', 'Support the work ahead.', 'Provide agreed consulting and coordination support, with clear documentation and communication.'],
          ].map(([title, subtitle, text], index) => <article className="process" key={title}><div className="process-top"><span>0{index + 1}</span><span aria-hidden="true">→</span></div><h3>{title}</h3><h4>{subtitle}</h4><p>{text}</p></article>)}</div>
        </section>
        <section id="contact" className="contact section"><div className="container contact-layout"><div><p className="eyebrow">04 / CONTACT</p><h2>Connect with GridSync.</h2><p>For capability information, project support inquiries, or questions about developing field services, contact GridSync Solutions LLC.</p></div><div className="contact-details"><span className="contact-label">EMAIL</span><a href="mailto:info@gridsync-co.com">Info@gridsync-co.com <span className="arrow" aria-hidden="true" /></a><p>Share your project context and the support you’re looking for.</p></div></div></section>
      </main>
      <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} GridSync Solutions LLC</span><span>INTEGRATE • COORDINATE • DELIVER</span><a href="#home">Back to top</a></div></footer>
    </>
  )
}
