// AboutContactHero.jsx
import React from 'react';
import { Handshake, MapPin } from 'lucide-react';

const AboutContactHero = () => {
    return (
        <div className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
            
            {/* Background Gradient Effect */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                
                {/* Pre-Header Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 text-sm mb-6 font-semibold">
                    <Handshake className="w-4 h-4"/> Our Mission & Partnership
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                    Powering Your Future, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
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
                    <a 
                        href="#location-info" 
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
                    >
                        <MapPin className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" /> Our Locations
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutContactHero;