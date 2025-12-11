import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Company Info, Privacy Policy & Copyright Section --- */}
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-6">
          
          {/* Logo and Name */}
          <div className="flex items-center">
            <Image
              src="/assets/interithm-logo-crest.png"
              alt="Interithm Logo"
              width={32}
              height={32}
              className="rounded-lg mr-3 object-cover"
            />
            <span className="text-xl font-bold text-white tracking-tight">Interithm</span>
          </div>

          {/* Privacy Policy Link */}
          <div className="text-sm">
            <a href="/privacypolicy" className="hover:text-indigo-400 transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm md:ml-auto">
            © 2026 Interithm Pvt LTD. All rights reserved.
          </p>

        </div>
        
      </div>
    </footer>
  );
};

export default Footer;