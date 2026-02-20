"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const TARGET_DATE = new Date("2026-03-15T10:00:00+05:30").getTime();

function getTimeLeft(): TimeLeft {
    const now = Date.now();
    const diff = Math.max(TARGET_DATE - now, 0);

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

const units: { label: string; key: keyof TimeLeft }[] = [
    { label: "Days", key: "days" },
    { label: "Hours", key: "hours" },
    { label: "Minutes", key: "minutes" },
    { label: "Seconds", key: "seconds" },
];

export default function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        setTimeLeft(getTimeLeft());
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-20 md:py-28 px-4 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px]"
                    style={{ background: "rgba(33,140,99,0.06)" }}
                />
            </div>

            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-accent-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                    {">"} Event Starts In
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
                    The Clock is{" "}
                    <span className="text-accent-cyan text-glow-cyan">Ticking</span>
                </h2>

                {/* Countdown blocks */}
                <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8">
                    {units.map((unit, i) => (
                        <div key={unit.key} className="flex items-center gap-3 sm:gap-5 md:gap-8">
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center border border-white/[0.06] backdrop-blur-sm"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        boxShadow: "0 0 20px rgba(33,140,99,0.05), inset 0 0 20px rgba(33,140,99,0.02)",
                                    }}
                                >
                                    <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tabular-nums">
                                        {String(timeLeft[unit.key]).padStart(2, "0")}
                                    </span>
                                </div>
                                <span className="mt-2 text-[10px] sm:text-xs text-text-muted font-medium tracking-[0.2em] uppercase">
                                    {unit.label}
                                </span>
                            </motion.div>

                            {/* Colon separator */}
                            {i < units.length - 1 && (
                                <span className="text-accent-cyan/40 text-xl sm:text-2xl md:text-3xl font-bold -mt-5">
                                    :
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-sm text-text-muted">
                    March 15, 2026 · 10:00 AM IST
                </p>
            </motion.div>
        </section>
    );
}
