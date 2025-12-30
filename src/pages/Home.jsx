import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Clock, Plane, Ship, Package, Map } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { cn } from '../lib/utils';

const Home = () => {
    const features = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Fast Delivery",
            desc: "Expedited shipping options including next-day delivery for urgent cargo needs worldwide."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Secure Handling",
            desc: "Top-tier security protocols and insurance coverage to ensure your goods arrive safely."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Network",
            desc: "Extensive logistics network covering over 200 countries with local expertise in Mogadishu."
        }
    ];

    const services = [
        {
            icon: <Plane className="w-10 h-10 text-white" />,
            title: "Air Freight",
            desc: "Rapid air cargo solutions for time-sensitive shipments.",
            bg: "bg-blue-600"
        },
        {
            icon: <Ship className="w-10 h-10 text-white" />,
            title: "Ocean Cargo",
            desc: "Cost-effective shipping for bulk and heavy goods.",
            bg: "bg-cyan-600"
        },
        {
            icon: <Package className="w-10 h-10 text-white" />,
            title: "Door to Door",
            desc: "Seamless delivery from pickup to final destination.",
            bg: "bg-sky-600"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542296332-2e44a996aaad?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        alt="Logistics Aircraft"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 text-white mb-10 md:mb-0"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                            Premier Logistics Partner in Somalia
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                            Global Reach, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Local Expertise.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                            Connecting Mogadishu to the world with reliable air freight and logistics solutions. Ship with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/track">
                                <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 bg-primary hover:bg-primary-light shadow-lg shadow-primary/25">
                                    Track Shipment
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 border-white text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                                    Get Quote
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick Track Card (Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block md:w-5/12 max-w-md"
                    >
                        <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Map className="text-cyan-400" /> Track Cargo
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Tracking Number</label>
                                    <input
                                        type="text"
                                        placeholder="Enter shipment ID (e.g., AAL-123456)"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-colors text-white placeholder-slate-500"
                                    />
                                </div>
                                <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold h-12">
                                    Track Now
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Logistics Solutions</h2>
                        <p className="text-slate-600 text-lg">
                            Tailored shipping services designed to meet the unique demands of businesses in Somalia and East Africa.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                    <div className={cn("absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity", service.bg)}></div>
                                    <div className="p-8 relative z-10 flex flex-col items-start h-full bg-white group-hover:translate-y-[-5px] transition-transform">
                                        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110", service.bg)}>
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                                        <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{service.desc}</p>
                                        <Link to="/services" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Learn More <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features / Why Choose Us */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Why Choose Ahsan Air</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Efficiency, Security, & Reliability.</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                We understand the challenges of logistics in the region. That's why we've built a system that prioritizes speed and security, ensuring your business never stops.
                            </p>

                            <div className="space-y-6">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h4>
                                            <p className="text-slate-600">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/about">
                                    <Button size="lg" variant="outline" className="border-slate-300 hover:bg-white hover:border-primary text-slate-600 hover:text-primary">
                                        About Our Company
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            {/* Image Composition */}
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Cargo Operations"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 z-20 w-2/3 rounded-3xl overflow-hidden shadow-2xl border-8 border-white hidden md:block">
                                <img
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Delivery Truck"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative dot grid */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-300 via-slate-100 to-transparent opacity-50 z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-primary-dark">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Ship?</h2>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Get a competitive quote today and experience the difference with Ahsan Air Logistic.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-white text-primary hover:bg-cyan-50 font-bold px-10 py-6 text-xl">
                            Contact Us Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
