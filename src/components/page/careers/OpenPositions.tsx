"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, ChevronDown } from "lucide-react";

const positions = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full-time",
    mode: "Remote",
    experience: "1–3 years",
    department: "Engineering",
    description:
      "We're looking for a skilled frontend developer who loves building beautiful, fast, and accessible web interfaces. You'll work closely with our design and backend teams to ship polished products.",
    responsibilities: [
      "Build responsive UIs with Next.js, React, and Tailwind CSS",
      "Collaborate with designers to implement pixel-perfect designs",
      "Optimise for performance, SEO, and Core Web Vitals",
      "Write clean, maintainable, well-documented code",
      "Participate in code reviews and technical discussions",
    ],
    requirements: [
      "Strong proficiency in React and Next.js",
      "Experience with TypeScript and Tailwind CSS",
      "Understanding of web performance and SEO basics",
      "Familiarity with Git and modern dev workflows",
      "Good communication skills in English",
    ],
    niceToHave: ["Sanity or other headless CMS experience", "Framer Motion animations", "UI/UX sensibility"],
  },
  {
    id: 2,
    title: "SEO & Content Specialist",
    type: "Full-time",
    mode: "Remote",
    experience: "1–2 years",
    department: "Marketing",
    description:
      "We need a data-driven SEO specialist who can build and execute content strategies that drive organic growth for our clients and our own brand.",
    responsibilities: [
      "Conduct keyword research and competitor analysis",
      "Create and optimise SEO-friendly content",
      "Manage on-page and technical SEO for client websites",
      "Monitor and report on rankings, traffic, and conversions",
      "Manage Google Business profiles and local SEO",
    ],
    requirements: [
      "Hands-on experience with SEMrush, Ahrefs, or similar tools",
      "Strong writing and editing skills",
      "Understanding of technical SEO fundamentals",
      "Familiarity with Google Analytics and Search Console",
      "Ability to manage multiple client accounts",
    ],
    niceToHave: ["Google Ads experience", "Video SEO knowledge", "Content marketing background"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Freelance / Part-time",
    mode: "Remote",
    experience: "1–3 years",
    department: "Design",
    description:
      "We're looking for a talented designer who can create beautiful, user-centred designs for web and mobile products. You'll own design end-to-end — from wireframes to final handoff.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs in Figma",
      "Develop and maintain design systems and component libraries",
      "Collaborate closely with developers during implementation",
      "Conduct usability reviews and iterate based on feedback",
      "Contribute to brand identity and visual direction",
    ],
    requirements: [
      "Strong Figma skills — components, auto-layout, prototyping",
      "Portfolio demonstrating web and/or mobile design work",
      "Understanding of responsive design principles",
      "Eye for typography, spacing, and visual hierarchy",
      "Ability to give and receive design feedback",
    ],
    niceToHave: ["Motion design experience", "Framer prototyping", "Illustration skills"],
  },
];

const departmentColors: Record<string, string> = {
  Engineering: "bg-deepspace-dim text-deepspace",
  Marketing: "bg-malachite-dim text-malachite-rich",
  Design: "bg-surface text-subtle border border-border",
};

function PositionCard({ position }: { position: typeof positions[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-2xl border transition-all duration-300
      ${open ? "border-malachite bg-white shadow-lg shadow-deepspace/5" : "border-border bg-white hover:border-malachite/40"}`}>

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${departmentColors[position.department]}`}>
              {position.department}
            </span>
            <span className="rounded-full bg-surface border border-border px-3 py-0.5 text-xs font-semibold text-subtle">
              {position.type}
            </span>
          </div>
          <h3 className="text-lg font-black text-deepspace">{position.title}</h3>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted">
            <span className="flex items-center gap-1"><MapPin size={11} /> {position.mode}</span>
            <span className="flex items-center gap-1"><Briefcase size={11} /> {position.experience}</span>
            <span className="flex items-center gap-1"><Clock size={11} /> {position.type}</span>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted mt-1 transition-transform duration-300 ${open ? "rotate-180 text-malachite" : ""}`}
        />
      </button>

      {/* Expanded */}
      {open && (
        <div className="border-t border-border px-6 pb-6 pt-5 flex flex-col gap-6">
          <p className="text-sm font-light leading-relaxed text-muted">{position.description}</p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Responsibilities */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-deepspace">Responsibilities</h4>
              <ul className="flex flex-col gap-2">
                {position.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-malachite-dim">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#00a34b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-xs font-medium text-subtle leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-deepspace">Requirements</h4>
              <ul className="flex flex-col gap-2">
                {position.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-deepspace/30 shrink-0 mt-1.5" />
                    <span className="text-xs font-medium text-subtle leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nice to have */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-muted">Nice to Have</h4>
            <div className="flex flex-wrap gap-2">
              {position.niceToHave.map((item) => (
                <span key={item} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-subtle">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Apply CTA */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
            <Link
              href={`mailto:careers@tecorbitron.com?subject=Application: ${position.title}`}
              className="inline-flex items-center gap-2
                bg-malachite text-deepspace-deep
                px-5 py-2.5 rounded-full text-sm font-bold
                transition-all duration-200
                hover:bg-malachite-soft hover:-translate-y-0.5"
            >
              Apply for this Role
              <ArrowRight size={14} />
            </Link>
            <span className="text-xs text-muted font-medium">
              Send your resume + portfolio to{" "}
              <a href="mailto:careers@tecorbitron.com" className="text-malachite-rich font-semibold hover:underline">
                careers@tecorbitron.com
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OpenPositions() {
  return (
    <section className="bg-surface py-24 px-4">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-malachite-dim px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-malachite" />
            <span className="text-xs font-bold uppercase tracking-widest text-malachite-rich">
              Open Positions
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-deepspace sm:text-5xl">
            We&apos;re{" "}
            <span className="text-malachite">Hiring</span>
          </h2>
          <p className="max-w-xl text-base font-light leading-relaxed text-muted">
            {positions.length} open role{positions.length !== 1 ? "s" : ""} right now. Click any role to see the full details and apply.
          </p>
        </div>

        {/* Positions */}
        <div className="flex flex-col gap-4">
          {positions.map((position) => (
            <PositionCard key={position.id} position={position} />
          ))}
        </div>

      </div>
    </section>
  );
}
