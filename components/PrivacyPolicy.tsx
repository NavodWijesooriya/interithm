import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
    // You should replace these bracketed placeholders with your company's actual information.
    const companyName = "Interithm Inc."; 
    const effectiveDate = "December 11, 2025";
    const contactEmail = "privacy@interithm.com";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            
            {/* Hero Section */}
            <div className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
                
                {/* Background Gradient Effect */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    
                    {/* Pre-Header Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 text-sm mb-6 font-semibold">
                        <Shield className="w-4 h-4"/> Your Privacy Matters
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                        Privacy Policy
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed">
                        At **Interithm**, we are committed to protecting your privacy and ensuring the security of your personal information.
                    </p>
                    
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Last Updated: {effectiveDate}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Content Sections */}
                <section className="space-y-10 text-slate-300">
                    
                    {/* Introduction */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">1. Introduction</h2>
                        <p className="leading-relaxed">
                            {companyName} we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our software applications (including Freidea Pos, Payroll Expert, and Sinhala KeyHelp), and interact with our services (collectively, the "Services"). By accessing or using our Services, you agree to this Privacy Policy.
                        </p>
                        <p className="leading-relaxed font-semibold italic">
                            If you do not agree with the terms of this Privacy Policy, please do not access or use the Services.
                        </p>
                    </div>

                    {/* Information We Collect */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">2. Information We Collect</h2>
                        <p className="leading-relaxed">We may collect information about you in various ways, including:</p>
                        
                        <h3 className="text-2xl font-semibold text-indigo-300 mt-6">Personal Data You Provide:</h3>
                        <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                            <li>**Contact Information:** Name, email address, phone number, and mailing address (e.g., when you fill out a contact form or purchase a license).</li>
                            <li>**Financial Data:** Payment information (processed securely via a third-party payment processor) related to software purchases.</li>
                            <li>**Client Data (Software Use):** Data you input into our software (e.g., sales records in Freidea Pos, employee data in Payroll Expert). We process this data on your behalf, acting as a processor.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-indigo-300 mt-6">Data Collected Automatically:</h3>
                        <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                            <li>**Usage Data:** Information related to how you use our Services, such as access times, pages viewed, and feature usage within our applications.</li>
                            <li>**Technical Data:** IP address, browser type, operating system, and unique device identifiers.</li>
                            <li>**Tracking Technologies:** We use cookies and similar tracking technologies to track activity on our Services and hold certain information.</li>
                        </ul>
                    </div>

                    {/* How We Use Your Information */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">3. How We Use Your Information</h2>
                        <p className="leading-relaxed">We use the information we collect to:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>Provide, operate, and maintain our Services.</li>
                            <li>Process transactions and manage your account.</li>
                            <li>Improve, personalize, and expand our Services.</li>
                            <li>Communicate with you (e.g., support requests, product updates, marketing materials).</li>
                            <li>Monitor and analyze usage and trends to improve your experience.</li>
                            <li>Detect, prevent, and address technical issues and fraudulent activity.</li>
                        </ul>
                    </div>

                    {/* Disclosure of Your Information */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">4. Disclosure of Your Information</h2>
                        <p className="leading-relaxed">We may share information we have collected about you in certain situations:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>**Service Providers:** We may share your data with third parties who perform services for us or on our behalf, including payment processing, data analysis, email delivery, and hosting services.</li>
                            <li>**Legal Requirements:** We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
                            <li>**Business Transfers:** In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                        </ul>
                    </div>
                    
                    {/* Security */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">5. Security of Your Data</h2>
                        <p className="leading-relaxed">
                            We use reasonable administrative, technical, and physical security measures to help protect your personal information. While we have taken steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">6. Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <p className="leading-relaxed font-bold text-indigo-400">
                            Email: <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a>
                        </p>
                        <p className="leading-relaxed font-bold text-indigo-400">
                            Address: [Your Company Address]
                        </p>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;