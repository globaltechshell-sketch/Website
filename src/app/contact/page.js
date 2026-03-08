'use client';

import { useState } from 'react';
import { FiMail, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact`, formData);
            if (res.status === 201) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to send message.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: '120px' }}>
            <Toaster position="top-right" />
            <div className="container">
                <div className="text-center mb-8">
                    <span className="hero-tag">Connect With Us</span>
                    <h1 className="hero-title">Get in <span className="gradient-text">Touch</span></h1>
                    <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>

                <div className="grid-2-cols" style={{ gap: '4rem', marginTop: '3rem', alignItems: 'flex-start' }}>

                    {/* Contact Form */}
                    <div className="card" style={{ padding: '40px', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.9))' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Send us a message</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', color: 'white', outline: 'none' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-light)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@company.com"
                                    required
                                    style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', color: 'white', outline: 'none' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-light)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    rows="5"
                                    required
                                    style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', color: 'white', resize: 'vertical', outline: 'none', fontFamily: 'inherit' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-light)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                ></textarea>
                            </div>

                            <button className="btn-primary" type="submit" disabled={loading} style={{ marginTop: '10px', padding: '14px', fontSize: '1rem', opacity: loading ? 0.7 : 1 }}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Reach out directly</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                We are actively available monitoring our direct communications. Reach out through LinkedIn or send us an email to get an immediate response from one of our executives.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href="mailto:globaltechshell@gmail.com" className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)' }}>
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '4px' }}>Email Us</p>
                                    <p style={{ fontSize: '1.05rem', fontWeight: '500', color: 'white' }}>globaltechshell@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/company/globaltechshell" target="_blank" rel="noreferrer" className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                    <FiLinkedin size={24} />
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '4px' }}>LinkedIn</p>
                                    <p style={{ fontSize: '1.05rem', fontWeight: '500', color: 'white' }}>GlobalTechShell</p>
                                </div>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
