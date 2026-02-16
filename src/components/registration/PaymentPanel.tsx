"use client";

import GlassContainer from "@/components/ui/GlassContainer";
import Input from "@/components/ui/Input";

interface PaymentPanelProps {
    transactionId: string;
    onTransactionIdChange: (id: string) => void;
    onScreenshotChange: (file: File | null) => void;
}

export default function PaymentPanel({
    transactionId,
    onTransactionIdChange,
    onScreenshotChange,
}: PaymentPanelProps) {
    return (
        <GlassContainer className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6">Payment Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left — payment info */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-bg-secondary rounded-xl border border-white/10">
                        <span className="text-text-muted text-sm">Amount</span>
                        <span className="text-2xl font-bold text-accent-cyan">₹200</span>
                    </div>

                    {/* QR Placeholder */}
                    <div className="flex flex-col items-center p-6 bg-bg-secondary rounded-xl border border-white/10">
                        <div className="w-40 h-40 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-text-muted text-sm text-center">UPI QR Code<br />Placeholder</span>
                        </div>
                        <p className="text-sm text-text-muted">
                            UPI ID: <span className="text-white font-medium">mythx@upi</span>
                        </p>
                    </div>
                </div>

                {/* Right — verification inputs */}
                <div className="space-y-5">
                    <Input
                        label="Transaction ID *"
                        placeholder="Enter your UPI transaction ID"
                        value={transactionId}
                        onChange={(e) => onTransactionIdChange(e.target.value)}
                        required
                    />

                    <div className="flex flex-col gap-2">
                        <label htmlFor="screenshot-upload" className="text-sm text-text-muted font-medium">
                            Payment Screenshot *
                        </label>
                        <div className="relative">
                            <input
                                id="screenshot-upload"
                                type="file"
                                accept="image/*"
                                onChange={(e) => onScreenshotChange(e.target.files?.[0] || null)}
                                className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent-cyan/10 file:text-accent-cyan hover:file:bg-accent-cyan/20 transition-all duration-200 focus:outline-none focus:border-accent-cyan cursor-pointer"
                                required
                            />
                        </div>
                    </div>

                    <p className="text-xs text-text-muted leading-relaxed">
                        After completing the UPI payment, enter your transaction ID and upload
                        a screenshot for verification. Your registration will be confirmed
                        within 24 hours.
                    </p>
                </div>
            </div>
        </GlassContainer>
    );
}
