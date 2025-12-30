import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Ship, Truck, Package, Anchor, Warehouse } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: <Plane size={48} />,
            title: "Air Freight",
            desc: "Fast and reliable air cargo services connecting Mogadishu to global hubs. Ideal for perishable goods and high-value cargo.",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: <Ship size={48} />,
            title: "Ocean Cargo",
            desc: "Cost-effective sea freight solutions for large shipments. We handle full container loads (FCL) and less than container loads (LCL).",
            color: "text-cyan-600",
            bg: "bg-cyan-50"
        },
        {
            icon: <Truck size={48} />,
            title: "Express Delivery",
            desc: "Domestic distribution and last-mile delivery services across Somalia, ensuring your goods reach their final destination on time.",
            color: "text-indigo-500",
            bg: "bg-indigo-50"
        },
        {
            icon: <Warehouse size={48} />,
            title: "Warehousing",
            desc: "Secure storage solutions in Mogadishu including cold storage options for temperature-sensitive products.",
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            icon: <Anchor size={48} />,
            title: "Customs Clearance",
            desc: "Expert navigation of customs regulations to ensure quick clearing and release of your imported goods.",
            color: "text-slate-600",
            bg: "bg-slate-100"
        },
        {
            icon: <Package size={48} />,
            title: "Procurement",
            desc: "We assist businesses in sourcing goods from international markets and handling the entire logistics chain.",
            color: "text-emerald-500",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <div className="pt-20">
            <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1494412574643-35d324698420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Logistics Services</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to meet your shipping and supply chain needs.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow p-8 flex flex-col items-start border border-slate-100"
                            >
                                <div className={`p-4 rounded-2xl mb-6 ${service.bg} ${service.color}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                    {service.desc}
                                </p>
                                <Link to="/contact">
                                    <Button variant="outline" className="w-full">Get a Quote</Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
