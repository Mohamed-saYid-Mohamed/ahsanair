import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20" : "bg-primary shadow-md"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="bg-primary text-white p-2 rounded-lg transition-transform group-hover:scale-105 duration-300">
                            <Plane size={24} className="transform -rotate-45" />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn("text-xl font-bold leading-none", scrolled ? "text-slate-900" : "text-white")}>
                                Ahsan Air
                            </span>
                            <span className={cn("text-xs font-medium tracking-wider uppercase", scrolled ? "text-primary" : "text-sky-200")}>
                                Logistic
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                                        isActive
                                            ? "bg-primary text-white"
                                            : scrolled ? "text-slate-600 hover:text-primary hover:bg-slate-50" : "text-white/90 hover:text-white hover:bg-white/10"
                                    )
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link to="/track">
                            <Button
                                variant={scrolled ? "primary" : "secondary"}
                                className={cn("font-semibold", !scrolled && "border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary")}
                            >
                                Track Shipment
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-2 rounded-md focus:outline-none transition-colors",
                                scrolled ? "text-slate-600 hover:text-primary" : "text-white hover:bg-white/10"
                            )}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out transform origin-top",
                    isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                )}
            >
                <div className="px-4 py-6 space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                                )
                            }
                        >
                            {link.name}
                            <ChevronRight size={16} className="opacity-50" />
                        </NavLink>
                    ))}
                    <div className="pt-4 mt-4 border-t border-slate-100">
                        <Link to="/track">
                            <Button className="w-full justify-center text-base py-6">
                                Track Shipment
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
