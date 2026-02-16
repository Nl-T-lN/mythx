import GlassContainer from "@/components/ui/GlassContainer";

const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: "Phone",
        value: "+91 98765 43210",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: "Email",
        value: "contact@mythx.in",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: "Location",
        value: "Hyderabad, India",
    },
];

export default function ContactSection() {
    return (
        <section className="py-20 md:py-28 px-4 bg-bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">
                        Get In Touch
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Contact <span className="text-accent-cyan">Us</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {contactInfo.map((item) => (
                        <GlassContainer key={item.label} className="p-6 text-center hover:border-accent-cyan/30 transition-colors duration-200">
                            <div className="flex justify-center mb-3">{item.icon}</div>
                            <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                            <p className="text-text-muted text-sm">{item.value}</p>
                        </GlassContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}
