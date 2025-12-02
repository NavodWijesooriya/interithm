import {
  Play,
  ChevronRight
} from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          New Release: Nexus Analytics 2.0 is live
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
          Software that moves <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            at the speed of thought
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Build, deploy, and scale with the **all-in-one platform** designed for modern engineering teams.
          Stop wrestling with tools and start shipping code.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
            Start Free Trial <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" /> Watch Demo
          </button>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-slate-900">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 w-64 h-2 rounded-full bg-white/10"></div>
          </div>
          {/* Mock Content */}
          <div className="p-6 grid grid-cols-3 gap-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            <div className="col-span-2 space-y-4">
              <div className="h-40 bg-white/5 rounded-lg w-full relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/10 rounded overflow-hidden">
                  <div className="w-2/3 h-full bg-indigo-500"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-white/5 rounded-lg"></div>
                <div className="h-24 bg-white/5 rounded-lg"></div>
              </div>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="h-full bg-white/5 rounded-lg p-4">
                <div className="w-full h-2 bg-white/10 rounded mb-4"></div>
                <div className="w-3/4 h-2 bg-white/10 rounded mb-4"></div>
                <div className="w-full h-2 bg-white/10 rounded mb-4"></div>
                <div className="w-1/2 h-2 bg-white/10 rounded mb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;