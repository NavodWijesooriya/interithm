// AboutContactHero.jsx
import React from 'react';
import { Handshake, MapPin } from 'lucide-react';

const AboutContactHero = () => {
    return (
        <div className="relative pt-32 pb-24 overflow-hidden">
            
            {/* Background Gradient Effect */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                
                {/* Pre-Header Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm mb-6 font-semibold">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
                    <Handshake className="w-4 h-4"/> Our Mission & Partnership
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                    Powering Your Future, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        One Connection at a Time
                    </span>
                </h1>

                {/* Subtitle / Dual Purpose */}
                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Learn about **Interithm's** commitment to developer empowerment and find the direct route to reaching our team, whether it's for support, sales, or partnership.
                </p>

                {/* Quick Contact CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href="#contact-form" 
                        className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                    >
                        Send a Message &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutContactHero;