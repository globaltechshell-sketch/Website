'use client';

import { motion } from 'framer-motion';

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <h1 className="hero-title pt-10 text-center">Our <span className="gradient-text">Services</span></h1>
                <p className="hero-subtitle text-center mb-8">We deliver end-to-end digital solutions powered by AI to elevate your organization's online presence.</p>

                <motion.div
                    className="mt-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="card landscape-card">
                        <div className="landscape-card-img">
                            <img src="/web_development.png" alt="Web Development" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, transparent, var(--bg-secondary))' }}></div>
                        </div>
                        <div className="landscape-card-content">
                            <h3 className="feature-title" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Web Development</h3>
                            <p className="feature-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>We build lightning-fast, secure, and modern web applications. From corporate landing pages to complex e-commerce platforms, our AI-integrated approach ensures scalability and top-tier performance.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="card landscape-card">
                        <div className="landscape-card-content" style={{ order: typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 1 }}>
                            <h3 className="feature-title" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>App Development</h3>
                            <p className="feature-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>Engage your audience with cross-platform and native mobile apps for iOS and Android. Our applications are built for speed, offline capabilities, and deep system integration.</p>
                        </div>
                        <div className="landscape-card-img" style={{ order: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2 }}>
                            <img src="/app_development.png" alt="App Development" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
                            <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', background: 'linear-gradient(to left, transparent, var(--bg-secondary))' }}></div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="card landscape-card">
                        <div className="landscape-card-img">
                            <img src="/ui_ux_design.png" alt="UI/UX Designing" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, transparent, var(--bg-secondary))' }}></div>
                        </div>
                        <div className="landscape-card-content">
                            <h3 className="feature-title" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>UI/UX Designing</h3>
                            <p className="feature-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>We deliver premium design services utilizing industry platforms like Figma and Canva. We craft wireframes, prototypes, and final pixel-perfect assets to ensure your user journeys are flawless.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="card landscape-card">
                        <div className="landscape-card-content" style={{ order: typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 1 }}>
                            <h3 className="feature-title" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Digital Marketing</h3>
                            <p className="feature-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>We help small and medium organizations promote and market their business. From social media campaigns to deep SEO and analytics tracing, we scale your online presence predictably.</p>
                        </div>
                        <div className="landscape-card-img" style={{ order: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2 }}>
                            <img src="/digital_marketing.png" alt="Digital Marketing" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
                            <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', background: 'linear-gradient(to left, transparent, var(--bg-secondary))' }}></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
