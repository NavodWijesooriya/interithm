import React from 'react';
import { Layers3, Settings, ShieldCheck } from 'lucide-react';

const ProductHero = () => {
    return (
        <div className="relative pt-24 pb-16 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                
                {/* Hero Headline */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                    The Complete <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400">
                        Software Suite
                    </span> for Modern Operations
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
                    Stop juggling dozens of tools. Interithm provides integrated, purpose-built software
                    for your **payroll, retail, and language needs**, designed for simplicity and scale.
                </p>

                {/* Key Pillars */}
                <div className="flex justify-center gap-6 max-w-4xl mx-auto">
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
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30"
                    >
                        Explore All Products &rarr;
                    </a>
                </div>
            </div>
            
            {/* Decorative Background Blur */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]"></div>
            </div>
        </div>
    );
};

// Helper Component for Visualizing Key Pillars
const PillarCard = ({ icon: Icon, title, description }) => (
    <div className="p-4 bg-slate-800/50 rounded-lg border border-white/5 text-left flex items-start gap-4">
        <div className="p-3 rounded-full bg-indigo-500/20 text-indigo-400 flex-shrink-0">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <h3 className="text-md font-bold text-white mb-1">{title}</h3>
            <p className="text-xs text-slate-400">{description}</p>
        </div>
    </div>
);

export default ProductHero;