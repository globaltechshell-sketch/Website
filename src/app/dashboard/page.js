'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FiUsers, FiMail, FiMessageSquare, FiActivity, FiTrash2, FiLogOut } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [stats, setStats] = useState({ users: 0, newsletters: 0, services: 0, contacts: 0 });
    const [contacts, setContacts] = useState([]);
    const [newsletters, setNewsletters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        if (!token || !userData) {
            router.push('/admin/login');
            return;
        }

        const parsedUser = JSON.parse(userData);
        if (parsedUser.role !== 'admin') {
            router.push('/admin/login');
            return;
        }

        setUser(parsedUser);
        fetchDashboardData(token);
    }, []);

    const fetchDashboardData = async (token) => {
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };

            // Fetch stats and contacts in parallel
            const [statsRes, contactsRes, newslettersRes] = await Promise.all([
                axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/stats`, config),
                axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/contacts`, config),
                axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/newsletter`, config)
            ]);

            setStats(statsRes.data);
            setContacts(contactsRes.data);
            setNewsletters(newslettersRes.data);
            setLoading(false);
        } catch (error) {
            console.error("Dashboard error:", error);
            if (error.response?.status === 401) {
                handleLogout();
            } else {
                toast.error('Failed to load dashboard data');
                setLoading(false);
            }
        }
    };

    const handleDeleteContact = async (id) => {
        if (!window.confirm('Are you sure you want to delete this message?')) return;

        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };

            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/contacts/${id}`, config);

            // Filter state immediately so user sees immediate feedback
            setContacts(contacts.filter(c => c._id !== id));
            setStats(prev => ({ ...prev, contacts: prev.contacts - 1 }));
            toast.success('Message deleted securely');
        } catch (error) {
            toast.error('Failed to delete message');
        }
    };

    const handleDeleteNewsletter = async (id) => {
        if (!window.confirm('Are you sure you want to remove this subscriber?')) return;

        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };

            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/newsletter/${id}`, config);

            // Filter state immediately
            setNewsletters(newsletters.filter(n => n._id !== id));
            setStats(prev => ({ ...prev, newsletters: prev.newsletters - 1 }));
            toast.success('Subscriber removed');
        } catch (error) {
            toast.error('Failed to remove subscriber');
        }
    };

    const handleExportCSV = () => {
        if (newsletters.length === 0) {
            toast.error('No subscribers to export.');
            return;
        }

        const headers = ['Email,Subscribed Date\n'];
        const csvData = newsletters.map(sub => `${sub.email},${new Date(sub.createdAt).toLocaleDateString()}`).join('\n');

        const blob = new Blob([headers + csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'newsletter_subscribers.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/admin/login');
    };

    if (loading) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '40px', height: '40px', border: '3px solid rgba(56, 189, 248, 0.2)', borderTopColor: 'var(--accent-light)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <style jsx>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div className="section" style={{ minHeight: '100vh', paddingTop: '100px', background: 'var(--bg-color)' }}>
            <Toaster position="top-right" />

            {/* Sidebar / Header Combo */}
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem' }}>Welcome, <span className="gradient-text">{user?.name}</span></h1>
                        <p style={{ color: 'var(--text-secondary)' }}>GlobalTechShell Administrative Portal</p>
                    </div>
                    <button onClick={handleLogout} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem', borderColor: 'rgba(239, 68, 68, 0.4)', color: '#ef4444' }}>
                        <FiLogOut /> Logout
                    </button>
                </div>

                {/* Stats Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div className="card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)' }}>
                            <FiMessageSquare size={24} />
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Total Messages</p>
                            <h3 style={{ fontSize: '1.8rem', lineHeight: '1' }}>{stats.contacts}</h3>
                        </div>
                    </div>
                    <div className="card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e' }}>
                            <FiMail size={24} />
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Newsletter Subs</p>
                            <h3 style={{ fontSize: '1.8rem', lineHeight: '1' }}>{stats.newsletters}</h3>
                        </div>
                    </div>
                </div>

                {/* Main Content Area - Messages */}
                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FiMessageSquare color="var(--accent-light)" /> Client Messages
                        </h2>
                    </div>

                    {contacts.length === 0 ? (
                        <div className="card text-center" style={{ padding: '60px 20px', background: 'rgba(255,255,255,0.02)', borderStyle: 'dashed' }}>
                            <FiMessageSquare size={48} color="var(--text-muted)" style={{ margin: '0 auto 20px', opacity: '0.5' }} />
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>No new messages from clients.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                            {contacts.map((contact) => (
                                <div key={contact._id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '4px' }}>{contact.name}</h4>
                                            <a href={`mailto:${contact.email}`} style={{ color: 'var(--accent-light)', fontSize: '0.85rem' }}>{contact.email}</a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>
                                                {new Date(contact.createdAt).toLocaleDateString()}
                                            </span>
                                            <button
                                                onClick={() => handleDeleteContact(contact._id)}
                                                style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', opacity: 0.7, transition: 'opacity 0.2s' }}
                                                onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                                                onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
                                            >
                                                <FiTrash2 /> Delete
                                            </button>
                                        </div>
                                    </div>

                                    <div style={{ flex: 1, background: 'rgba(2, 6, 23, 0.5)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                                        <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.6', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                            {contact.message}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Newsletter Area */}
                <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FiMail color="var(--accent-light)" /> Newsletter Subscribers
                        </h2>
                        <button onClick={handleExportCSV} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                            Export CSV
                        </button>
                    </div>

                    {newsletters.length === 0 ? (
                        <div className="card text-center" style={{ padding: '60px 20px', background: 'rgba(255,255,255,0.02)', borderStyle: 'dashed' }}>
                            <FiMail size={48} color="var(--text-muted)" style={{ margin: '0 auto 20px', opacity: '0.5' }} />
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>No subscribers yet.</p>
                        </div>
                    ) : (
                        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 150px 100px', padding: '16px 24px', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--glass-border)', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                                <div>Email Address</div>
                                <div>Date Subscribed</div>
                                <div style={{ textAlign: 'right' }}>Actions</div>
                            </div>

                            {newsletters.map((sub) => (
                                <div key={sub._id} style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 150px 100px', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.02)', alignItems: 'center' }}>
                                    <div style={{ color: 'white', fontSize: '0.95rem' }}>{sub.email}</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{new Date(sub.createdAt).toLocaleDateString()}</div>
                                    <div style={{ textAlign: 'right' }}>
                                        <button
                                            onClick={() => handleDeleteNewsletter(sub._id)}
                                            style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '6px', fontSize: '1.2rem', opacity: 0.7, transition: 'opacity 0.2s' }}
                                            onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                                            onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
                                            title="Remove subscriber"
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
