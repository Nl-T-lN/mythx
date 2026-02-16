import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Input({ label, id, className = "", ...props }: InputProps) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={inputId} className="text-sm text-text-muted font-medium">
                {label}
            </label>
            <input
                id={inputId}
                className={`w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-xl text-white placeholder-text-muted transition-all duration-200 ease-out focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_12px_rgba(0,245,212,0.25)] ${className}`}
                {...props}
            />
        </div>
    );
}
