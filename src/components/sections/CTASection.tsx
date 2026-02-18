"use client";

import { motion } from "framer-motion";
import GlassContainer from "@/components/ui/GlassContainer";
import Button from "@/components/ui/Button";

export default function CTASection() {
    return (
        <section className="py-20 md:py-28 px-4">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <GlassContainer className="p-10 md:p-16 text-center relative overflow-hidden">
                    {/* Pulsing background glow */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent-cyan/8 rounded-full blur-[120px] animate-pulse-glow" />
                        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-purple/6 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
                    </div>

                    <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-4">
                        Join Now
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Ready to{" "}
                        <span className="text-accent-cyan text-glow-cyan">Compete</span>?
                    </h2>
                    <p className="text-text-muted text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                        Secure your spot in the most anticipated cybersecurity event of 2026.
                        Free and premium tiers available.
                    </p>
                    <Button href="/register" variant="primary">
                        Register Now
                    </Button>
                </GlassContainer>
            </motion.div>
        </section>
    );
}
