"use client";

import Card from "@/components/ui/Card";

interface TierSelectorProps {
    selectedTier: "free" | "premium";
    onSelect: (tier: "free" | "premium") => void;
}

export default function TierSelector({ selectedTier, onSelect }: TierSelectorProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Free Tier */}
            <button type="button" onClick={() => onSelect("free")} className="text-left cursor-pointer">
                <Card
                    className={`transition-all duration-200 hover:border-accent-cyan/30 ${selectedTier === "free" ? "border-accent-cyan/50" : ""
                        }`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                            Free Tier
                        </span>
                        <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedTier === "free"
                                    ? "border-accent-cyan bg-accent-cyan"
                                    : "border-white/30"
                                }`}
                        >
                            {selectedTier === "free" && (
                                <svg className="w-3 h-3 text-bg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-white mb-2">₹0</p>
                    <ul className="space-y-2 text-sm text-text-muted">
                        <li className="flex items-center gap-2">
                            <span className="text-accent-cyan">✓</span> Access to all CTF challenges
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-accent-cyan">✓</span> Community Discord access
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-accent-cyan">✓</span> Digital certificate
                        </li>
                    </ul>
                </Card>
            </button>

            {/* Premium Tier */}
            <button type="button" onClick={() => onSelect("premium")} className="text-left cursor-pointer">
                <Card
                    className={`transition-all duration-200 ${selectedTier === "premium"
                            ? "border-accent-purple/50"
                            : "hover:border-accent-purple/30"
                        }`}
                    glowColor={selectedTier === "premium" ? "rgba(124,58,237,0.15)" : undefined}
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent-purple">
                            Premium Tier
                        </span>
                        <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedTier === "premium"
                                    ? "border-accent-purple bg-accent-purple"
                                    : "border-white/30"
                                }`}
                        >
                            {selectedTier === "premium" && (
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-white mb-2">₹200</p>
                    <ul className="space-y-2 text-sm text-text-muted">
                        <li className="flex items-center gap-2">
                            <span className="text-accent-purple">✓</span> Everything in Free
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-accent-purple">✓</span> Exclusive workshops
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-accent-purple">✓</span> Physical swag kit
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-accent-purple">✓</span> Priority support
                        </li>
                    </ul>
                </Card>
            </button>
        </div>
    );
}
