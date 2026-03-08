export default function About() {
    return (
        <div className="section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="text-center mb-8">
                    <span className="hero-tag">Who We Are</span>
                    <h1 className="hero-title">About <span className="gradient-text">GlobalTechShell</span></h1>
                    <p className="hero-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Transforming bold ideas into scalable digital realities through intelligent architectures and creative designs.
                    </p>
                </div>

                {/* Main Content Area */}
                <div className="grid-2-cols" style={{ gap: '3rem', marginTop: '4rem', alignItems: 'stretch' }}>

                    {/* Mission Card */}
                    <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '40px' }}>
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--accent)', opacity: '0.1', borderRadius: '50%', filter: 'blur(30px)' }}></div>
                        <h3 className="feature-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Our <span className="gradient-text">Mission</span></h3>
                        <p className="feature-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            Our mission is to empower growth and streamline business logic through innovative technology. We specialize in robust, high-performance web applications, dynamic mobile applications, beautiful UI/UX structures created via Figma and Canva, and impactful Digital Marketing pipelines designed to help small organizations promote and market themselves natively on global fronts.
                        </p>
                    </div>

                    {/* Image Area */}
                    <div className="card" style={{ padding: '0', overflow: 'hidden', minHeight: '300px', position: 'relative' }}>
                        <img src="/web_development.png" alt="Our Workspace Team" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(2, 6, 23, 0.7), rgba(37, 99, 235, 0.4))' }}></div>
                        <div style={{ position: 'relative', zIndex: 10, padding: '40px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '10px' }}>Engineering The Future</h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Bridging the gap between conceptual logic and market reality.</p>
                        </div>
                    </div>
                </div>

                {/* Values & Approach Area */}
                <div style={{ marginTop: '5rem' }}>
                    <div className="text-center mb-8">
                        <h2 style={{ fontSize: '2.2rem' }}>Our <span className="gradient-text">Core Approach</span></h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="card" style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.9))', borderColor: 'rgba(56, 189, 248, 0.2)' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--accent-light)' }}>
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="feature-title" style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>AI-First Iteration</h3>
                            <p className="feature-desc" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                                We stand alongside modern enterprises by adopting an AI-integrated approach across our engineering lifecycles. Our solutions consistently leverage automation and deep intelligence metrics to drive efficiency, enhance security, and deploy robust digital landscapes.
                            </p>
                        </div>

                        <div className="card" style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.9))', borderColor: 'rgba(56, 189, 248, 0.2)' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--accent-light)' }}>
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                            </div>
                            <h3 className="feature-title" style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Scalable Architecture</h3>
                            <p className="feature-desc" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                                Built on flexible, modular architecture ensuring your business applications evolve organically without encountering harsh operational bottlenecks as you grow.
                            </p>
                        </div>

                        <div className="card" style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.9))', borderColor: 'rgba(56, 189, 248, 0.2)' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--accent-light)' }}>
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="feature-title" style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Human-Centric Design</h3>
                            <p className="feature-desc" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                                We prioritize human psychology and conversion funnels over blindly stacked metrics, ensuring that UI strategies bring direct conversions from your target audiences.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
