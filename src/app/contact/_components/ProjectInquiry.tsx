"use client";

import { useState, useEffect } from "react";
import { Zap, UserCheck, HandHeart } from "lucide-react";

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
        <section className="bg-canvas-white">
            <div className="edge-light mx-auto max-w-7xl border-x">
                <div className="grid grid-cols-1 gap-y-18 py-12 md:py-18 lg:py-24 xl:grid-cols-[1fr_2fr]">
                    <div className="text-ink-light-primary side-breathing">
                        <h2 className="text-h2 mb-8 font-serif">
                            Discuss Your Project
                        </h2>
                        <p className="text-body text-ink-light-secondary mt-2 max-w-3xl leading-relaxed">
                            Have a project in mind, a question for our team, or
                            just want to know more about what we do? Fill in the
                            form below and {"we'll"} get back to you shortly.
                        </p>
                    </div>

                    <div className="side-breathing flex flex-col gap-8">
                        {status === "success" ? (
                            <div className="flex-center flex-1 flex-col gap-4 py-12 text-center">
                                <div className="bg-malachite-dim flex-center h-16 w-16 rounded-full">
                                    <span className="text-malachite text-h3 font-bold">
                                        ✓
                                    </span>
                                </div>
                                <h3 className="text-h4 text-typocolor-primary font-black tracking-tight">
                                    Inquiry Received
                                </h3>
                                <p className="text-small text-typocolor-secondary max-w-sm leading-relaxed">
                                    Thank you! Our team will review your
                                    submission and reach out within 24 hours.
                                </p>
                                <p className="text-xmall text-typocolor-muted">
                                    This message will close automatically…
                                </p>
                            </div>
                        ) : (
                            <>
                                <form
                                    onSubmit={handleSubmit}
                                    className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
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
                                    />
                                    <input
                                        name="company"
                                        type="text"
                                        autoComplete="organization"
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder="Company Name (optional)"
                                        className="form-field"
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Work Email"
                                        className="form-field"
                                        required
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="form-field"
                                        required
                                    />
                                    <textarea
                                        name="description"
                                        rows={6}
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="How Can We Help You?"
                                        className="form-field w-full resize-none sm:col-span-2"
                                        required
                                    />
                                    <div className="flex-vertical w-full gap-6 sm:col-span-2">
                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="form-submit-button"
                                        >
                                            {status === "sending"
                                                ? "Sending..."
                                                : "Send Request"}
                                        </button>

                                        <span className="text-xmall text-ink-light-muted text-center">
                                            By submitting this form you are
                                            agree to our privacy policy and
                                            terms.
                                        </span>

                                        {status === "error" && (
                                            <p className="text-small text-error text-center font-medium">
                                                Something went wrong. Email us
                                                at{" "}
                                                <a
                                                    href="mailto:info@tecorbitron.com"
                                                    className="underline underline-offset-4"
                                                >
                                                    info@tecorbitron.com
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Trust Signals ── */}
            <div className="edge-light mx-auto grid max-w-7xl grid-cols-1 border-l md:grid-cols-3">
                {trustSignals.map(({ icon: Icon, title, desc }) => (
                    <div
                        key={title}
                        className="flex-vertical edge-light gap-4 border-t border-r px-8 py-20"
                    >
                        <div className="flex items-center gap-2">
                            <Icon size={20} className="text-malachite" />
                            <h3 className="text-body text-ink-light-primary font-medium">
                                {title}
                            </h3>
                        </div>
                        <p className="text-body text-ink-light-secondary leading-relaxed">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
