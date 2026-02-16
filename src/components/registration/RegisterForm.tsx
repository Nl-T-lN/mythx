"use client";

import Input from "@/components/ui/Input";

interface RegisterFormData {
    fullName: string;
    email: string;
    phone: string;
    college: string;
    experienceLevel: string;
    teamName: string;
}

interface RegisterFormProps {
    formData: RegisterFormData;
    onChange: (data: RegisterFormData) => void;
}

export default function RegisterForm({ formData, onChange }: RegisterFormProps) {
    const handleChange = (field: keyof RegisterFormData, value: string) => {
        onChange({ ...formData, [field]: value });
    };

    return (
        <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                    label="Full Name *"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                />
                <Input
                    label="Email *"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                    label="Phone *"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                />
                <Input
                    label="College *"
                    placeholder="Your college name"
                    value={formData.college}
                    onChange={(e) => handleChange("college", e.target.value)}
                    required
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="experience-level" className="text-sm text-text-muted font-medium">
                        Experience Level *
                    </label>
                    <select
                        id="experience-level"
                        value={formData.experienceLevel}
                        onChange={(e) => handleChange("experienceLevel", e.target.value)}
                        className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-xl text-white transition-all duration-200 ease-out focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_12px_rgba(0,245,212,0.25)] appearance-none cursor-pointer"
                        required
                    >
                        <option value="" disabled>Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                <Input
                    label="Team Name (optional)"
                    placeholder="Your team name"
                    value={formData.teamName}
                    onChange={(e) => handleChange("teamName", e.target.value)}
                />
            </div>
        </div>
    );
}
