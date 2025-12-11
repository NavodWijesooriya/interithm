'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Cpu, Briefcase, Users } from 'lucide-react';

const AboutContactPage: React.FC = () => {
    const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
        name: '',
        email: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name as keyof typeof prev]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
                            <ContactItem icon={Phone} title="Sales Hotline" text="+94 (71) 123-4567" href="tel:+94711234567" />
                            <ContactItem icon={MapPin} title="Our Headquarters" text="82/A Katunayake-Veyangoda Rd, Minuwangoda 11550" />
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
                                    rows={5}
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

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31668.89763885031!2d79.943414!3d7.1707469999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e5ee3d496d57%3A0xf3c93eb9a00a2499!2sInterithm!5e0!3m2!1sen!2slk!4v1765437491796!5m2!1sen!2slk"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mt-16 rounded-xl border border-white/10"
                >
                </iframe>

            </div>
        </div>
    );
};

// --- Helper Components ---

type ContactItemProps = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    text: string;
    href?: string;
};

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, title, text, href }) => (
    <a href={href} target={href ? "_blank" : "_self"} className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${href ? 'hover:bg-slate-800/50 cursor-pointer' : ''}`}>
        <Icon className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
        <div>
            <h4 className="text-white font-semibold">{title}</h4>
            <p className={`text-sm ${href ? 'text-indigo-300 hover:text-indigo-400' : 'text-slate-400'}`}>{text}</p>
        </div>
    </a>
);

const CheckMark: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

export default AboutContactPage;