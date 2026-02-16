import GlassContainer from "@/components/ui/GlassContainer";
import Button from "@/components/ui/Button";

export default function CTASection() {
    return (
        <section className="py-20 md:py-28 px-4">
            <div className="max-w-3xl mx-auto">
                <GlassContainer className="p-10 md:p-16 text-center relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[100px]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to{" "}
                        <span className="text-accent-cyan">Compete</span>?
                    </h2>
                    <p className="text-text-muted text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                        Secure your spot in the most anticipated cybersecurity event of 2026.
                        Free and premium tiers available.
                    </p>
                    <Button href="/register" variant="primary">
                        Register Now
                    </Button>
                </GlassContainer>
            </div>
        </section>
    );
}
