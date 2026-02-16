import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export default function Card({ children, className = "", glowColor }: CardProps) {
    const glowStyle = glowColor
        ? { boxShadow: `0 0 30px ${glowColor}, inset 0 0 30px ${glowColor}` }
        : undefined;

    return (
        <div
            className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-200 ease-out ${className}`}
            style={glowStyle}
        >
            {children}
        </div>
    );
}
