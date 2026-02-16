"use client";

import { useState } from "react";
import GlassContainer from "@/components/ui/GlassContainer";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: "Phone",
        value: "+91 98765 43210",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: "Email",
        value: "contact@mythx.in",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: "Location",
        value: "Hyderabad, India",
    },
];

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) {
            alert("Please fill in all fields.");
            return;
        }
        setIsSubmitting(true);
        try {
            console.log("Contact form submitted:", formState);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubmitted(true);
            setFormState({ name: "", email: "", message: "" });
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="relative py-28 md:py-36 px-4 text-center">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px]" />
                </div>
                <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-4">
                    Contact Us
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Get In <span className="text-accent-cyan">Touch</span>
                </h1>
                <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
                    Have questions? We&apos;d love to hear from you. Reach out through any of the channels below.
                </p>
            </section>

            {/* Contact Info Cards */}
            <section className="pb-16 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {contactInfo.map((item) => (
                        <GlassContainer key={item.label} className="p-6 text-center hover:border-accent-cyan/30 transition-colors duration-200">
                            <div className="flex justify-center mb-3">{item.icon}</div>
                            <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                            <p className="text-text-muted text-sm">{item.value}</p>
                        </GlassContainer>
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <section className="pb-20 px-4">
                <div className="max-w-2xl mx-auto">
                    <GlassContainer className="p-6 md:p-10">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-white font-semibold mb-2">Message Sent!</p>
                                <p className="text-text-muted text-sm">We&apos;ll get back to you soon.</p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 text-accent-cyan text-sm hover:underline cursor-pointer"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <Input
                                        label="Name *"
                                        placeholder="Your name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        required
                                    />
                                    <Input
                                        label="Email *"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="contact-message" className="text-sm text-text-muted font-medium">
                                        Message *
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        rows={5}
                                        placeholder="How can we help?"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-xl text-white placeholder-text-muted transition-all duration-200 ease-out focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_12px_rgba(0,245,212,0.25)] resize-none"
                                        required
                                    />
                                </div>

                                <Button type="submit" variant="primary" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </GlassContainer>
                </div>
            </section>
        </>
    );
}
