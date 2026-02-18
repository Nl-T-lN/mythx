"use client";

import { motion } from "framer-motion";
import GlassContainer from "@/components/ui/GlassContainer";

const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: "Phone",
        value: "+91 98765 43210",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: "Email",
        value: "contact@mythx.in",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: "Location",
        value: "Hyderabad, India",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
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

export default function ContactSection() {
    return (
        <section className="py-20 md:py-28 px-4 bg-bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="font-code text-accent-cyan text-xs font-medium tracking-[0.3em] uppercase mb-3">
                        {">"} Get In Touch
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Contact <span className="text-accent-cyan text-glow-cyan">Us</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {contactInfo.map((item, i) => (
                        <motion.div
                            key={item.label}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                        >
                            <GlassContainer className="p-6 text-center hover:border-accent-cyan/20 transition-all duration-300 group">
                                <div className="flex justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="font-display text-white font-semibold text-sm mb-1">{item.label}</h3>
                                <p className="text-text-muted text-sm">{item.value}</p>
                            </GlassContainer>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
