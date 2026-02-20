"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Timeline", href: "/timeline" },
    { label: "Prizes", href: "/prizes" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-bg-primary/80 border-b border-white/[0.06]">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group relative z-[70]">
                        <Image
                            src="/logo.png"
                            alt="MythX Logo"
                            width={38}
                            height={38}
                            className="drop-shadow-[0_0_10px_rgba(33,140,99,0.6)] group-hover:drop-shadow-[0_0_18px_rgba(33,140,99,0.9)] transition-all duration-300"
                        />
                        <span className="text-lg font-bold tracking-wider">
                            <span className="text-accent-cyan text-glow-cyan">MYTH</span>
                            <span className="text-white">X</span>
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`relative text-sm font-medium transition-colors duration-200 ${pathname === link.href
                                        ? "text-accent-cyan"
                                        : "text-text-muted hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    {pathname === link.href && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_6px_rgba(33,140,99,0.8)]" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button href="/register" variant="primary">
                            Register Now
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        type="button"
                        className="md:hidden relative z-[70] flex flex-col gap-1.5 p-2 cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </nav>
            </header>

            {/* ─── Mobile Slide-in Drawer ─── */}

            {/* Backdrop overlay */}
            <div
                className={`md:hidden fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Drawer panel — slides in from right */}
            <div
                className={`md:hidden fixed top-0 right-0 z-[60] h-full w-72 bg-bg-primary/98 border-l border-white/[0.06] backdrop-blur-2xl shadow-[-8px_0_30px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col pt-24 px-8 gap-2">
                    {/* Nav links */}
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${pathname === link.href
                                ? "text-accent-cyan bg-accent-cyan/[0.08] shadow-[inset_0_0_20px_rgba(33,140,99,0.06)]"
                                : "text-text-muted hover:text-white hover:bg-white/[0.04]"
                                }`}
                            style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                        >
                            {pathname === link.href && (
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(33,140,99,0.8)]" />
                            )}
                            {link.label}
                        </Link>
                    ))}

                    {/* Divider */}
                    <div className="my-4 h-px bg-white/[0.06]" />

                    {/* Register CTA */}
                    <Link
                        href="/register"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center px-6 py-3.5 rounded-xl bg-accent-cyan text-bg-primary font-bold text-sm tracking-wide transition-all duration-200 hover:shadow-[0_0_25px_rgba(33,140,99,0.4)]"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </>
    );
}
