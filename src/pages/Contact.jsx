import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import api from '../services/api';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = {
            // For now, grabbing values directly or you could control inputs with state
            // Let's assume standard form submission for simplicity or gather from e.target
            name: e.target[0].value + ' ' + e.target[1].value, // First + Last
            email: e.target[2].value,
            subject: e.target[3].value,
            message: e.target[4].value
        };

        try {
            await api.post('/contact.php', formData);
            setSubmitted(true);
        } catch (err) {
            console.error(err);
            setError('Failed to send message. Please ensure backend is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <section className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        We're here to help with your logistics needs. Reach out to us anytime.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Whether you have a question about shipping, pricing, or tracking, our dedicated team is ready to assist you.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <Card className="flex items-start gap-5 p-6 border-l-4 border-l-primary shadow-sm hover:shadow-md transition">
                                <div className="bg-blue-50 p-3 rounded-full text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">Call Us</h3>
                                    <p className="text-slate-600 mt-1 font-medium text-lg">061 666 2662</p>
                                    <p className="text-slate-400 text-sm mt-1">Mon-Fri from 8am to 6pm</p>
                                </div>
                            </Card>

                            <Card className="flex items-start gap-5 p-6 border-l-4 border-l-cyan-500 shadow-sm hover:shadow-md transition">
                                <div className="bg-cyan-50 p-3 rounded-full text-cyan-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">Email Us</h3>
                                    <p className="text-slate-600 mt-1 font-medium">contact@ahsanair.com</p>
                                    <p className="text-slate-400 text-sm mt-1">We reply within 24 hours</p>
                                </div>
                            </Card>

                            <Card className="flex items-start gap-5 p-6 border-l-4 border-l-indigo-500 shadow-sm hover:shadow-md transition">
                                <div className="bg-indigo-50 p-3 rounded-full text-indigo-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">Head Office</h3>
                                    <p className="text-slate-600 mt-1 font-medium">Aden Adde Int. Airport</p>
                                    <p className="text-slate-400 text-sm mt-1">Mogadishu, Somalia</p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8 shadow-lg border-t-4 border-t-primary">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <MessageSquare className="text-primary" size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
                        </div>

                        {submitted ? (
                            <div className="bg-green-50 text-green-700 p-6 rounded-xl text-center">
                                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                <p>Thank you for contacting us. We will be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">First Name</label>
                                        <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                                        <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition" placeholder="john@example.com" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Subject</label>
                                    <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition" placeholder="Cargo Inquiry" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Message</label>
                                    <textarea
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition min-h-[150px] resize-none"
                                        placeholder="How can we help you today?"
                                        required
                                    ></textarea>
                                </div>

                                <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2 mt-2">
                                    <Send size={18} /> Send Message
                                </Button>
                            </form>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
