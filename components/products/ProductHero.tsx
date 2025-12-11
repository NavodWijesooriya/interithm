import React from 'react';
import { Layers3, Settings, ShieldCheck } from 'lucide-react';

const ProductHero: React.FC = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                
                {/* Pre-Header Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm mb-8 animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
                    Our Complete Product Suite
                </div>

                {/* Hero Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                    Our Products <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        For Customer Success
                    </span>
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Stop juggling dozens of tools. Interithm provides integrated, purpose-built software
                    for your <strong className="text-white">payroll, retail, and language needs</strong>, designed for simplicity and scale.
                </p>

                {/* Key Pillars */}
                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-y-4 sm:gap-x-6 max-w-4xl mx-auto animate-fade-in-up">
                    <PillarCard
                        className="w-full sm:w-auto text-center sm:text-left"
                        icon={Layers3}
                        title="Integrated Solutions"
                        description="Seamlessly connect your POS, Payroll, and Utilities."
                    />
                    <PillarCard
                        className="w-full sm:w-auto text-center sm:text-left"
                        icon={ShieldCheck}
                        title="Compliance Focused"
                        description="Tools built with local regulatory requirements in mind."
                    />
                    <PillarCard
                        className="w-full sm:w-auto text-center sm:text-left"
                        icon={Settings}
                        title="Zero Setup Friction"
                        description="Get deployed and running in minutes, not days."
                    />
                </div>
            </div>
        </div>
    );
};

// Add explicit types so 'Icon' is not implicitly any
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface PillarCardProps {
	icon: IconComponent;
	title: string;
	description: string;
	className?: string;
}

// Helper Component for Visualizing Key Pillars
const PillarCard: React.FC<PillarCardProps> = ({ icon: Icon, title, description, className = '' }) => (
	<div className={`p-4 md:p-5 bg-slate-800/50 rounded-lg border border-white/5 ${className} flex items-start gap-4 hover:translate-y-0.5 transition-transform`}>
		<div className="p-3 md:p-4 rounded-full bg-indigo-500/20 text-indigo-400 flex-shrink-0 flex items-center justify-center">
			<Icon className="w-5 h-5 md:w-6 md:h-6" />
		</div>
		<div>
			<h3 className="text-sm md:text-md font-bold text-white mb-1">{title}</h3>
			<p className="text-xs text-slate-400">{description}</p>
		</div>
	</div>
);

export default ProductHero;