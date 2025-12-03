'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Cpu, Briefcase, Users } from 'lucide-react';

const AboutContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmissionStatus('Sending...');

        // Mock API call simulation
        setTimeout(() => {
            console.log('Form Submitted:', formData);
            setSubmissionStatus('Message sent successfully! We will get back to you shortly.');
            setFormData({ name: '', email: '', message: '' }); // Clear form
        }, 1500);
    };

    return (
        <div className="py-24 bg-slate-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-white mb-4">Get to Know Us</h1>
                    <p className="text-xl text-indigo-400">Our Mission, Our Team, and How to Connect</p>
                </header>

                {/* --- 1. ABOUT US SECTION --- */}
                <section className="mb-24 p-10 bg-slate-900 rounded-xl border border-white/10 shadow-lg">
                    <h2 className="text-4xl font-bold text-white mb-8 border-b border-indigo-500/50 pb-4 flex items-center">
                        <Cpu className="w-8 h-8 text-indigo-500 mr-3" />
                        Our Story & Mission
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-10 text-slate-300">
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed">
                                **Interithm** was founded on the principle of bridging the gap between complex engineering and practical usability. We believe that world-class software tools shouldn't require an army of specialists to operate. Our journey began in a small garage, driven by a simple idea: **empower developers to build the future, faster.**
                            </p>
                            <p className="leading-relaxed border-l-4 border-indigo-600 pl-4 italic text-slate-400">
                                "Our mission is to create intelligent, integrated software solutions that drastically reduce development friction and elevate the quality of life for engineering teams worldwide."
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white flex items-center"><Briefcase className="w-5 h-5 mr-2 text-indigo-400"/> Core Philosophy</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckMark /> **Simplicity:** Elegant interfaces hiding powerful complexity.
                                </li>
                                <li className="flex items-start">
                                    <CheckMark /> **Integration:** Tools designed to talk to each other seamlessly.
                                </li>
                                <li className="flex items-start">
                                    <CheckMark /> **Scalability:** Built to handle everything from prototypes to petabytes.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                {/* --- 2. CONTACT US SECTION --- */}
                <section className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info (Column 1) */}
                    <div className="lg:col-span-1 space-y-8 p-6 bg-slate-900 rounded-xl border border-white/10 h-full">
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                            <Users className="w-7 h-7 text-indigo-500 mr-3" />
                            Reach Out
                        </h2>
                        
                        <div className="space-y-6">
                            <ContactItem icon={Mail} title="Email Support" text="support@interithm.com" href="mailto:support@interithm.com" />
                            <ContactItem icon={Phone} title="Sales Hotline" text="+1 (555) 123-4567" href="tel:+15551234567" />
                            <ContactItem icon={MapPin} title="Our Headquarters" text="123 Tech Drive, Silicon Valley, CA 94043" />
                        </div>
                        <p className="text-sm text-slate-500 pt-4">
                            We aim to respond to all inquiries within 24 business hours.
                        </p>
                    </div>

                    {/* Contact Form (Columns 2 & 3) */}
                    <div className="lg:col-span-2 p-8 bg-slate-900 rounded-xl border border-white/10 shadow-xl">
                        <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                                    placeholder="Your Full Name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                disabled={submissionStatus === 'Sending...'}
                            >
                                <Send className="w-5 h-5" />
                                {submissionStatus === 'Sending...' ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {submissionStatus && submissionStatus !== 'Sending...' && (
                                <p className={`mt-4 text-center text-sm font-semibold ${submissionStatus.includes('successfully') ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {submissionStatus}
                                </p>
                            )}
                        </form>
                    </div>
                </section>

            </div>
        </div>
    );
};

// --- Helper Components ---

const ContactItem = ({ icon: Icon, title, text, href }) => (
    <a href={href} target={href ? "_blank" : "_self"} className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${href ? 'hover:bg-slate-800/50 cursor-pointer' : ''}`}>
        <Icon className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
        <div>
            <h4 className="text-white font-semibold">{title}</h4>
            <p className={`text-sm ${href ? 'text-indigo-300 hover:text-indigo-400' : 'text-slate-400'}`}>{text}</p>
        </div>
    </a>
);

const CheckMark = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

export default AboutContactPage;