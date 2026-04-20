import { useState } from "react";
export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    try {
      // Replace this with your real submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Form submit failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur-md">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,199,199,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,116,144,0.25),_transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,199,199,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,199,199,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/70 shadow-lg shadow-cyan-500/10">
                <img
                  src="/gridsync_logo_full_header_ready_correct.png"
                  alt="GridSync Solutions logo"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div>
                <div className="text-xl font-bold tracking-wide text-white">
                  GridSync Solutions
                </div>
                <div className="text-sm text-cyan-300">
                  Faster approvals. Fewer delays.
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Schedule a Conversation
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28 lg:pt-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Outage Coordination Services | Switching Order Support | Utility
              Project Coordination
            </div>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Outage Coordination &amp; Switching Support for Utility
              Contractors
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              GridSync Solutions provides outage coordination services,
              switching order support, TOA / ORCA submission support, and
              utility project coordination for contractors working in
              distribution and transmission environments. We help reduce outage
              approval delays, revision cycles, and schedule bottlenecks so
              crews can stay productive and projects can keep moving.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Services
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-slate-600 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Request Information
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                [
                  "Outage Coordination",
                  "Reduce approval bottlenecks before work starts.",
                ],
                [
                  "Switching Orders",
                  "Support safe, aligned execution in the field.",
                ],
                [
                  "Utility Project Support",
                  "Keep schedules moving across active programs.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/20"
                >
                  <div className="font-semibold text-white">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Why clients use us
              </div>

              <div className="mt-5 space-y-4">
                {[
                  [
                    "Longer outage approval timelines",
                    "We help reduce delays before crews are ready to mobilize.",
                  ],
                  [
                    "Too many revision cycles",
                    "We tighten coordination and submissions to reduce back-and-forth.",
                  ],
                  [
                    "Field teams waiting on outages",
                    "We help align switching and planning with construction schedules.",
                  ],
                  [
                    "Overloaded internal teams",
                    "We take coordination work off PMs, foremen, and project teams.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <div className="font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-400">
                      {text}
                    </div>
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
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Services
            </div>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Utility outage coordination services built to reduce delays and
              keep projects on schedule.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-400">
              We support the coordination layer behind utility construction so
              outage planning, switching orders, TOA / ORCA submissions, and
              project schedules do not become the hidden bottleneck. Our
              services are designed for utility contractors supporting
              distribution and transmission work across active programs and
              outage-heavy project environments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Outage Writing & TOA / ORCA Submittals",
                items: [
                  "TOA / ORCA submissions",
                  "Initial outage write-ups",
                  "Revision handling",
                  "Utility-specific coordination support",
                ],
              },
              {
                title: "Switching Order Development",
                items: [
                  "Switching draft support",
                  "Execution alignment",
                  "Sequence review",
                  "Safety-focused coordination",
                ],
              },
              {
                title: "Program-Level Support",
                items: [
                  "Weekly outage planning",
                  "Schedule alignment",
                  "Conflict visibility",
                  "Project support across multiple active jobs",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7 shadow-lg shadow-black/20"
              >
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
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  How it works
                </div>

                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  A utility outage planning process built to reduce delays,
                  revisions, and schedule risk.
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-400">
                  We integrate into your workflow, support your outage pipeline,
                  and help keep outage approvals, switching coordination,
                  utility submissions, and construction schedules moving. This
                  process is built for contractors handling utility work in
                  distribution and transmission systems where delays in
                  coordination can quickly impact project execution.
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
                  <div
                    key={step}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-base text-slate-200"
                  >
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
              [
                "Built for contractors",
                "Designed around the pressure PMs, foremen, and project teams face when outages start stacking up.",
              ],
              [
                "Focused on execution",
                "We support the work behind the work so construction schedules are not waiting on coordination.",
              ],
              [
                "Structured to scale",
                "Start with overflow support or build toward ongoing coordination across active projects.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7"
              >
                <div className="text-xl font-bold text-white">{title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-slate-950 py-24 text-slate-100"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,116,144,0.12),_transparent_32%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                  Schedule a Conversation
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Keep approvals moving and project delays under control.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  GridSync Solutions supports outage coordination, switching
                  planning, and project communication for teams that need faster
                  decisions, fewer bottlenecks, and clearer field-to-office
                  alignment.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-500/15 bg-slate-900/70 p-5">
                    <p className="text-sm font-medium text-white">Email</p>
                    <a
                      href="mailto:Info@gridsync-co.com"
                      className="mt-2 inline-block text-sm text-cyan-400 transition hover:text-cyan-300"
                    >
                      Info@gridsync-co.com
                    </a>
                  </div>

                  <div className="rounded-2xl border border-cyan-500/15 bg-slate-900/70 p-5">
                    <p className="text-sm font-medium text-white">
                      Response Time
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Typically within 1 business day
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                  <p className="text-sm font-medium text-white">Best fit for</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    <li>
                      Outage coordination support for active utility or
                      contractor projects
                    </li>
                    <li>
                      Switching planning support for scheduled work and
                      approvals
                    </li>
                    <li>
                      Project teams needing clearer communication and faster
                      coordination
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-500/15 bg-slate-900/85 p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="border-b border-white/10 pb-5">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    Request Information
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Share a few details about your project and we’ll follow up
                    with the right next step.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-200"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-slate-200"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option>Outage Coordination</option>
                      <option>Switching Support</option>
                      <option>Project Planning</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Briefly describe the work, timeline, or coordination support you need."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Schedule a Conversation"}
                  </button>

                  {isSuccess && (
                    <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-200">
                      Thank you. Your message was sent successfully. We’ll
                      follow up within 1 business day.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}