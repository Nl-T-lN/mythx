import { ReactNode } from "react";

interface GlassContainerProps {
    children: ReactNode;
    className?: string;
}

export default function GlassContainer({ children, className = "" }: GlassContainerProps) {
    return (
        <div
            className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl ${className}`}
        >
            {children}
        </div>
    );
}
