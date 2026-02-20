"use client";

import { motion } from "framer-motion";
import GlassContainer from "@/components/ui/GlassContainer";
import Button from "@/components/ui/Button";

const prizes = [
    { rank: "1st", amount: "₹40,000", label: "First Place", emoji: "🥇", accent: true },
    { rank: "2nd", amount: "₹25,000", label: "Second Place", emoji: "🥈", accent: false },
    { rank: "3rd", amount: "₹15,000", label: "Third Place", emoji: "🏅", accent: false },
];

export default function PrizesPage() {
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
                        {">"} Rewards & Recognition
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Prize{" "}
                        <span className="text-accent-cyan text-glow-cyan">Pool</span>
                    </h1>
                    <p className="mt-5 text-base md:text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
                        Compete for glory and cash prizes. The top teams walk away with more than bragging rights.
                    </p>
                </motion.div>
            </section>

            {/* Total Prize Pool */}
            <section className="px-4 pb-14">
                <motion.div
                    className="max-w-md mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                >
                    <GlassContainer className="p-8 md:p-10 text-center border-accent-cyan/20 shadow-[0_0_40px_rgba(45,184,127,0.1)]">
                        <p className="text-xs text-text-muted tracking-[0.25em] uppercase font-medium mb-2">
                            Total Prize Pool
                        </p>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-accent-cyan text-glow-cyan">
                            ₹1,50,000
                        </h2>
                        <p className="mt-3 text-sm text-text-muted">
                            Cash prizes, sponsor goodies, vouchers & certifications
                        </p>
                    </GlassContainer>
                </motion.div>
            </section>

            {/* Top 3 Prizes */}
            <section className="px-4 pb-16">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {prizes.map((prize, i) => (
                        <motion.div
                            key={prize.rank}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <GlassContainer
                                className={`p-7 md:p-8 text-center h-full flex flex-col items-center transition-all duration-300 hover:border-accent-cyan/25 ${prize.accent
                                        ? "border-accent-cyan/20 shadow-[0_0_30px_rgba(45,184,127,0.1)]"
                                        : ""
                                    }`}
                            >
                                <span className="text-5xl mb-4">{prize.emoji}</span>
                                <span
                                    className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
                                    style={{
                                        background: prize.accent
                                            ? "rgba(45,184,127,0.15)"
                                            : "rgba(130,161,138,0.12)",
                                        color: prize.accent ? "#2db87f" : "#82a18a",
                                    }}
                                >
                                    {prize.label}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                                    {prize.amount}
                                </h3>
                            </GlassContainer>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4th to 10th */}
            <section className="px-4 pb-24">
                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <GlassContainer className="p-7 md:p-9 text-center">
                        <span className="text-3xl mb-3 block">🎁</span>
                        <span
                            className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-3"
                            style={{ background: "rgba(130,161,138,0.12)", color: "#82a18a" }}
                        >
                            4th – 10th Place
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                            Vouchers, Certifications & Goodies
                        </h3>
                    </GlassContainer>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="pb-24 px-4">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                >
                    <GlassContainer className="p-10 md:p-14">
                        <h2 className="text-3xl font-bold mb-3">
                            Think You Can{" "}
                            <span className="text-accent-cyan text-glow-cyan">Win</span>?
                        </h2>
                        <p className="text-text-muted mb-7">
                            Registration is open. Assemble your team and claim your share of the ₹1,50,000 prize pool.
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
