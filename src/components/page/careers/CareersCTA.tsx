import { ArrowRight } from "lucide-react";

export default function CareersCTA() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Open Application */}
          <div
            className="relative overflow-hidden rounded-2xl p-8 flex flex-col gap-5"
            style={{
              background: "linear-gradient(135deg, #0c3146 0%, #164965 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative flex flex-col gap-4">
              <span className="text-3xl">📬</span>
              <h3 className="text-2xl font-black text-white">
                Don&apos;t See Your Role?
              </h3>
              <p className="text-sm font-light leading-relaxed text-white/50">
                We&apos;re always open to exceptional people. If you think you&apos;d
                be a great addition to the team — send us an open application.
                We&apos;d love to hear from you.
              </p>
              <a
                href="mailto:careers@tecorbitron.com?subject=Open Application — Tecorbitron"
                className="inline-flex w-fit items-center gap-2
                  bg-malachite text-deepspace-deep
                  px-5 py-2.5 rounded-full text-sm font-bold
                  transition-all duration-200
                  hover:bg-malachite-soft hover:-translate-y-0.5"
              >
                Send Open Application
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Freelance / Collaborators */}
          <div className="rounded-2xl bg-surface border border-border p-8 flex flex-col gap-5">
            <span className="text-3xl">🤝</span>
            <h3 className="text-2xl font-black text-deepspace">
              Freelancers & Collaborators
            </h3>
            <p className="text-sm font-light leading-relaxed text-muted">
              We regularly collaborate with freelance designers, developers,
              marketers, and copywriters on project basis. If you&apos;re a
              specialist looking for quality work — let&apos;s connect.
            </p>

            <div className="flex flex-col gap-2">
              {["UI/UX Designers", "React Developers", "Content Writers", "Video Editors", "SEO Specialists"].map((role) => (
                <div key={role} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-malachite flex-shrink-0" />
                  <span className="text-xs font-semibold text-subtle">{role}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:collaborate@tecorbitron.com?subject=Freelance Collaboration"
              className="inline-flex w-fit items-center gap-2
                border border-border bg-white text-deepspace
                px-5 py-2.5 rounded-full text-sm font-bold
                transition-all duration-200
                hover:border-malachite hover:text-malachite hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
