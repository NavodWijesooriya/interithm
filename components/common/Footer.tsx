import React from 'react';
import { Globe, Terminal, Layout, Cpu } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-2">
                                <Cpu className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold text-white">Novus<span className="text-indigo-400">Soft</span></span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering developers to build the future, faster.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Analytics</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">CI/CD</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Enterprise</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Legal</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© 2024 NovusSoft Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Terminal className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Layout className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;