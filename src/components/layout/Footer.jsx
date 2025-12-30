import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary text-white p-2 rounded-lg">
                                <Plane size={24} className="transform -rotate-45" />
                            </div>
                            <span className="text-2xl font-bold">Ahsan Air</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Connecting Mogadishu to the world with premium air cargo and logistics solutions. Reliable, fast, and secure.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-primary">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-primary">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-primary">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-primary">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-slate-400 hover:text-primary-light transition-colors flex items-center gap-2">About Us</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-primary-light transition-colors flex items-center gap-2">Our Services</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-primary-light transition-colors flex items-center gap-2">Contact Us</Link></li>
                            <li><Link to="/admin" className="text-slate-400 hover:text-primary-light transition-colors flex items-center gap-2">Admin Portal</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
                        <ul className="space-y-4">
                            <li className="text-slate-400">Air Freight</li>
                            <li className="text-slate-400">Ocean Cargo</li>
                            <li className="text-slate-400">Warehousing</li>
                            <li className="text-slate-400">Door-to-Door Delivery</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-slate-400">Mogadishu, Somalia<br />Aden Adde Int. Airport</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={20} className="text-primary flex-shrink-0" />
                                <span className="text-slate-400">061 666 2662</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className="text-primary flex-shrink-0" />
                                <span className="text-slate-400">info@ahsanair.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Ahsan Air Logistic. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
