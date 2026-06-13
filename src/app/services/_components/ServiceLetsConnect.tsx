"use client";

import { useState, useEffect } from "react";

type FormData = {
    name: string;
    company: string;
    email: string;
    phone: string;
    description: string;
};

type Status = "idle" | "sending" | "success" | "error";

const emptyForm: FormData = {
    name: "",
    company: "",
    email: "",
    phone: "",
    description: "",
};

export default function ServiceLetsConnect() {
    const [form, setForm] = useState<FormData>(emptyForm);
    const [status, setStatus] = useState<Status>("idle");

    // auto-dismiss success after 3s
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
        if (!form.name || !form.email) return;

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
            <div className="edge-light mx-auto max-w-7xl border-x py-12 md:py-18 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* ── LEFT ── */}
                    <div className="side-breathing flex flex-col justify-between gap-24">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-h2 text-ink-light-primary font-serif leading-tight">
                                {"Let's"} Start a <br /> Conversation Today!
                            </h2>
                            <p className="text-body text-ink-light-secondary max-w-100 leading-relaxed">
                                Submit your details, and {"we'll"} connect with
                                you to explore the best-fit solution that drives
                                success.
                            </p>
                        </div>
                        <span className="text-16 text-ink-light-muted font-mono">
                            Drop us a line at{" "}
                            <a
                                href="mailto:contact@tecorbitron.com"
                                className="text-primary hover:text-primary-active smooth-transition font-medium underline-offset-4 hover:underline"
                            >
                                contact@tecorbitron.com
                            </a>
                        </span>
                    </div>

                    {/* ── RIGHT — form or success ── */}
                    <div className="side-breathing px-4 md:px-6">
                        {status === "success" ? (
                            <div className="flex-center h-full min-h-64 flex-col gap-4 text-center">
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
                                    placeholder="Company Name (Optional)"
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
                                />
                                <textarea
                                    name="description"
                                    rows={3}
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project…"
                                    className="form-field w-full resize-none sm:col-span-2"
                                />

                                <div className="flex-vertical w-full gap-6 sm:col-span-2">
                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="bg-primary active:bg-primary-active text-16 smooth-transition mx-auto block px-12 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {status === "sending"
                                            ? "Sending..."
                                            : "Send Request"}
                                    </button>

                                    <span className="text-xmall text-ink-light-muted text-center">
                                        By submitting this form you are agree to
                                        our privacy policy and terms.
                                    </span>

                                    {status === "error" && (
                                        <p className="text-small text-error text-center font-medium">
                                            Something went wrong. Kindly email
                                            us at{" "}
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
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
