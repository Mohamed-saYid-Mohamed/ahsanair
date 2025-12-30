import React, { useState } from 'react';
import { Search, MapPin, Package, Truck, CheckCircle, Plane, Clock, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { cn } from '../lib/utils';
import api from '../services/api';

const TrackShipment = () => {
    const [trackingId, setTrackingId] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleTrack = async (e) => {
        e.preventDefault();
        if (!trackingId) return;

        setLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await api.post('/track.php', { trackingId });

            if (response.data.error) {
                setError(response.data.error);
            } else {
                // Map the icon strings from JSON back to Lucide components if needed
                // For simplicity, we'll just handle the mapping in the render or ensure backend sends valid keys
                // We'll update the render loop to handle string icons
                const formattedEvents = response.data.events.map(event => ({
                    ...event,
                    // Simple map or fallback
                    icon: getIconComponent(event.icon)
                }));

                setResult({
                    ...response.data,
                    events: formattedEvents
                });
            }
        } catch (err) {
            console.error(err);
            setError('Unable to connect to server. Please ensure XAMPP is running and files are in place.');
        } finally {
            setLoading(false);
        }
    };

    // Helper to map string names to components
    const getIconComponent = (name) => {
        const icons = { Package, Truck, Plane, Clock, CheckCircle };
        return icons[name] || Clock;
    };

    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <section className="bg-primary-dark text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Track Your Shipment</h1>
                    <p className="text-slate-300 max-w-xl mx-auto">
                        Real-time updates on your cargo's journey. Enter your tracking ID below.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Card className="mb-8 border-t-4 border-t-primary p-6 md:p-8">
                    <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Enter Tracking ID (e.g., AAL-88297)"
                                value={trackingId}
                                onChange={(e) => setTrackingId(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                        <Button type="submit" disabled={loading} size="lg" className="md:w-40 h-[50px]">
                            {loading ? 'Locating...' : 'Track Now'}
                        </Button>
                    </form>
                    {error && (
                        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
                            <AlertCircle size={16} /> {error}
                        </div>
                    )}
                </Card>

                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="p-0 overflow-hidden">
                            {/* Result Header */}
                            <div className="bg-slate-900 text-white p-6 md:p-8">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">Tracking Number</p>
                                        <h2 className="text-2xl font-mono font-bold text-cyan-400">{result.id}</h2>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="bg-primary text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
                                            {result.status}
                                        </span>
                                        <p className="text-slate-400 text-sm">Est. Delivery: <span className="text-white">{result.estimatedDelivery}</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Route Visualization */}
                            <div className="bg-slate-50 p-6 border-b border-slate-100">
                                <div className="flex items-center justify-between text-slate-900">
                                    <div className="text-center md:text-left">
                                        <p className="text-sm text-slate-500 font-medium">Origin</p>
                                        <h3 className="text-lg font-bold">{result.origin.split('(')[0]}</h3>
                                        <p className="text-xs text-slate-500">{result.origin.split('(')[1].replace(')', '')}</p>
                                    </div>
                                    <div className="flex-1 mx-4 md:mx-12 flex flex-col items-center">
                                        <div className="w-full h-1 bg-slate-200 rounded-full relative">
                                            <div className="absolute left-0 top-0 h-full w-1/2 bg-primary rounded-full"></div>
                                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-1.5 rounded-full shadow-lg">
                                                <Plane size={16} className="transform rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center md:text-right">
                                        <p className="text-sm text-slate-500 font-medium">Destination</p>
                                        <h3 className="text-lg font-bold">{result.destination.split('(')[0]}</h3>
                                        <p className="text-xs text-slate-500">{result.destination.split('(')[1].replace(')', '')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-lg font-bold mb-6">Shipment Progress</h3>
                                <div className="space-y-8 relative pl-2 md:pl-4">
                                    {/* Vertical Line */}
                                    <div className="absolute left-[19px] md:left-[27px] top-2 bottom-4 w-0.5 bg-slate-200"></div>

                                    {result.events.map((event, idx) => {
                                        const Icon = event.icon;
                                        const isCompleted = event.completed;

                                        return (
                                            <div key={idx} className="relative flex gap-6">
                                                <div
                                                    className={cn(
                                                        "relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-4 transition-colors",
                                                        isCompleted ? "bg-primary border-white shadow-md text-white" : "bg-white border-slate-200 text-slate-300"
                                                    )}
                                                >
                                                    <Icon size={isCompleted ? 18 : 16} />
                                                </div>
                                                <div className={cn("flex-1 pt-1", !isCompleted && "opacity-50")}>
                                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                                                        <h4 className="font-bold text-slate-900">{event.status}</h4>
                                                        <span className="text-sm text-slate-500">{event.date}</span>
                                                    </div>
                                                    <p className="text-sm text-slate-600">{event.location}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default TrackShipment;
