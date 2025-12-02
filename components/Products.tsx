'use client';

import React, { useState } from 'react';
import {
  Zap,
  Shield,
  Globe,
  BarChart,
  Terminal,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 'analytics',
    title: 'Freidea Pos',
    description: 'Real-time data visualization for enterprise scale applications.',
    icon: <BarChart className="w-6 h-6" />,
    features: ['Real-time streams', 'Custom dashboards', 'AI forecasting'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'devtools',
    title: 'Payroll Expert',
    description: 'A cutting-edge payroll management system with finger-print support.',
    icon: <Terminal className="w-6 h-6" />,
    features: ['Instant rollback', 'Docker support', 'Parallel testing'],
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: 'security',
    title: 'Sinhala KeyHelp',
    description: 'Sinhala KeyHelp runs in the background and handles modifiers (pillam).',
    icon: <Shield className="w-6 h-6" />,
    features: ['DDOS protection', 'Identity management', 'Audit logs'],
    color: 'from-emerald-500 to-teal-400'
  }
];

// --- ProductShowcase Component ---
const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0].id);
  const activeProduct = PRODUCTS.find(p => p.id === activeTab) || PRODUCTS[0];

  return (
    <div id="products" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Integrated Powerhouse</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">One platform, endless possibilities. Switch between our specialized suites designed for specific team needs.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {PRODUCTS.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`text-left p-6 rounded-xl transition-all duration-300 border ${activeTab === product.id
                  ? 'bg-white/10 border-indigo-500/50 shadow-lg shadow-indigo-900/20'
                  : 'bg-transparent border-transparent hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-2 rounded-lg ${activeTab === product.id ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    {product.icon}
                  </div>
                  <h3 className={`font-bold text-lg ${activeTab === product.id ? 'text-white' : 'text-slate-300'}`}>
                    {product.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 pl-[3.5rem]">{product.description}</p>
              </button>
            ))}
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-8">
            <div className="bg-slate-950 border border-white/10 rounded-2xl p-1 overflow-hidden h-full min-h-[400px] relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${activeProduct.color} opacity-5`}></div>

              <div className="relative h-full p-8 flex flex-col justify-center items-start z-10">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${activeProduct.color} mb-6 text-white shadow-lg`}>
                  {activeProduct.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{activeProduct.title}</h3>
                <p className="text-xl text-slate-300 mb-8 max-w-xl">{activeProduct.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                  {activeProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/5">
                      <CheckCircle2 className="text-indigo-400 w-5 h-5 flex-shrink-0" />
                      <span className="text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="text-white flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all">
                    Learn more about {activeProduct.title} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Blur */}
              <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[80px] bg-gradient-to-br ${activeProduct.color} opacity-20`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Features Component ---
const Features = () => {
  return (
    <div id="solutions" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-slate-800/50 group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global Edge Network</h3>
            <p className="text-slate-400 leading-relaxed">
              Deploy your applications to our **global edge network** in seconds. Low latency for users anywhere in the world.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-slate-800/50 group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-purple-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Scalability</h3>
            <p className="text-slate-400 leading-relaxed">
              Handle **traffic spikes automatically** without provisioning new servers. Pay only for what you use.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-slate-800/50 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
            <p className="text-slate-400 leading-relaxed">
              SOC2 Type II certified. **End-to-end encryption**, role-based access control, and automated audit logs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export both components, or use a wrapper component
const Products = () => (
  <>
    <Features />
    <ProductShowcase />
  </>
);

export default Products;