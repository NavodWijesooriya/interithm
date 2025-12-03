// FreideaPosPage.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingCart, LayoutGrid, BarChart, HardHat, CheckCircle2, DollarSign, Cloud, Settings } from 'lucide-react';

// --- Hero Section ---
const FreideaPosHero = () => (
    <div className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-300 text-sm mb-6 font-semibold">
                <ShoppingCart className="w-4 h-4"/> Point of Sale Solution
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Freidea Pos: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    The Smartest Way to Sell
                </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                A powerful, real-time POS system designed for fast-paced retail and restaurant environments. 
                Manage inventory, analyze sales, and process payments—all from one platform.
            </p>

            <div className="mt-8">
                <a 
                    href="#features" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                >
                    See Key Features &rarr;
                </a>
            </div>
        </div>
    </div>
);

// --- Feature Highlights Section ---
const FeatureHighlights = () => (
    <section id="features" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Core Capabilities That Drive Revenue</h2>

            <div className="grid md:grid-cols-3 gap-8">
                <HighlightCard 
                    icon={LayoutGrid}
                    title="Intuitive Interface"
                    description="Training takes minutes, not hours. Designed for touchscreens and high-speed order processing."
                />
                <HighlightCard 
                    icon={BarChart}
                    title="Real-time Analytics"
                    description="Access live sales data, peak hour reports, and inventory consumption trends instantly."
                />
                <HighlightCard 
                    icon={DollarSign}
                    title="Flexible Payments"
                    description="Accept all major credit cards, mobile wallets, and custom payment types seamlessly."
                />
            </div>
        </div>
    </section>
);

// --- In-Depth Feature Grid ---
const DetailedFeatures = () => (
    <section className="py-20 bg-slate-900 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Built for Reliability and Scale</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <DetailedCard icon={ShoppingCart} title="Inventory Control" description="Track stock levels, set low-stock alerts, and manage multiple warehouses/locations." />
                <DetailedCard icon={Cloud} title="Cloud Backup & Offline Mode" description="Never lose a sale. Transactions sync automatically once connectivity is restored." />
                <DetailedCard icon={Settings} title="Custom Pricing & Discounts" description="Easily create happy hour pricing, loyalty tiers, and special bundled promotions." />
                <DetailedCard icon={HardHat} title="Employee Management" description="Set role-based permissions, track shift timings, and monitor individual sales performance." />
            </div>
        </div>
    </section>
);

// --- Call to Action ---
const PosCTA = () => (
    <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Sales Floor?</h2>
            <p className="text-xl text-slate-400 mb-8">
                Freidea Pos simplifies operations so you can focus on serving your customers better.
            </p>
            <a 
                href="/contact" // Link to your combined About/Contact page
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-xl font-bold rounded-full text-slate-900 bg-white hover:bg-slate-200 transition-colors shadow-2xl shadow-white/20"
            >
                Request a Live Demo Today &rarr;
            </a>
        </div>
    </section>
);


// --- Main Component ---
const FreideaPosPage = () => {
    return (
        <div className="min-h-screen">
            <FreideaPosHero />
            <FeatureHighlights />
            <DetailedFeatures />
            <PosCTA />
        </div>
    );
};

// --- Helper Components ---

const HighlightCard = ({ icon: Icon, title, description }) => (
    <div className="p-8 bg-slate-900 rounded-xl border border-white/10 shadow-lg text-center group transition-transform hover:scale-[1.02]">
        <div className="inline-block p-4 rounded-full bg-blue-500/20 text-blue-400 mb-4 transition-transform group-hover:scale-110">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
    </div>
);

const DetailedCard = ({ icon: Icon, title, description }) => (
    <div className="p-6 bg-slate-950 rounded-xl border border-white/5 space-y-3">
        <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <h4 className="text-lg font-semibold text-white">{title}</h4>
        </div>
        <p className="text-slate-500 text-sm ml-8">{description}</p>
    </div>
);

export default FreideaPosPage;