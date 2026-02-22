import Link from "next/link";
import Image from "next/image";

const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Timeline", href: "/timeline" },
];

const connectLinks = [
    { label: "Instagram", href: "https://www.instagram.com/mythx_offixial/" },
    { label: "Linkedin", href: "https://www.linkedin.com/company/mythxofficial/" },
    { label: "Discord", href: "https://discord.gg/SHreG4RzNC" },
];

export default function Footer() {
    return (
        <footer className="relative z-20 border-t border-white/[0.06] bg-bg-secondary/50 backdrop-blur-lg">
            {/* Glowing top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.25), transparent)" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
                {/* Main footer grid: Explore | Connect | Logo | Contact | Map */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 items-start">

                    {/* EXPLORE */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="text-accent-cyan">⌘</span>
                            Explore
                        </h4>
                        <ul className="space-y-2.5">
                            {exploreLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-muted hover:text-accent-cyan transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONNECT */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="text-accent-cyan">◎</span>
                            Connect
                        </h4>
                        <ul className="space-y-2.5">
                            {connectLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        className="text-sm text-text-muted hover:text-accent-cyan transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CENTER — Logo */}
                    <div className="flex flex-col items-center justify-center order-first md:order-none">
                        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
                            <Image
                                src="/footer_logo.png"
                                alt="MythX Logo"
                                fill
                                className="object-contain drop-shadow-[0_0_30px_rgba(52,211,153,0.15)]"
                            />
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="text-accent-cyan">✦</span>
                            Contact
                        </h4>
                        <ul className="space-y-2.5 text-sm text-text-muted">
                            <li>contact@mythx.in</li>
                            <li>+91 98765 43210</li>
                            <li>Muradnagar, India</li>
                        </ul>
                    </div>

                    {/* MAP */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="text-accent-cyan">◉</span>
                            Location
                        </h4>
                        <div className="w-full h-32 rounded-lg overflow-hidden border border-white/[0.06]">
                            <iframe
                                title="KIET Group of Institutions Location"
                                src="https://www.google.com/maps?q=KIET%20Group%20of%20Institutions%20Ghaziabad&output=embed"
                                className="w-full h-full grayscale brightness-50 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-5 border-t border-white/[0.06] text-center text-xs text-text-muted">
                    &copy; 2026 MythX CTF Community. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
