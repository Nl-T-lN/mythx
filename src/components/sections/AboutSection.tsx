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

export default function AboutSection() {
    return (
        <section className="py-20 md:py-28 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left column */}
                <div>
                    <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">
                        About The Event
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                        More Than Just a{" "}
                        <span className="text-accent-cyan">Competition</span>
                    </h2>
                    <p className="text-text-muted leading-relaxed text-base md:text-lg">
                        MythX CTF Community 2026 is a two-day cybersecurity event that brings together
                        hackers, developers, and security enthusiasts. Whether you&apos;re a seasoned
                        professional or just getting started, there&apos;s something for everyone. Solve
                        challenges, attend workshops, and build lasting connections in the infosec community.
                    </p>
                </div>

                {/* Right column — highlights grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((item) => (
                        <GlassContainer key={item.title} className="p-5 hover:border-accent-cyan/30 transition-colors duration-200">
                            <div className="text-2xl mb-3">{item.icon}</div>
                            <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                        </GlassContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}
