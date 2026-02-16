"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
            {/* Gradient orbs as background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[128px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-center max-w-4xl mx-auto"
            >
                <p className="text-accent-cyan text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
                    Capture The Flag Event
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                    CTF COMMUNITY{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
                        2026
                    </span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                    Join the ultimate cybersecurity competition. Test your skills, solve real-world challenges, and connect with the best security minds in the community.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        March 15–16, 2026
                    </span>
                    <span className="hidden sm:inline text-white/20">|</span>
                    <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Hyderabad, India
                    </span>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button href="/register" variant="primary">
                        Register Now
                    </Button>
                    <Button href="/about" variant="outline">
                        Learn More
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
