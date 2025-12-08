// SolutionPage.jsx
'use client';

import React from 'react';
import { ShoppingCart, HardHat, Languages, Zap, ArrowRight } from 'lucide-react';

// --- Solution Data ---
const SOLUTIONS = [
    {
        id: 'retail',
        title: 'Retail & POS Management Solution',
        tagline: 'Streamline your sales operations, inventory, and staff management.',
        icon: ShoppingCart,
        color: 'bg-blue-600/20 text-blue-300',
        products: [
            { name: 'Freidea Pos', description: 'Central hub for all transactions and inventory.', icon: '🛒' },
            { name: 'Payroll Expert (Lite)', description: 'Track staff hours and process sales commissions.', icon: '💰' },
        ],
        description: "A unified system designed for modern retail environments. Minimize shrinkage, gain real-time sales insights, and keep your staff happy with simplified shift and commission tracking.",
        cta: 'Transform Your Store'
    },
    {
        id: 'hr_admin',
        title: 'HR & Administrative Toolkit',
        tagline: 'Automate payroll, compliance, and employee self-service functions.',
        icon: HardHat,
        color: 'bg-purple-600/20 text-purple-300',
        products: [
            { name: 'Payroll Expert (Pro)', description: 'Full compliance, tax, and direct deposit handling.', icon: '🧑‍💼' },
            { name: 'Freidea Pos (Reporting)', description: 'Utilize sales data for effective capacity planning.', icon: '📊' },
        ],
        description: "Reduce administrative overhead by automating complex HR tasks. Ensures regulatory compliance while offering employees intuitive tools for managing their own data and requests.",
        cta: 'Automate HR Today'
    },
    {
        id: 'localization',
        title: 'Developer Localization Suite',
        tagline: 'Enable seamless language support and utility integration for local markets.',
        icon: Languages,
        color: 'bg-emerald-600/20 text-emerald-300',
        products: [
            { name: 'Sinhala KeyHelp', description: 'System-wide fast phonetic typing utility.', icon: '⌨️' },
            { name: 'Aegis Security Suite', description: 'Secure local deployments and data access.', icon: '🛡️' },
        ],
        description: "Perfect for teams deploying software in multilingual regions. Ensure high-speed, accurate input and robust security for sensitive localized data and infrastructure.",
        cta: 'Start Localizing'
    },
];

// --- Solution Card Component ---
const SolutionCard = ({ solution }: { solution: typeof SOLUTIONS[0] }) => {
    const Icon = solution.icon;
    
    return (
        <div className="bg-slate-900 border border-white/10 rounded-xl p-8 m-8 flex flex-col transition-all duration-300 hover:border-indigo-500/50 group">
            
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${solution.color} text-sm font-semibold mb-6`}>
                <Icon className="w-5 h-5"/> {solution.title}
            </div>
            
            <p className="text-xl font-semibold text-white mb-6 flex-grow">{solution.tagline}</p>
            
            <p className="text-slate-400 mb-8 text-sm">{solution.description}</p>
            
            {/* Included Products */}
            <div className="mb-8 p-4 bg-slate-800 rounded-lg border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400"/> Key Products Included
                </h4>
                <ul className="space-y-3">
                    {solution.products.map((product, index) => (
                        <li key={index} className="flex items-start text-slate-300 text-sm">
                            <span className="mr-2 flex-shrink-0" role="img" aria-label="product icon">{product.icon}</span>
                            <div>
                                <span className="font-semibold text-white">{product.name}: </span>
                                <span className="text-slate-400">{product.description}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Call to Action */}
            <a 
                href={`#${solution.id}`} // Placeholder link to jump to a specific section or product page
                className="mt-auto py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
                {solution.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    );
};

// --- Hero Component (moved out of invalid return) ---
const FreideaPosHero = () => (
    <div className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-300 text-sm mb-6 font-semibold">
                <ShoppingCart className="w-4 h-4"/> Point of Sale Solution
            </div> */}

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                Solutions for Your: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Biggest Challenges
                </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Interithm products are not just tools; they are not integrated solutions built to solve real-world problems in retail, HR, and technical deployment.
            </p>

            <div className="mt-8">
                <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                >
                    Contact Us &rarr;
                </a>
            </div>
        </div>
    </div>
);

// --- Main Solution Page Component ---
const SolutionPage = () => {
    return (
        <>
            <FreideaPosHero />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <section className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SOLUTIONS.map((sol) => (
                            <SolutionCard key={sol.id} solution={sol} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default SolutionPage;