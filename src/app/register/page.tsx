"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlassContainer from "@/components/ui/GlassContainer";
import Input from "@/components/ui/Input";
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

        if (!formData.fullName || !formData.email || !formData.phone || !formData.college || !formData.experienceLevel) {
            alert("Please fill in all required fields.");
            return;
        }

        if (selectedTier === "premium" && (!transactionId || !screenshot)) {
            alert("Please provide your transaction ID and payment screenshot.");
            return;
        }

        setIsSubmitting(true);

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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-accent-cyan text-xs font-medium tracking-[0.3em] uppercase mb-4">
                        {">"} Join The Event
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        <span className="text-accent-cyan text-glow-cyan">Register</span> Now
                    </h1>
                    <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
                        Choose your tier, fill in your details, and secure your spot.
                    </p>
                </motion.div>
            </section>

            {/* Registration form */}
            <section className="pb-20 px-4">
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-10">
                    {/* Tier Selector */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 className="text-xl font-bold text-center mb-6">
                            Select Your <span className="text-accent-cyan text-glow-cyan">Tier</span>
                        </h2>
                        <TierSelector selectedTier={selectedTier} onSelect={setSelectedTier} />
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    >
                        <GlassContainer className="p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Your Details</h3>
                            <RegisterForm formData={formData} onChange={setFormData} />
                        </GlassContainer>
                    </motion.div>

                    {/* Payment Panel — premium only */}
                    {selectedTier === "premium" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <PaymentPanel
                                transactionId={transactionId}
                                onTransactionIdChange={setTransactionId}
                                onScreenshotChange={setScreenshot}
                            />
                        </motion.div>
                    )}

                    {/* Submit */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    >
                        <Button type="submit" variant="primary" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : `Register — ${selectedTier === "free" ? "Free" : "₹200"}`}
                        </Button>
                    </motion.div>
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
