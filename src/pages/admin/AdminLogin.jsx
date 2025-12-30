import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Lock, User } from 'lucide-react';
import { Button } from '../../components/ui/Button'; // Assuming we have this
import { Card } from '../../components/ui/Card';     // Assuming we have this

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Mock Authentication
        setTimeout(() => {
            if (username === 'admin' && password === 'admin123') {
                // Store auth token (mock)
                localStorage.setItem('authToken', 'mock-token-12345');
                navigate('/admin');
            } else {
                setError('Invalid credentials. Please try again.');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-8 border-t-4 border-t-green-600 shadow-xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
                        <Truck size={32} className="text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Admin Portal</h1>
                    <p className="text-slate-500 mt-2">Sign in to manage shipments</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Username</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </Button>
                </form>

                <div className="mt-6 text-center text-xs text-slate-400">
                    <p>Secured Access • Ahsan Air Logistic</p>
                </div>
            </Card>
        </div>
    );
};

export default AdminLogin;
