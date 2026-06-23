"use client";

import { useState, useEffect } from "react";
import { Zap, UserCheck, HandHeart, CircleCheckBig } from "lucide-react";
import Link from "next/link";

type FormData = {
    name: string;
    company: string;
    email: string;
    phone: string;
    description: string;
};

type Status = "idle" | "sending" | "success" | "error";

const trustSignals = [
    {
        icon: Zap,
        title: "Fast Response",
        desc: "We respond to all inquiries within one business day. For time-sensitive projects, WhatsApp is the fastest way to reach us.",
    },
    {
        icon: UserCheck,
        title: "Direct Approach",
        desc: "You work directly with experienced specialists — no handoffs, no lost context.",
    },
    {
        icon: HandHeart,
        title: "Zero Pressure",
        desc: "We focus on helping you make the right decision for your business — even if that means referring you elsewhere.",
    },
];

const emptyForm: FormData = {
    name: "",
    company: "",
    email: "",
    phone: "",
    description: "",
};

export default function ProjectInquiry() {
    const [form, setForm] = useState<FormData>(emptyForm);
    const [status, setStatus] = useState<Status>("idle");

    // ── Auto-dismiss success after 3s ──
    useEffect(() => {
        if (status !== "success") return;
        const timer = setTimeout(() => setStatus("idle"), 3000);
        return () => clearTimeout(timer);
    }, [status]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone || !form.description)
            return;

        setStatus("sending");
        try {
            const res = await fetch("/api/project-inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("success");
                setForm(emptyForm);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="bg-canvas-white side-layout-spacing">
            <div className="edge-light mx-auto max-w-7xl border-x">
                <div className="section-header-spacing grid grid-cols-1 gap-y-24 xl:grid-cols-[1fr_2fr]">
                    <div className="side-breathing">
                        <h2 className="text-h2 text-ink-primary mb-8 font-serif">
                            Discuss Your Project
                        </h2>
                        <p className="text-18 text-ink-secondary max-w-xl leading-relaxed">
                            Have a project in mind, a question for our team, or
                            just want to know more about what we do? Fill in the
                            form below and {"we'll"} get back to you shortly.
                        </p>
                    </div>

                    <div className="side-breathing">
                        {status === "success" ? (
                            <div className="flex-center h-full w-full">
                                <div className="flex-vertical items-center text-center">
                                    <div className="bg-malachite/10 flex-center mb-6 h-24 w-24 rounded-full">
                                        <span>
                                            <CircleCheckBig
                                                size={48}
                                                className="text-malachite"
                                            />
                                        </span>
                                    </div>
                                    <h3 className="text-h4 text-ink-primary mb-4 font-medium tracking-tight">
                                        Inquiry Received
                                    </h3>
                                    <p className="text-body text-ink-secondary mb-8 max-w-sm leading-relaxed">
                                        Thank you! Our team will review your
                                        submission and reach out within 24
                                        hours.
                                    </p>
                                    <p className="text-body text-ink-muted font-mono">
                                        This message will close automatically…
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full w-full select-none">
                                <form
                                    onSubmit={handleSubmit}
                                    className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2"
                                >
                                    <input
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="form-field"
                                        required
                                        minLength={3}
                                        maxLength={60}
                                        pattern="[A-Za-z\s'-]+"
                                        title="Please enter a valid name (letters only)"
                                    />
                                    <input
                                        name="company"
                                        type="text"
                                        autoComplete="organization"
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder="Company Name (optional)"
                                        className="form-field"
                                        maxLength={100}
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Work Email"
                                        className="form-field w-full"
                                        required
                                        maxLength={100}
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="form-field w-full"
                                        required
                                        inputMode="tel"
                                    />
                                    <textarea
                                        name="description"
                                        rows={6}
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="How Can We Help You?"
                                        className="form-field w-full resize-none md:col-span-2"
                                        required
                                        minLength={20}
                                        maxLength={1000}
                                    />
                                    <div className="flex-vertical w-full gap-6 md:col-span-2">
                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="form-submit-button"
                                        >
                                            {status === "sending"
                                                ? "Sending..."
                                                : "Send Request"}
                                        </button>

                                        <span className="text-small text-ink-muted text-center">
                                            By submitting this form, you agree
                                            to our{" "}
                                            <Link
                                                href={"/legal/privacy-policy"}
                                                className="button-text"
                                            >
                                                privacy policy
                                            </Link>{" "}
                                            and{" "}
                                            <Link
                                                href={"/legal/terms"}
                                                className="button-text"
                                            >
                                                terms
                                            </Link>
                                        </span>

                                        {status === "error" && (
                                            <p className="text-small text-error text-center font-medium">
                                                Something went wrong. Email us
                                                at{" "}
                                                <a
                                                    href="mailto:contact@tecorbitron.com"
                                                    className="underline underline-offset-4"
                                                >
                                                    contact@tecorbitron.com
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Trust Signals ── */}
            <div className="edge-light mx-auto grid max-w-7xl grid-cols-1 border-l lg:grid-cols-3">
                {trustSignals.map(({ icon: Icon, title, desc }) => (
                    <div
                        key={title}
                        className="flex-vertical edge-light side-breathing gap-4 border-t border-r py-16"
                    >
                        <div className="flex items-center gap-2">
                            <Icon size={20} className="text-malachite" />
                            <h3 className="text-body text-ink-primary font-medium">
                                {title}
                            </h3>
                        </div>
                        <p className="text-body text-ink-secondary leading-relaxed">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
