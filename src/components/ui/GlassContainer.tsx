import { ReactNode } from "react";

interface GlassContainerProps {
    children: ReactNode;
    className?: string;
}

export default function GlassContainer({ children, className = "" }: GlassContainerProps) {
    return (
        <div
            className={`backdrop-blur-lg bg-white/[0.04] border border-white/[0.08] rounded-2xl glass-glow ${className}`}
        >
            {children}
        </div>
    );
}
