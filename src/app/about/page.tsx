"use client";

import { motion } from "framer-motion";
import GlassContainer from "@/components/ui/GlassContainer";
import Button from "@/components/ui/Button";

const ctfCategories = [
    { title: "Web Exploitation", description: "Find and exploit vulnerabilities in web applications." },
    { title: "Cryptography", description: "Break ciphers and cryptographic algorithms." },
    { title: "Reverse Engineering", description: "Analyze and understand binaries and compiled code." },
    { title: "Forensics", description: "Recover hidden data from files, network captures, and memory dumps." },
    { title: "Binary Exploitation", description: "Exploit memory corruption bugs in compiled programs." },
    { title: "OSINT", description: "Use open-source intelligence to find hidden information." },
];

const reasons = [
    {
        icon: "🎯",
        title: "Hands-on Experience",
        description: "Apply theoretical knowledge to real-world security scenarios.",
    },
    {
        icon: "🏅",
        title: "Win Prizes & Recognition",
        description: "Cash prizes, certificates, and industry recognition for top performers.",
    },
    {
        icon: "🌐",
        title: "Build Your Network",
        description: "Connect with security professionals, recruiters, and fellow enthusiasts.",
    },
    {
        icon: "📈",
        title: "Career Growth",
        description: "Boost your resume with competitive cybersecurity experience.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.08,
            duration: 0.5,
            ease: "easeOut" as const,
        },
    }),
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-28 md:py-36 px-4 text-center">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-purple/10 rounded-full blur-[128px]" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-accent-cyan text-xs font-medium tracking-[0.3em] uppercase mb-4">
                        {">"} About MythX
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Know the <span className="text-accent-cyan text-glow-cyan">Mission</span>
                    </h1>
                    <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
                        We believe cybersecurity skills are best sharpened through practice, collaboration, and healthy competition.
                    </p>
                </motion.div>
            </section>

            {/* Mission */}
            <section className="py-20 px-4">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <GlassContainer className="p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-text-muted leading-relaxed text-base md:text-lg">
                            MythX CTF Community was born out of the desire to create an inclusive space
                            where cybersecurity enthusiasts of all skill levels can learn, compete, and grow together.
                            Our mission is to democratize cybersecurity education by making hands-on, real-world
                            challenges accessible to everyone — from curious beginners to battle-tested professionals.
                            We foster a culture of knowledge sharing, ethical hacking, and continuous improvement.
                        </p>
                    </GlassContainer>
                </motion.div>
            </section>

            {/* What is CTF */}
            <section className="py-20 px-4 bg-bg-secondary/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <p className="text-accent-cyan text-xs font-medium tracking-[0.3em] uppercase mb-3">
                            {">"} Challenge Categories
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            What is <span className="text-accent-cyan text-glow-cyan">CTF</span>?
                        </h2>
                        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
                            Capture The Flag (CTF) is a cybersecurity competition where participants solve
                            security-related challenges to find hidden &quot;flags&quot;. Here are the categories you&apos;ll encounter:
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ctfCategories.map((cat, i) => (
                            <motion.div
                                key={cat.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                            >
                                <GlassContainer className="p-6 h-full hover:border-accent-cyan/20 transition-all duration-300">
                                    <h3 className="text-white font-semibold mb-2">{cat.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{cat.description}</p>
                                </GlassContainer>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <p className="text-accent-cyan text-xs font-medium tracking-[0.3em] uppercase mb-3">
                            {">"} Benefits
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Why <span className="text-accent-cyan text-glow-cyan">Join</span>?
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {reasons.map((item, i) => (
                            <motion.div
                                key={item.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                            >
                                <GlassContainer className="p-6 h-full hover:border-accent-cyan/20 transition-all duration-300 group">
                                    <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                                </GlassContainer>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-bg-secondary/30">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <GlassContainer className="p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Convinced? <span className="text-accent-cyan text-glow-cyan">Join Us</span>
                        </h2>
                        <p className="text-text-muted mb-8 max-w-lg mx-auto">
                            Be part of the fastest growing cybersecurity community in India.
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
