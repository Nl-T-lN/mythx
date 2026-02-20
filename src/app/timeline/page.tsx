"use client";

import { motion } from "framer-motion";
import GlassContainer from "@/components/ui/GlassContainer";
import Button from "@/components/ui/Button";

interface TimelineEvent {
    time: string;
    title: string;
    description: string;
    tag: string;
    accent?: boolean;
}

const events: TimelineEvent[] = [
    {
        time: "Week 1 — Mar 1",
        title: "Registration Opens",
        description: "Sign-up portal goes live. Both free and premium tiers available. Secure your spot early — slots are limited.",
        tag: "Registration",
        accent: false,
    },
    {
        time: "Week 2 — Mar 8",
        title: "Team Formation Deadline",
        description: "All teams must be finalised. Solo participants are welcome. Team size: 1–4 members.",
        tag: "Teams",
        accent: false,
    },
    {
        time: "Week 3 — Mar 12",
        title: "Platform Access & Orientation",
        description: "Registered participants gain access to the challenge platform. Orientation webinar and rules briefing.",
        tag: "Prep",
        accent: false,
    },
    {
        time: "Day 1 — Mar 15 · 10:00 AM",
        title: "CTF Begins ⚡",
        description: "Challenges go live across all categories: Web, Crypto, Forensics, Pwn, OSINT, and Reverse Engineering. Scoreboard unlocks.",
        tag: "Live",
        accent: true,
    },
    {
        time: "Day 1 — Mar 15 · 8:00 PM",
        title: "Mid-Event Leaderboard Snapshot",
        description: "Top 10 teams announced. Bonus challenge unlocked for top performers.",
        tag: "Milestone",
        accent: false,
    },
    {
        time: "Day 2 — Mar 16 · 12:00 PM",
        title: "Final Challenge Drop",
        description: "A special bonus challenge released with high point value. Only 4 hours to solve.",
        tag: "Bonus",
        accent: true,
    },
    {
        time: "Day 2 — Mar 16 · 4:00 PM",
        title: "CTF Ends & Scoreboard Freeze",
        description: "All submissions close. Final scores locked. Results verified by the judging panel.",
        tag: "Close",
        accent: false,
    },
    {
        time: "Day 2 — Mar 16 · 6:00 PM",
        title: "Winners Announced 🏆",
        description: "Top 3 teams crowned. Prizes, certificates, and recognition for all finishers.",
        tag: "Awards",
        accent: true,
    },
];

export default function TimelinePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-28 md:py-36 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px]"
                        style={{ background: "rgba(33,140,99,0.08)" }}
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-accent-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                        {">"} Event Schedule
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        CTF{" "}
                        <span
                            className="text-transparent bg-clip-text text-glow-cyan"
                            style={{ backgroundImage: "linear-gradient(135deg, #2db87f, #a8c4ae)" }}
                        >
                            Timeline
                        </span>
                    </h1>
                    <p className="mt-5 text-base md:text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
                        Every milestone from registration to the winners&apos; podium. Mark your calendar.
                    </p>
                </motion.div>
            </section>

            {/* Timeline */}
            <section className="pb-28 px-4">
                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical spine */}
                    <div
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                        style={{ background: "linear-gradient(to bottom, transparent, #218c63 8%, #20553c 90%, transparent)" }}
                    />

                    <div className="space-y-10">
                        {events.map((event, i) => {
                            const isRight = i % 2 === 0;
                            return (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.05 }}
                                    className={`relative flex items-start gap-6 md:gap-0 ${isRight ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Card — takes md:w-[45%] on each side */}
                                    <div className={`w-full md:w-[45%] ${isRight ? "md:pr-10" : "md:pl-10"} pl-14 md:pl-0`}>
                                        <GlassContainer
                                            className={`p-5 md:p-6 relative transition-all duration-300 hover:border-accent-cyan/25 ${event.accent
                                                ? "border-accent-cyan/20 shadow-[0_0_30px_rgba(33,140,99,0.08)]"
                                                : ""
                                                }`}
                                        >
                                            {/* Tag */}
                                            <span
                                                className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full mb-3"
                                                style={{
                                                    background: event.accent
                                                        ? "rgba(33,140,99,0.2)"
                                                        : "rgba(130,161,138,0.12)",
                                                    color: event.accent ? "#218c63" : "#82a18a",
                                                }}
                                            >
                                                {event.tag}
                                            </span>
                                            <p className="text-xs text-text-muted mb-1.5 tracking-wide">{event.time}</p>
                                            <h3 className="text-white font-bold text-lg mb-2">{event.title}</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">{event.description}</p>
                                        </GlassContainer>
                                    </div>

                                    {/* Center dot */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 flex items-center justify-center">
                                        <div
                                            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${event.accent
                                                ? "bg-accent-cyan border-accent-cyan shadow-[0_0_12px_rgba(33,140,99,0.8)]"
                                                : "bg-bg-secondary border-accent-cyan/40"
                                                }`}
                                        />
                                    </div>

                                    {/* Spacer for the empty side on desktop */}
                                    <div className="hidden md:block md:w-[45%]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24 px-4">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <GlassContainer className="p-10 md:p-14">
                        <h2 className="text-3xl font-bold mb-3">
                            Ready to{" "}
                            <span className="text-accent-cyan text-glow-cyan">Compete</span>?
                        </h2>
                        <p className="text-text-muted mb-7">
                            Don&apos;t miss your chance. Registration closes March 8th.
                        </p>
                        <Button href="/register" variant="primary">
                            Register Now
                        </Button>
                    </GlassContainer>
                </motion.div>
            </section>
        </>
    );
}
