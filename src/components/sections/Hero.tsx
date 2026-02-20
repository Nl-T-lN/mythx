"use client";

import { useState, useEffect } from "react";
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

const typewriterWords = ["CTF", "Summit"];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = typewriterWords[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentWord.length) {
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((wordIndex + 1) % typewriterWords.length);
                }
            }
        }, isDeleting ? 80 : 120);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    const displayedText = typewriterWords[wordIndex].slice(0, charIndex);

    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden">
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

            {/* Desktop — Doom image absolute on right */}
            <motion.div
                className="hidden md:block absolute right-0 top-0 w-[62%] h-full pointer-events-none"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: "linear-gradient(to left, #050906 0%, transparent 8%), linear-gradient(to top, #050906 0%, transparent 15%)",
                    }}
                />
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

            {/* Text content — centered on mobile, left-aligned on desktop */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col justify-center flex-1 pt-24 pb-6 md:pb-16 md:min-h-screen"
            >
                <div className="w-full md:max-w-[44%] text-center md:text-left flex flex-col items-center md:items-start">
                    {/* Typewriter line */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-2 mb-5"
                    >
                        <span className="text-accent-cyan text-sm sm:text-base font-semibold tracking-[0.3em] uppercase">
                            {displayedText}
                        </span>
                        <span className="w-[2px] h-5 bg-accent-cyan animate-pulse" />
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-4"
                    >
                        MYTHX
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white text-glow-cyan"
                    >
                        COMMUNITY
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/30 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-1"
                    >
                        2026
                    </motion.p>

                    {/* Accent line */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-6 mb-6 h-px w-24"
                        style={{ background: "linear-gradient(90deg, #34d399, transparent)" }}
                    />

                    <motion.p
                        variants={itemVariants}
                        className="text-accent-cyan text-base sm:text-lg tracking-[0.15em] uppercase font-semibold"
                    >
                        An Endgame Protocol
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8"
                    >
                        <Button href="/register" variant="primary">
                            Register Now
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Mobile — Doom image below content, full width, in normal flow */}
            <motion.div
                className="md:hidden relative w-full pointer-events-none"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                {/* Bottom fade so image blends into next section */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to top, #050906, transparent)" }}
                />
                <Image
                    src="/dooms_rbg.png"
                    alt="Doctor Doom"
                    width={800}
                    height={900}
                    priority
                    className="w-full h-auto object-cover drop-shadow-[0_0_60px_rgba(52,211,153,0.25)]"
                />
            </motion.div>
        </section>
    );
}
