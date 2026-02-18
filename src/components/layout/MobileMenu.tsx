import Link from "next/link";

interface MobileMenuProps {
    isOpen: boolean;
    links: { label: string; href: string }[];
    pathname: string;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, links, pathname, onClose }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`text-2xl font-semibold transition-colors duration-200 ${pathname === link.href
                        ? "text-accent-cyan text-glow-cyan"
                        : "text-text-muted hover:text-white"
                        }`}
                >
                    {link.label}
                </Link>
            ))}
            <Link
                href="/register"
                onClick={onClose}
                className="mt-4 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent-cyan text-bg-primary font-bold text-lg transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,245,212,0.35)]"
            >
                Register Now
            </Link>
        </div>
    );
}
