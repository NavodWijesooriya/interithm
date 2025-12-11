'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src="/assets/interithm-logo-crest.png"
                            alt="Interithm"
                            width={32}
                            height={32}
                            className="rounded-lg mr-2 object-cover"
                        />
                        <span className="text-xl font-bold text-white tracking-tight">Interithm</span>
                    </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Home</a>
                        <a href="/products" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Products</a>
                        <a href="/solution" className="text-slate-300  hover:text-white transition-colors text-sm font-medium">Solutions</a>
                        {/* <a href="#pricing" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Pricing</a> */}
                        <a href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
                        {/* <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all border border-white/10">
                            Sign In
                        </button> */}
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-indigo-500/25">
                            Get Started
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-4 animate-in slide-in-from-top-5">
                    <div className="flex flex-col space-y-4">
                        <a href="/" className="text-slate-300 hover:text-white">Home</a>
                        <a href="/products" className="text-slate-300 hover:text-white">Products</a>
                        <a href="/solution" className="text-slate-300 hover:text-white">Solutions</a>
                        {/* <a href="#pricing" className="text-slate-300 hover:text-white">Pricing</a> */}
                        <a href="/contact" className="text-slate-300 hover:text-white">Contact</a>
                        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium">Get Started</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;