import Link from "next/link";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Register", href: "/register" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/[0.06] bg-bg-secondary/50 backdrop-blur-lg">
            {/* Glowing top border */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.2), transparent)' }} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-xl font-bold tracking-wider">
                            <span className="text-accent-cyan text-glow-cyan">MYTH</span>
                            <span className="text-white">X</span>
                        </Link>
                        <p className="mt-3 text-sm text-text-muted leading-relaxed">
                            India&apos;s premier Capture The Flag community event. Hack, learn, and compete with the best.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
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

                    {/* Contact info */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-2 text-sm text-text-muted">
                            <li>contact@mythx.in</li>
                            <li>+91 98765 43210</li>
                            <li>Hyderabad, India</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-text-muted">
                    &copy; {new Date().getFullYear()} MythX CTF Community. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
