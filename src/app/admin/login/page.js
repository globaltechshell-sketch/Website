'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiLock, FiMail, FiArrowRight } from 'react-icons/fi';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function AdminLogin() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/login`, formData);
            if (res.data) {
                // Check if user is actually admin
                if (res.data.user.role !== 'admin') {
                    toast.error('Access Denied. You are not an admin.');
                    setLoading(false);
                    return;
                }

                toast.success('Admin Login Successful!');
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setTimeout(() => {
                    router.push('/dashboard');
                }, 1000);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Toaster position="top-right" />
            <div className="card" style={{ maxWidth: '440px', width: '100%', padding: '2.5rem', border: '1px solid var(--glass-border)', background: 'linear-gradient(135deg, rgba(2, 6, 23, 0.8), rgba(15, 23, 42, 0.8))' }}>
                <div className="text-center mb-8">
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                        <FiLock size={20} />
                    </div>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Admin <span className="gradient-text">Portal</span></h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Secure access for administrators only.</p>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '8px', color: 'var(--text-primary)' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '14px', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                                <FiMail size={16} />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="admin@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'rgba(2, 6, 23, 0.5)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.2s', fontSize: '0.95rem' }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-light)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                            />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>Password</label>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '14px', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                                <FiLock size={16} />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'rgba(2, 6, 23, 0.5)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.2s', fontSize: '0.95rem' }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-light)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                            />
                        </div>
                    </div>

                    <button className="btn-primary" type="submit" disabled={loading} style={{ width: '100%', marginTop: '8px', padding: '14px', opacity: loading ? 0.7 : 1 }}>
                        {loading ? 'Authenticating...' : <><>Secure Login</> <FiArrowRight /></>}
                    </button>
                </form>
            </div>
        </div>
    );
}
