"use client";

import { useState } from "react";
import GlassContainer from "@/components/ui/GlassContainer";
import Button from "@/components/ui/Button";
import TierSelector from "@/components/registration/TierSelector";
import RegisterForm from "@/components/registration/RegisterForm";
import PaymentPanel from "@/components/registration/PaymentPanel";
import SuccessModal from "@/components/registration/SuccessModal";

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    college: string;
    experienceLevel: string;
    teamName: string;
}

const initialFormData: FormData = {
    fullName: "",
    email: "",
    phone: "",
    college: "",
    experienceLevel: "",
    teamName: "",
};

export default function RegisterPage() {
    const [selectedTier, setSelectedTier] = useState<"free" | "premium">("free");
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [transactionId, setTransactionId] = useState("");
    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic client-side validation
        if (!formData.fullName || !formData.email || !formData.phone || !formData.college || !formData.experienceLevel) {
            alert("Please fill in all required fields.");
            return;
        }

        if (selectedTier === "premium" && (!transactionId || !screenshot)) {
            alert("Please provide your transaction ID and payment screenshot.");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            const endpoint = selectedTier === "free" ? "/api/register" : "/api/payment";
            console.log(`POST ${endpoint}`, { ...formData, selectedTier, transactionId });
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setShowSuccess(true);
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="relative py-28 md:py-36 px-4 text-center">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
                </div>
                <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-4">
                    Join The Event
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    <span className="text-accent-cyan">Register</span> Now
                </h1>
                <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
                    Choose your tier, fill in your details, and secure your spot.
                </p>
            </section>

            {/* Registration form */}
            <section className="pb-20 px-4">
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-10">
                    {/* Tier Selector */}
                    <div>
                        <h2 className="text-xl font-bold text-center mb-6">
                            Select Your <span className="text-accent-cyan">Tier</span>
                        </h2>
                        <TierSelector selectedTier={selectedTier} onSelect={setSelectedTier} />
                    </div>

                    {/* Form */}
                    <GlassContainer className="p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Your Details</h3>
                        <RegisterForm formData={formData} onChange={setFormData} />
                    </GlassContainer>

                    {/* Payment Panel — premium only */}
                    {selectedTier === "premium" && (
                        <PaymentPanel
                            transactionId={transactionId}
                            onTransactionIdChange={setTransactionId}
                            onScreenshotChange={setScreenshot}
                        />
                    )}

                    {/* Submit */}
                    <div className="text-center">
                        <Button type="submit" variant="primary" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : `Register — ${selectedTier === "free" ? "Free" : "₹200"}`}
                        </Button>
                    </div>
                </form>
            </section>

            {/* Success modal */}
            <SuccessModal
                isOpen={showSuccess}
                tier={selectedTier}
                onClose={() => setShowSuccess(false)}
            />
        </>
    );
}
