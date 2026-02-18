"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Register", href: "/register" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-bg-primary/70 border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-wider">
                    <span className="text-accent-cyan text-glow-cyan">MYTH</span>
                    <span className="text-white">X</span>
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
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_6px_rgba(0,245,212,0.6)]" />
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
                    className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile menu */}
            <MobileMenu
                isOpen={menuOpen}
                links={navLinks}
                pathname={pathname}
                onClose={() => setMenuOpen(false)}
            />
        </header>
    );
}
