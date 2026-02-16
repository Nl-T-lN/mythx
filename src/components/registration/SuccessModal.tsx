"use client";

import Button from "@/components/ui/Button";

interface SuccessModalProps {
    isOpen: boolean;
    tier: "free" | "premium";
    onClose: () => void;
}

export default function SuccessModal({ isOpen, tier, onClose }: SuccessModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-md w-full text-center">
                {/* Success icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-success/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">Registration Successful!</h2>
                <p className="text-text-muted mb-1">
                    Tier: <span className="text-accent-cyan font-semibold capitalize">{tier}</span>
                </p>
                <p className="text-text-muted text-sm mb-8">
                    Check your email for confirmation details and next steps.
                </p>

                <Button href="/" variant="primary" onClick={onClose}>
                    Go Home
                </Button>
            </div>
        </div>
    );
}
