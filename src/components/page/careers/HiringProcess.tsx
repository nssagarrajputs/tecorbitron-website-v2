const steps = [
  {
    number: "01",
    title: "Apply",
    desc: "Send us your resume and portfolio to careers@tecorbitron.com. Tell us why you want to join and what you'd bring to the team.",
    duration: "Day 1",
  },
  {
    number: "02",
    title: "Intro Call",
    desc: "A 20-minute call with our founder — casual, no pressure. We want to understand your background, goals, and fit.",
    duration: "Day 2–3",
  },
  {
    number: "03",
    title: "Skill Assessment",
    desc: "A short, practical task relevant to the role. We respect your time — no unpaid projects, no 10-hour take-homes.",
    duration: "Day 4–6",
  },
  {
    number: "04",
    title: "Final Interview",
    desc: "A deeper conversation about the role, expectations, and culture fit. Ask us anything — we're transparent about everything.",
    duration: "Day 7–8",
  },
  {
    number: "05",
    title: "Offer",
    desc: "If it's a mutual fit, we move fast. Offer letter within 24 hours of the final interview — no ghosting, ever.",
    duration: "Day 9–10",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-deepspace py-24 px-4">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-malachite/20 bg-malachite/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-malachite" />
            <span className="text-xs font-bold uppercase tracking-widest text-malachite">
              Our Hiring Process
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Simple, Fast &{" "}
            <span className="text-malachite">Transparent</span>
          </h2>
          <p className="max-w-xl text-base font-light leading-relaxed text-white/50">
            No 6-round interviews, no ghosting. We respect your time as much as our own.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-4">

              {/* Connector — desktop */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-full hidden w-6 border-t border-dashed border-white/10 lg:block" />
              )}

              {/* Number badge */}
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-white/20 uppercase tracking-widest">Step</span>
                <span className="text-2xl font-black text-white leading-none">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-black text-white">{step.title}</h3>
                </div>
                <p className="text-xs font-light leading-relaxed text-white/40">{step.desc}</p>
                <span className="w-fit rounded-full bg-malachite-dim/10 border border-malachite/10 px-3 py-1 text-xs font-bold text-malachite/60">
                  ⏱ {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
