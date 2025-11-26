'use client';


import {Layout} from 'lucide-react';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/Hero';
import Products from '../components/Products';


const PRICING = [
    {
        name: 'Starter',
        price: '$0',
        description: 'Perfect for side projects and learning.',
        features: ['1 Project', 'Community Support', 'Basic Analytics', '1GB Storage'],
        highlight: false
    },
    {
        name: 'Pro',
        price: '$49',
        description: 'For growing teams and startups.',
        features: ['Unlimited Projects', 'Priority Support', 'Advanced Analytics', '100GB Storage', 'Custom Domains'],
        highlight: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations needing scale.',
        features: ['Unlimited Everything', '24/7 Dedicated Support', 'On-premise Deployment', 'SSO & Audit Logs', 'SLA Guarantee'],
        highlight: false
    }
];

const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        role: "CTO at TechFlow",
        content: "We switched to Nexus for our analytics and the insights were immediate. The ROI was visible within the first week."
    },
    {
        name: "Marcus Chen",
        role: "Lead Dev at StartupX",
        content: "The easiest implementation I've ever done. The documentation is gold standard and the API is intuitive."
    },
    {
        name: "Elena Rodriguez",
        role: "Product Manager",
        content: "Finally, a software suite that actually talks to each other. The integration between products is seamless."
    }
];

/** 

const Pricing = () => {
    return (
        <div id="pricing" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-slate-400">Start for free, scale as you grow.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {PRICING.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 border ${tier.highlight
                                    ? 'bg-slate-800 border-indigo-500 shadow-2xl shadow-indigo-900/20 z-10 scale-105'
                                    : 'bg-slate-900 border-white/10 text-slate-300'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-bold text-white">{tier.price}</span>
                                {tier.price !== 'Custom' && <span className="text-slate-500 ml-2">/month</span>}
                            </div>
                            <p className="text-sm text-slate-400 mb-6 min-h-[40px]">{tier.description}</p>

                            <button className={`w-full py-3 rounded-lg font-bold mb-8 transition-colors ${tier.highlight
                                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}>
                                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                            </button>

                            <ul className="space-y-4">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? 'text-indigo-400' : 'text-slate-500'}`}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="M9 11l3 3L22 4"></path></svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

*/

const Testimonials = () => {
    return (
        <div className="py-24 bg-slate-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-16">Trusted by innovators</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-white/5 relative">
                            <div className="text-indigo-500 mb-4">
                                <Layout className="w-8 h-8" />
                            </div>
                            <p className="text-slate-300 mb-6 leading-relaxed">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                    <p className="text-slate-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans">
            <Header />
            <main>
                <Hero />
                <Products />
                {/* <Pricing /> */}
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}