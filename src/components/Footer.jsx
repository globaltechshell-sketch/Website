'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Note: Update backend `/api/newsletter` route if it doesn't already exist
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/newsletter/subscribe`, { email });
            toast.success('Subscribed to newsletter!');
            setEmail('');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to subscribe');
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="footer">
            <Toaster position="bottom-right" />
            <div className="container">
                <div className="footer-content" style={{ gridTemplateColumns: '2fr 1fr 1fr 1.5fr' }}>
                    <div className="footer-brand">
                        <Link href="/" className="nav-logo">
                            <div style={{ position: 'relative', width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                                <img src="/Website/GTS Logo.png" alt="GlobalTechShell Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            GlobalTechShell
                        </Link>
                        <p>Empowering global enterprises and small organizations with AI-integrated web and app development, UI/UX design, and digital marketing.</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/globaltechshell" target="_blank" rel="noreferrer" className="social-link"><FiLinkedin size={18} /></a>
                            <a href="mailto:globaltechshell@gmail.com" className="social-link"><FiMail size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Capabilities</h4>
                        <ul>
                            <li><Link href="/services">Web & App Development</Link></li>
                            <li><Link href="/services">UI/UX Design</Link></li>
                            <li><Link href="/services">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Newsletter</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6' }}>Subscribe to get the latest updates on AI integrations and development tips.</p>
                        <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ flex: 1, padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                            />
                            <button type="submit" disabled={loading} style={{ background: 'var(--accent-gradient)', color: 'white', border: 'none', borderRadius: '6px', padding: '0 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                                <FiArrowRight />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p>&copy; {new Date().getFullYear()} GlobalTechShell. All rights reserved.</p>
                    <Link href="/admin/login" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none', padding: '5px 10px', borderRadius: '4px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)' }}>
                        Admin Portal
                    </Link>
                </div>
            </div>
        </footer>
    );
}
