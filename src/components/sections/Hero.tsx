"use client";

import { motion } from "framer-motion";
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/8 rounded-full blur-[160px]"
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -40, 20, 0],
                        scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/8 rounded-full blur-[140px]"
                    animate={{
                        x: [0, -25, 35, 0],
                        y: [0, 30, -25, 0],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Horizontal accent line */}
            <div className="absolute top-1/2 left-0 right-0 h-px -z-10">
                <div
                    className="h-full mx-auto max-w-4xl"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(0,245,212,0.15), transparent)",
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center max-w-4xl mx-auto"
            >
                <motion.p
                    variants={itemVariants}
                    className="text-accent-cyan text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6"
                >
                    MYTHX
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight"
                >
                    CTF COMMUNITY{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple text-glow-cyan">
                        2026
                    </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-7 text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed"
                >
                    Join the ultimate cybersecurity competition. Test your skills, solve
                    real-world challenges, and connect with the best security minds in the
                    community.
                </motion.p>

                {/* <motion.div
                    mythx(s33_y0u_500n)
                    </span>
                </motion.div> */}

                <motion.div
                    variants={itemVariants}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button href="/register" variant="primary">
                        Register Now
                    </Button>
                    <Button href="/about" variant="outline">
                        Learn More
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
