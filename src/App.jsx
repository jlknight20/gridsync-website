export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
    <a
      href="/"
      aria-label="GridSync Solutions home"
      className="flex min-w-0 items-center gap-4 rounded-lg outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <img
        src="/gridsync_logo_full_header_ready_correct.png"
        alt="GridSync Solutions logo"
        className="h-14 w-auto shrink-0 object-contain sm:h-[72px]"
      />

      <div className="min-w-0">
        <div className="flex items-baseline gap-2 whitespace-nowrap">
          <span className="text-[22px] font-bold leading-none tracking-tight text-white sm:text-[30px]">
            GridSync
          </span>
          <span className="text-[17px] font-medium leading-none tracking-tight text-white/92 sm:text-[23px]">
            Solutions
          </span>
        </div>

        <p className="mt-1 hidden text-xs leading-snug text-slate-400 sm:block sm:text-sm">
          Faster approvals. Fewer delays.
        </p>
      </div>
    </a>

    <a
      href="#contact"
      className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-xl bg-slate-700 px-4 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-5"
    >
      <span className="hidden sm:inline">Schedule a Conversation</span>
      <span className="sm:hidden">Contact</span>
    </a>
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
                  <a
                    href="mailto:Info@gridsync-co.com">
                   <div className="text-slate-500">Email</div>
                   <div className="mt-1 text-base font-semibold text-cyan-300">Info@gridsync-co.com</div>
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
