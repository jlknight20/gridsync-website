export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="/"
            aria-label="Gridsync Solutions home"
            className="flex min-w-0 items-center gap-4 rounded-lg outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"></a>
          
            <img
              src="/GridSync_logo_transparent.jpg"
              alt="GridSync Solutions logo"
              className="h-14 w-14 shrink-0 object-contain sm:h-[72px] sm:w-[72px]"/>
            <div className="min-w-0">
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="text-[22px] font-bold leading-none tracking-tight text-white sm:text-[30]">
                  GridSync </span>
                <span className="text-[17px] font-medium leading-none tracking-tight text-white/92 sm:text-[23px]">Solutions
                </span>
              </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,199,199,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,116,144,0.25),_transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,199,199,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,199,199,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/70 shadow-lg shadow-cyan-500/10">
                <svg viewBox="0 0 100 100" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="url(#g)" strokeWidth="4" />
                  <path d="M28 30 L24 58 M72 30 L76 58 M24 36 H40 M60 36 H76 M22 44 H42 M58 44 H78" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M30 30 L26 58 L34 58 L30 30Z" stroke="url(#g)" strokeWidth="3"/>
                  <path d="M70 30 L66 58 L74 58 L70 30Z" stroke="url(#g)" strokeWidth="3"/>
                  <path d="M16 58 C34 56 40 52 50 44 C60 52 66 56 84 58" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M22 68 C36 58 44 56 50 52 C56 56 64 58 78 68" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M28 76 C40 66 50 60 72 76" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="g" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#22d3ee" />
                      <stop offset="1" stopColor="#0f766e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold tracking-wide text-white">GridSync Solutions</div>
                <div className="text-sm text-cyan-300">Faster approvals. Fewer delays.</div>
              </div>
            </div>
            <a href="#contact" className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20">
              Schedule a Conversation
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28 lg:pt-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Outage Coordination Services | Switching Order Support | Utility Project Coordination
            </div>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Outage Coordination &amp; Switching Support for Utility Contractors
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              GridSync Solutions provides outage coordination services, switching order support, TOA / ORCA submission support,
              and utility project coordination for contractors working in distribution and transmission environments. We help reduce
              outage approval delays, revision cycles, and schedule bottlenecks so crews can stay productive and projects can keep moving.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#services" className="rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300">
                View Services
              </a>
              <a href="#contact" className="rounded-2xl border border-slate-600 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200">
                Request Information
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Outage Coordination", "Reduce approval bottlenecks before work starts."],
                ["Switching Orders", "Support safe, aligned execution in the field."],
                ["Utility Project Support", "Keep schedules moving across active programs."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/20">
                  <div className="font-semibold text-white">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Why clients use us
              </div>
              <div className="mt-5 space-y-4">
                {[
                  ["Longer outage approval timelines", "We help reduce delays before crews are ready to mobilize."],
                  ["Too many revision cycles", "We tighten coordination and submissions to reduce back-and-forth."],
                  ["Field teams waiting on outages", "We help align switching and planning with construction schedules."],
                  ["Overloaded internal teams", "We take coordination work off PMs, foremen, and project teams."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-400">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Services</div>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Utility outage coordination services built to reduce delays and keep projects on schedule.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              We support the coordination layer behind utility construction so outage planning, switching orders, TOA / ORCA submissions,
              and project schedules do not become the hidden bottleneck. Our services are designed for utility contractors supporting
              distribution and transmission work across active programs and outage-heavy project environments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Outage Writing & TOA / ORCA Submittals",
                items: ["TOA / ORCA submissions", "Initial outage write-ups", "Revision handling", "Utility-specific coordination support"],
              },
              {
                title: "Switching Order Development",
                items: ["Switching draft support", "Execution alignment", "Sequence review", "Safety-focused coordination"],
              },
              {
                title: "Program-Level Support",
                items: ["Weekly outage planning", "Schedule alignment", "Conflict visibility", "Project support across multiple active jobs"],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-7 shadow-lg shadow-black/20">
                <div className="text-xl font-bold text-white">{card.title}</div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">How it works</div>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">A utility outage planning process built to reduce delays, revisions, and schedule risk.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                  We integrate into your workflow, support your outage pipeline, and help keep outage approvals, switching coordination,
                  utility submissions, and construction schedules moving. This process is built for contractors handling utility work in
                  distribution and transmission systems where delays in coordination can quickly impact project execution.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  "1. Scope intake and project review",
                  "2. GIS / feeder validation and coordination prep",
                  "3. Outage write-up and switching support",
                  "4. Submission, revisions, and utility follow-through",
                  "5. Schedule alignment so work is ready when outages are approved",
                ].map((step) => (
                  <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-base text-slate-200">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              ["Built for contractors", "Designed around the pressure PMs, foremen, and project teams face when outages start stacking up."],
              ["Focused on execution", "We support the work behind the work so construction schedules are not waiting on coordination."],
              ["Structured to scale", "Start with overflow support or build toward ongoing coordination across active projects."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                <div className="text-xl font-bold text-white">{title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section id="contact" className="border-t border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact GridSync Solutions</div>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Talk with an outage coordination partner built for utility contractors.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                If your team is dealing with outage approval delays, switching order bottlenecks, TOA / ORCA workload, or coordination gaps
                across utility projects, GridSync Solutions can help support your process. We work with contractors that need reliable outage
                coordination support to keep distribution and transmission work moving.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/20">
              <div className="space-y-5 text-sm text-slate-300">
                <div>
                  <div className="text-slate-500">Company</div>
                  <div className="mt-1 text-base font-semibold text-white">GridSync Solutions</div>
                </div>
                <div>
                  <div className="text-slate-500">Email</div>
                  <a
                    href="mailto:info@gridsync-co.com"
                    className="mt-1 block text-base font-semibold text-cyan-300 hover:text-cyan-400 transition-colors duration-200">info@gridsync-co.com
                  </a>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-100">
                External outage coordination for utility contractors, built to reduce bottlenecks and keep projects moving.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
