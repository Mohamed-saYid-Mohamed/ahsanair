import React, { useEffect, useState } from 'react';
import {
    BarChart3, Package, Users, Settings, LogOut, TrendingUp,
    AlertCircle, Truck, Search, Bell, Loader2, Edit, Trash2, X, Save, Plus
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [shipments, setShipments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Modal States
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentShipment, setCurrentShipment] = useState(null);

    // Fetch Shipments
    useEffect(() => {
        fetchShipments();
    }, []);

    const fetchShipments = async () => {
        try {
            const response = await api.get('/admin_shipments.php');
            if (Array.isArray(response.data)) {
                setShipments(response.data);
            } else {
                // Fallback dummy data if API fails or returns unexpected structure
                setShipments([
                    { trackingId: "AAL-89231", customer: "John Doe", origin: "Shanghai, CN", destination: "Mogadishu, SO", status: "In Transit" },
                    { trackingId: "AAL-89232", customer: "Jane Smith", origin: "Dubai, UAE", destination: "Hargeisa, SO", status: "Delivered" },
                    { trackingId: "AAL-89233", customer: "Ali Hassan", origin: "Istanbul, TR", destination: "Mogadishu, SO", status: "Pending" },
                ]);
            }
        } catch (error) {
            console.error("Failed to fetch shipments", error);
            // Fallback for UI testing if backend not connected
            setShipments([
                { trackingId: "AAL-89231", customer: "John Doe", origin: "Shanghai, CN", destination: "Mogadishu, SO", status: "In Transit" },
                { trackingId: "AAL-89232", customer: "Jane Smith", origin: "Dubai, UAE", destination: "Hargeisa, SO", status: "Delivered" },
                { trackingId: "AAL-89233", customer: "Ali Hassan", origin: "Istanbul, TR", destination: "Mogadishu, SO", status: "Pending" },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/admin/login');
    };

    // Edit Logic
    const openEditModal = (shipment) => {
        setCurrentShipment({ ...shipment });
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = () => {
        // Here you would typically make an API call to update
        // const response = await api.post('/update_shipment.php', currentShipment);

        // For now, update local state
        setShipments(shipments.map(s =>
            s.trackingId === currentShipment.trackingId ? currentShipment : s
        ));
        setIsEditModalOpen(false);
    };

    // Delete Logic
    const openDeleteModal = (shipment) => {
        setCurrentShipment(shipment);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        // Here you would typically make an API call to delete
        // await api.post('/delete_shipment.php', { id: currentShipment.trackingId });

        setShipments(shipments.filter(s => s.trackingId !== currentShipment.trackingId));
        setIsDeleteModalOpen(false);
    };

    // Filter Logic
    const filteredShipments = shipments.filter(shipment =>
        shipment.trackingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Stats Logic
    const stats = {
        total: shipments.length,
        delivered: shipments.filter(s => s.status === 'Delivered').length,
        pending: shipments.filter(s => s.status === 'Pending').length,
        inTransit: shipments.filter(s => s.status === 'In Transit').length
    };

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-green-900 text-white hidden md:flex flex-col flex-shrink-0 transition-all duration-300 shadow-xl z-20">
                <div className="h-20 flex items-center px-6 font-bold text-2xl border-b border-green-800 tracking-tight">
                    <span className="text-white">Ahsan</span><span className="text-green-300">Logistic</span>
                </div>
                <nav className="p-4 space-y-1 flex-1">
                    <p className="px-4 text-xs font-semibold text-green-300 uppercase tracking-wider mb-2 mt-4">Main Menu</p>
                    <NavItem icon={BarChart3} label="Dashboard" active />
                    <NavItem icon={Package} label="Shipments" />
                    <NavItem icon={Users} label="Customers" />
                    <NavItem icon={Truck} label="Drivers" />

                    <p className="px-4 text-xs font-semibold text-green-300 uppercase tracking-wider mb-2 mt-8">System</p>
                    <NavItem icon={Settings} label="Settings" />
                </nav>
                <div className="p-4 border-t border-green-800">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-300 hover:text-white hover:bg-red-500/20 rounded-xl transition-all">
                        <LogOut size={20} /> <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative">
                <header className="h-20 bg-white sticky top-0 z-10 border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-bold text-slate-800">Administrator Dashboard</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search shipments..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all w-72"
                            />
                        </div>
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                                A
                            </div>
                            <div className="hidden md:block">
                                <p className="text-sm font-bold text-slate-800">Admin User</p>
                                <p className="text-xs text-slate-500">Super Admin</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto space-y-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard
                            title="Total Shipments"
                            value={stats.total}
                            icon={Package}
                            colorClass="text-blue-600 bg-blue-100"
                        />
                        <StatCard
                            title="Delivered"
                            value={stats.delivered}
                            icon={Package}
                            colorClass="text-green-600 bg-green-100"
                        />
                        <StatCard
                            title="In Transit"
                            value={stats.inTransit}
                            icon={Truck}
                            colorClass="text-orange-600 bg-orange-100"
                        />
                        <StatCard
                            title="Pending"
                            value={stats.pending}
                            icon={AlertCircle}
                            colorClass="text-red-600 bg-red-100"
                        />
                    </div>

                    {/* Shipments Management */}
                    <Card className="border-none shadow-xl shadow-slate-200/60 overflow-hidden bg-white rounded-xl">
                        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">Shipment Management</h3>
                                <p className="text-slate-500 text-sm">Manage and track all logistics operations</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            {loading ? (
                                <div className="p-12 text-center text-slate-500 flex flex-col justify-center items-center gap-3">
                                    <Loader2 className="animate-spin text-green-600" size={32} />
                                    <p>Loading shipment data...</p>
                                </div>
                            ) : (
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-100">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold">Tracking ID</th>
                                            <th className="px-6 py-4 font-semibold">Customer</th>
                                            <th className="px-6 py-4 font-semibold">Origin / Destination</th>
                                            <th className="px-6 py-4 font-semibold">Status</th>
                                            <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {filteredShipments.map((item, index) => (
                                            <tr key={index} className="hover:bg-slate-50 transition-colors group">
                                                <td className="px-6 py-4 font-mono text-sm font-medium text-green-700 bg-green-50/50 rounded-r-lg w-fit block my-2 mx-2">
                                                    {item.trackingId}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="font-medium text-slate-700 block">{item.customer || 'Unknown'}</span>
                                                </td>
                                                <td className="px-6 py-4 text-slate-600 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <span>{item.origin}</span>
                                                        <span className="text-slate-300">→</span>
                                                        <span>{item.destination}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <StatusBadge status={item.status} />
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button
                                                            onClick={() => openEditModal(item)}
                                                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                            title="Edit"
                                                        >
                                                            <Edit size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => openDeleteModal(item)}
                                                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {filteredShipments.length === 0 && (
                                            <tr>
                                                <td colSpan="5" className="p-12 text-center text-slate-400">
                                                    No shipments found matching your search.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </Card>
                </div>

                {/* Edit Modal */}
                {isEditModalOpen && currentShipment && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-green-50">
                                <h3 className="font-bold text-lg text-green-800">Edit Shipment</h3>
                                <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Customer Name</label>
                                    <input
                                        type="text"
                                        value={currentShipment.customer}
                                        onChange={(e) => setCurrentShipment({ ...currentShipment, customer: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Origin</label>
                                        <input
                                            type="text"
                                            value={currentShipment.origin}
                                            onChange={(e) => setCurrentShipment({ ...currentShipment, origin: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
                                        <input
                                            type="text"
                                            value={currentShipment.destination}
                                            onChange={(e) => setCurrentShipment({ ...currentShipment, destination: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                                    <select
                                        value={currentShipment.status}
                                        onChange={(e) => setCurrentShipment({ ...currentShipment, status: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Transit">In Transit</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                                <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
                                <Button className="bg-green-600 hover:bg-green-700 text-white gap-2" onClick={handleSaveEdit}>
                                    <Save size={18} /> Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Modal */}
                {isDeleteModalOpen && currentShipment && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                            <div className="p-6 text-center">
                                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Trash2 size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Delete Shipment?</h3>
                                <p className="text-slate-500 text-sm mb-6">
                                    Are you sure you want to delete shipment <span className="font-mono font-bold text-slate-700">{currentShipment.trackingId}</span>? This action cannot be undone.
                                </p>
                                <div className="flex gap-3 justify-center">
                                    <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
                                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={confirmDelete}>
                                        Yes, Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

// Helper Components
const NavItem = ({ icon: Icon, label, active }) => (
    <a
        href="#"
        className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group font-medium",
            active
                ? "bg-green-800 text-white shadow-lg shadow-green-900/20"
                : "text-green-100 hover:bg-green-800/50 hover:text-white"
        )}
    >
        <Icon size={20} className={cn("transition-colors", !active && "text-green-300 group-hover:text-white")} />
        <span>{label}</span>
    </a>
);

const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow bg-white flex items-center justify-between">
        <div>
            <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
        </div>
        <div className={cn("p-3 rounded-xl", colorClass)}>
            <Icon size={24} />
        </div>
    </Card>
);

const StatusBadge = ({ status }) => {
    let styles = "";
    switch (status) {
        case 'Delivered': styles = "bg-green-100 text-green-700 border-green-200"; break;
        case 'In Transit': styles = "bg-blue-100 text-blue-700 border-blue-200"; break;
        case 'Pending': styles = "bg-yellow-100 text-yellow-700 border-yellow-200"; break;
        case 'Cancelled': styles = "bg-red-100 text-red-700 border-red-200"; break;
        default: styles = "bg-slate-100 text-slate-700 border-slate-200";
    }

    return (
        <span className={cn("px-3 py-1 rounded-full text-xs font-semibold border", styles)}>
            {status}
        </span>
    );
};

export default AdminDashboard;
