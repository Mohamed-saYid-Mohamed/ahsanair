import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Globe, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';

const About = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/seaport.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ahsan Air Logistic</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Your strategic partner in global logistics, rooted in Mogadishu, connected to the world.
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2"
                        >
                            <img
                                src="/aden-adde-airport.jpg"
                                alt="Aden Adde International Airport"
                                className="rounded-2xl shadow-xl w-full"
                            />

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Ahsan Air Logistic is a premier logistics company based in Mogadishu, Somalia. We specialize in air freight, cargo handling, and supply chain management. Our deep understanding of the local market, combined with global best practices, allows us to deliver unparalleled service.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Founded with a vision to streamline trade in East Africa, we have grown into a trusted partner for businesses ranging from small enterprises to large corporations.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-primary w-5 h-5" />
                                    <span className="font-medium text-slate-800">10+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-primary w-5 h-5" />
                                    <span className="font-medium text-slate-800">Global Network</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-primary w-5 h-5" />
                                    <span className="font-medium text-slate-800">24/7 Support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-primary w-5 h-5" />
                                    <span className="font-medium text-slate-800">Secure Handling</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-8 border-t-4 border-t-primary hover:shadow-lg transition-all">
                            <Target className="w-12 h-12 text-primary mb-6" />
                            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                            <p className="text-slate-600">
                                To provide efficient, reliable, and secure logistics solutions that empower businesses in Somalia to connect and trade with the world.
                            </p>
                        </Card>

                        <Card className="p-8 border-t-4 border-t-cyan-500 hover:shadow-lg transition-all">
                            <Globe className="w-12 h-12 text-cyan-500 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                            <p className="text-slate-600">
                                To be the leading air cargo and logistics provider in East Africa, known for innovation, integrity, and operational excellence.
                            </p>
                        </Card>

                        <Card className="p-8 border-t-4 border-t-indigo-500 hover:shadow-lg transition-all">
                            <Users className="w-12 h-12 text-indigo-500 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Our Values</h3>
                            <p className="text-slate-600">
                                Customer First, Reliability, Transparency, and Constant Innovation in everything we do.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
