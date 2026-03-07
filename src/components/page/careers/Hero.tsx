export default function Hero() {
  return (
    <section
      className="relative flex min-h-[40vh] w-full flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-40"
      style={{
        background: "linear-gradient(135deg, #071e2d 0%, #0c3146 50%, #164965 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,208,96,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center gap-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-malachite/20 bg-malachite/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-malachite" />
          <span className="text-xs font-bold uppercase tracking-widest text-malachite">
            Careers
          </span>
        </div>

        <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
          Build the Future{" "}
          <span className="text-malachite">With Us</span>
        </h1>

        <p className="max-w-xl text-base font-light leading-relaxed text-white/50">
          We&apos;re a small but ambitious team building next-gen digital
          products. If you love technology, care about craft, and want your
          work to actually matter — you&apos;ll fit right in.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
          {[
            { value: "Remote", label: "First Culture" },
            { value: "Fast", label: "Growth Path" },
            { value: "Real", label: "Ownership" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-black text-malachite">{stat.value}</span>
              <span className="text-xs font-medium text-white/30">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
