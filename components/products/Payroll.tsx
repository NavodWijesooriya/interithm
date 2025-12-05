'use client';

import React from 'react';
import { Users, Calendar, CreditCard, BarChart, Cloud, Settings, CheckCircle2, DollarSign } from 'lucide-react';

// --- Hero Section ---
const PayrollHero = () => (
    <div className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-300 text-sm mb-6 font-semibold">
                <Users className="w-4 h-4"/> Payroll & HR
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                Payroll Expert: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Pay People Fast. Stay Compliant.
                </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                A modern payroll platform that automates pay runs, taxes, and benefits while keeping HR workflows neat and auditable.
            </p>

            <div className="mt-8">
                <a 
                    href="#features" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                >
                    See Payroll Capabilities &rarr;
                </a>
            </div>
        </div>
    </div>
);

// --- Feature Highlights Section ---
const FeatureHighlights = () => (
    <section id="features" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Core Payroll Features</h2>

            <div className="grid md:grid-cols-3 gap-8">
                <HighlightCard 
                    icon={Calendar}
                    title="Automated Pay Runs"
                    description="Schedule single or recurring pay runs with multi-currency and multi-frequency support."
                />
                <HighlightCard 
                    icon={DollarSign}
                    title="Tax & Compliance"
                    description="Automatic tax calculations, filings guidance, and up-to-date regional compliance checks."
                />
                <HighlightCard 
                    icon={CreditCard}
                    title="Direct Deposits"
                    description="Fast direct deposits, pay slips, and multiple payout methods for contractors and employees."
                />
            </div>
        </div>
    </section>
);

// --- In-Depth Feature Grid ---
const DetailedFeatures = () => (
    <section className="py-20 bg-slate-900 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Built For Growing Teams</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <DetailedCard icon={Users} title="Employee Self-Service" description="Employees view payslips, update details, and request time off in one portal." />
                <DetailedCard icon={BarChart} title="Reporting & Analytics" description="Run payroll summaries, labor cost reports, and export audit-ready reports." />
                <DetailedCard icon={Cloud} title="Cloud Sync & Backups" description="Encrypted cloud storage with automated backups and role-based access control." />
                <DetailedCard icon={Settings} title="Integrations & Config" description="Connect time-tracking, benefits, and accounting systems with simple connectors." />
            </div>
        </div>
    </section>
);

// --- Call to Action ---
const PayrollCTA = () => (
    <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4">Make Payroll a Breeze</h2>
            <p className="text-xl text-slate-400 mb-8">
                Reduce errors, save time, and keep employees happy—deploy a payroll system that scales with your business.
            </p>
            <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-xl font-bold rounded-full text-slate-900 bg-white hover:bg-slate-200 transition-colors shadow-2xl shadow-white/20"
            >
                Request a Demo &rarr;
            </a>
        </div>
    </section>
);


// --- Main Component ---
const PayrollPage = () => {
    return (
        <div className="min-h-screen">
            <PayrollHero />
            <FeatureHighlights />
            <DetailedFeatures />
            <PayrollCTA />
        </div>
    );
};

// --- Helper Components ---
//
// Add explicit types so `icon: Icon` does not have an implicit `any`.
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface HighlightCardProps {
    icon: IconComponent;
    title: string;
    description: string;
}

interface DetailedCardProps {
    icon: IconComponent;
    title: string;
    description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ icon: Icon, title, description }) => (
    <div className="p-8 bg-slate-900 rounded-xl border border-white/10 shadow-lg text-center group transition-transform hover:scale-[1.02]">
        <div className="inline-block p-4 rounded-full bg-blue-500/20 text-blue-400 mb-4 transition-transform group-hover:scale-110">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
    </div>
);

const DetailedCard: React.FC<DetailedCardProps> = ({ icon: Icon, title, description }) => (
    <div className="p-6 bg-slate-950 rounded-xl border border-white/5 space-y-3">
        <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <h4 className="text-lg font-semibold text-white">{title}</h4>
        </div>
        <p className="text-slate-500 text-sm ml-8">{description}</p>
    </div>
);

export default PayrollPage;