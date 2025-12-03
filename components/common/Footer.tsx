import { Globe, Terminal, Layout } from 'lucide-react';
import Image from 'next/image';
import React from 'react'; // Import React if not already implicitly available

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Footer Links Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/interithm-logo-crest.png"
                alt="Interithm Logo"
                width={32}
                height={32}
                className="rounded-lg mr-2 object-cover"
              />
              <span className="text-xl font-bold text-white tracking-tight">Interithm</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering developers to build the future, faster.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Freidea Pos</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Payroll Expert</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Sinhala KeyHelp</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* --- Copyright and Social/Icon Links --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 Interithm Pvt LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Global Link"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Terminal Link"><Terminal className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Layout Link"><Layout className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;