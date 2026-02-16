import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonBaseProps {
    children: ReactNode;
    variant?: Variant;
    className?: string;
}

type ButtonAsButton = ButtonBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
        href?: never;
    };

interface ButtonAsLink extends ButtonBaseProps {
    href: string;
    onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
    primary:
        "bg-accent-cyan text-bg-primary font-bold hover:shadow-[0_0_24px_rgba(0,245,212,0.4)] hover:scale-105",
    secondary:
        "bg-accent-purple text-white font-bold hover:shadow-[0_0_24px_rgba(124,58,237,0.4)] hover:scale-105",
    outline:
        "bg-transparent border-2 border-accent-cyan text-accent-cyan font-bold hover:bg-accent-cyan/10",
};

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm md:text-base transition-all duration-200 ease-out cursor-pointer";
    const classes = `${base} ${variantStyles[variant]} ${className}`;

    if ("href" in props && props.href) {
        const { href, onClick } = props as ButtonAsLink;
        return (
            <Link href={href} className={classes} onClick={onClick}>
                {children}
            </Link>
        );
    }

    const { ...buttonProps } = props as ButtonAsButton;
    return (
        <button className={classes} {...buttonProps}>
            {children}
        </button>
    );
}
