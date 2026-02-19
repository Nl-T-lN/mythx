"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background glow orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[180px]"
                    style={{ background: "rgba(33,140,99,0.07)" }}
                    animate={{ x: [0, 20, -15, 0], y: [0, -30, 15, 0], scale: [1, 1.08, 0.95, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full blur-[140px]"
                    style={{ background: "rgba(14,43,29,0.15)" }}
                    animate={{ x: [0, -20, 30, 0], y: [0, 25, -20, 0], scale: [1, 0.9, 1.1, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* RIGHT — Doom image: absolute, fills right side, full height */}
            <motion.div
                className="absolute right-0 top-0 w-[62%] h-full pointer-events-none"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                {/* Left-edge fade so image blends into text area */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: "linear-gradient(to left, #050906 0%, transparent 8%), linear-gradient(to top, #050906 0%, transparent 15%)",
                    }}
                />
                {/* Green glow behind character */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse 70% 80% at 55% 60%, rgba(33,140,99,0.1) 0%, transparent 70%)",
                    }}
                />
                <Image
                    src="/dooms_rbg.png"
                    alt="Doctor Doom"
                    fill
                    priority
                    sizes="62vw"
                    className="object-contain object-bottom drop-shadow-[0_0_100px_rgba(61,220,132,0.35)]"
                />
            </motion.div>

            {/* LEFT — Text content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center min-h-screen pb-16 pt-24"
            >
                <div className="w-full md:max-w-[44%]">
                    <motion.p
                        variants={itemVariants}
                        className="text-accent-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-5"
                    >
                        Capture The Flag Event
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight"
                    >
                        CTF
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple text-glow-cyan">
                            COMMUNITY
                        </span>
                        <br />
                        <span className="text-white/30 text-4xl sm:text-5xl lg:text-6xl">2026</span>
                    </motion.h1>

                    {/* Accent line */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-6 mb-6 h-px w-24"
                        style={{ background: "linear-gradient(90deg, #3ddc84, transparent)" }}
                    />

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-text-muted max-w-md leading-relaxed"
                    >
                        Join the ultimate cybersecurity competition. Test your skills, solve
                        real-world challenges, and connect with the best security minds in the
                        community.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex flex-col sm:flex-row items-start gap-4"
                    >
                        <Button href="/register" variant="primary">
                            Register Now
                        </Button>
                        <Button href="/about" variant="outline">
                            Learn More
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
