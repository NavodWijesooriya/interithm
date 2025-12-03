import React from 'react';
import { Layers3, Settings, ShieldCheck } from 'lucide-react';

const ProductHero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                
                {/* Hero Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                   Our Products <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400">
                       For Customer Success
                    </span>
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Stop juggling dozens of tools. Interithm provides integrated, purpose-built software
                    for your <strong className="text-white">payroll, retail, and language needs</strong>, designed for simplicity and scale.
                </p>

                {/* Key Pillars */}
                <div className="flex justify-center gap-6 max-w-4xl mx-auto animate-fade-in-up">
                    <PillarCard 
                        icon={Layers3} 
                        title="Integrated Solutions" 
                        description="Seamlessly connect your POS, Payroll, and Utilities."
                    />
                    <PillarCard 
                        icon={ShieldCheck} 
                        title="Compliance Focused" 
                        description="Tools built with local regulatory requirements in mind."
                    />
                    <PillarCard 
                        icon={Settings} 
                        title="Zero Setup Friction" 
                        description="Get deployed and running in minutes, not days."
                    />
                </div>

                {/* Call to Action (Optional) */}
                <div className="mt-12">
                    <a
                        href="#products-grid"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-indigo-500/20 gap-2"
                    >
                        Explore All Products &rarr;
                    </a>
                </div>
            </div>
            
            {/* Decorative Background Blur */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
            </div>
        </div>
    );
};

// Helper Component for Visualizing Key Pillars
const PillarCard = ({ icon: Icon, title, description }) => (
    <div className="p-4 md:p-5 bg-slate-800/50 rounded-lg border border-white/5 text-left flex items-start gap-4 hover:translate-y-0.5 transition-transform">
        <div className="p-3 md:p-4 rounded-full bg-indigo-500/20 text-indigo-400 flex-shrink-0">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h3 className="text-sm md:text-md font-bold text-white mb-1">{title}</h3>
            <p className="text-xs text-slate-400">{description}</p>
        </div>
    </div>
);

export default ProductHero;