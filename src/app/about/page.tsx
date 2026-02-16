import type { Metadata } from "next";
import GlassContainer from "@/components/ui/GlassContainer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About — MythX CTF Community 2026",
    description: "Learn about the MythX CTF Community event, our mission, what CTF is, and why you should join.",
};

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

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-28 md:py-36 px-4 text-center">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-purple/10 rounded-full blur-[128px]" />
                </div>
                <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-4">
                    About MythX
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Know the <span className="text-accent-cyan">Mission</span>
                </h1>
                <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
                    We believe cybersecurity skills are best sharpened through practice, collaboration, and healthy competition.
                </p>
            </section>

            {/* Mission */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
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
                </div>
            </section>

            {/* What is CTF */}
            <section className="py-20 px-4 bg-bg-secondary/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">
                            Challenge Categories
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            What is <span className="text-accent-cyan">CTF</span>?
                        </h2>
                        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
                            Capture The Flag (CTF) is a cybersecurity competition where participants solve
                            security-related challenges to find hidden &quot;flags&quot;. Here are the categories you&apos;ll encounter:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ctfCategories.map((cat) => (
                            <GlassContainer key={cat.title} className="p-6 hover:border-accent-cyan/30 transition-colors duration-200">
                                <h3 className="text-white font-semibold mb-2">{cat.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{cat.description}</p>
                            </GlassContainer>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">
                            Benefits
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Why <span className="text-accent-cyan">Join</span>?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {reasons.map((item) => (
                            <GlassContainer key={item.title} className="p-6 hover:border-accent-cyan/30 transition-colors duration-200">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                            </GlassContainer>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-bg-secondary/30">
                <div className="max-w-3xl mx-auto">
                    <GlassContainer className="p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Convinced? <span className="text-accent-cyan">Join Us</span>
                        </h2>
                        <p className="text-text-muted mb-8 max-w-lg mx-auto">
                            Be part of the fastest growing cybersecurity community in India.
                        </p>
                        <Button href="/register" variant="primary">
                            Register Now
                        </Button>
                    </GlassContainer>
                </div>
            </section>
        </>
    );
}
