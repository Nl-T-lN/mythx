"use client";

import { motion } from "framer-motion";
import GlassContainer from "@/components/ui/GlassContainer";

const highlights = [
    {
        icon: "🏴",
        title: "Real CTF Challenges",
        description: "Web, crypto, forensics, reverse engineering, and more.",
    },
    {
        icon: "🏆",
        title: "Prizes",
        description: "Cash prizes, swag, and certificates for top performers.",
    },
    {
        icon: "🤝",
        title: "Community Networking",
        description: "Connect with security professionals and enthusiasts.",
    },
    {
        icon: "📚",
        title: "Learning Sessions",
        description: "Workshops and talks from industry experts.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut" as const,
        },
    }),
};

export default function AboutSection() {
    return (
        <section className="py-20 md:py-28 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-4">
                        About The Event
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        More Than Just a{" "}
                        <span className="text-accent-cyan text-glow-cyan">Competition</span>
                    </h2>
                    <p className="text-text-muted leading-relaxed text-base md:text-lg">
                        MythX CTF Community 2026 is a two-day cybersecurity event that brings together
                        hackers, developers, and security enthusiasts. Whether you&apos;re a seasoned
                        professional or just getting started, there&apos;s something for everyone. Solve
                        challenges, attend workshops, and build lasting connections in the infosec community.
                    </p>
                </motion.div>

                {/* Right column — highlights grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                        >
                            <GlassContainer className="p-5 h-full hover:border-accent-cyan/20 transition-all duration-300 group">
                                <div className="text-2xl mb-3 transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                            </GlassContainer>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
