'use client';

import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiLayout, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <>
      <section className="hero" style={{ position: 'relative' }}>
        {/* Background Image Carousel */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
          <img src="/Website/web_development.png" alt="Web Development" className="hero-carousel-img" style={{ animationDelay: '0s' }} />
          <img src="/Website/app_development.png" alt="App Development" className="hero-carousel-img" style={{ animationDelay: '4s' }} />
          <img src="/Website/ui_ux_design.png" alt="UI UX Design" className="hero-carousel-img" style={{ animationDelay: '8s' }} />
          <img src="/Website/digital_marketing.png" alt="Digital Marketing" className="hero-carousel-img" style={{ animationDelay: '12s' }} />

          {/* Gradient Overlays to ensure text readability */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.4) 0%, rgba(2, 6, 23, 1) 100%)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 0%, rgba(2, 6, 23, 0.8) 100%)', zIndex: 1 }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            className="hero-content text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="hero-tag">An AI-Integrated Technology Partner</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="hero-title">
              Empowering your business with <span className="gradient-text">intelligent solutions</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-subtitle">
              We specialize in Web & App Development, UI/UX Design, and Digital Marketing to help organizations grow, promote, and scale their businesses efficiently.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-btns">
              <Link href="/services" className="btn-primary">
                Explore Services <FiArrowRight />
              </Link>
              <Link href="/contact" className="btn-secondary">Consult an Expert</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-150px', left: '-100px', width: '400px', height: '400px', background: 'var(--accent-light)', opacity: '0.07', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: '100px', right: '-150px', width: '500px', height: '500px', background: 'var(--accent)', opacity: '0.08', borderRadius: '50%', filter: 'blur(100px)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="text-center mb-8">
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Our Professional Services</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              From initial design to final deployment and marketing, we provide full-cycle solutions tailored for startups and enterprises.
            </p>
          </div>

          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '2rem 0' }}>
            <motion.div
              style={{
                display: 'flex',
                gap: '2rem',
                width: 'max-content'
              }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 25,
                repeat: Infinity,
              }}
            >
              {[1, 2].map((groupIndex) => (
                <div key={groupIndex} style={{ display: 'flex', gap: '2rem' }}>

                  {/* Item 1 */}
                  <div className="card" style={{ padding: '0', overflow: 'hidden', width: '85vw', maxWidth: '350px', flexShrink: 0 }}>
                    <div style={{ width: '100%', height: '220px', position: 'relative', overflow: 'hidden' }}>
                      <img src="/web_development.png" alt="Web Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0) 100%)' }}></div>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <div className="feature-icon-wrapper" style={{ marginTop: '-40px', position: 'relative', zIndex: 10, background: 'var(--bg-color)', border: '1px solid var(--glass-border)' }}><FiMonitor /></div>
                      <h3 className="feature-title">Web Development</h3>
                      <p className="feature-desc">Robust and scalable web platforms integrated with the latest AI frameworks to streamline your digital operations securely.</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="card" style={{ padding: '0', overflow: 'hidden', width: '85vw', maxWidth: '350px', flexShrink: 0 }}>
                    <div style={{ width: '100%', height: '220px', position: 'relative', overflow: 'hidden' }}>
                      <img src="/app_development.png" alt="App Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0) 100%)' }}></div>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <div className="feature-icon-wrapper" style={{ marginTop: '-40px', position: 'relative', zIndex: 10, background: 'var(--bg-color)', border: '1px solid var(--glass-border)' }}><FiSmartphone /></div>
                      <h3 className="feature-title">App Development</h3>
                      <p className="feature-desc">Cross-platform and native mobile applications that offer seamless, intuitive experiences for iOS and Android users.</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="card" style={{ padding: '0', overflow: 'hidden', width: '85vw', maxWidth: '350px', flexShrink: 0 }}>
                    <div style={{ width: '100%', height: '220px', position: 'relative', overflow: 'hidden' }}>
                      <img src="/ui_ux_design.png" alt="UI/UX Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0) 100%)' }}></div>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <div className="feature-icon-wrapper" style={{ marginTop: '-40px', position: 'relative', zIndex: 10, background: 'var(--bg-color)', border: '1px solid var(--glass-border)' }}><FiLayout /></div>
                      <h3 className="feature-title">UI/UX Designing</h3>
                      <p className="feature-desc">Utilizing industry standards like Figma and Canva to craft stunning, pixel-perfect user interfaces and prototype structural designs.</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="card" style={{ padding: '0', overflow: 'hidden', width: '85vw', maxWidth: '350px', flexShrink: 0 }}>
                    <div style={{ width: '100%', height: '220px', position: 'relative', overflow: 'hidden' }}>
                      <img src="/digital_marketing.png" alt="Digital Marketing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0) 100%)' }}></div>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <div className="feature-icon-wrapper" style={{ marginTop: '-40px', position: 'relative', zIndex: 10, background: 'var(--bg-color)', border: '1px solid var(--glass-border)' }}><FiTrendingUp /></div>
                      <h3 className="feature-title">Digital Marketing</h3>
                      <p className="feature-desc">Helping small and medium organizations promote and market their business using data-driven pipelines and SEO strategies.</p>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2-cols">
          <div>
            <span className="hero-tag mb-4">Why GlobalTechShell</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Architected for <span className="gradient-text">Growth & Innovation</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
              We partner with forward-thinking organizations to build scalable digital presence. By integrating AI automation with handcrafted UI designs, we ensure that your product not only looks visually compelling but drives measurable business impact and user retention.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>100%</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Commitment to client satisfaction.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Next-Gen</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Deploying advanced AI integrations natively.</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(14, 165, 233, 0.05))', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--accent-light)', opacity: '0.1', borderRadius: '50%', filter: 'blur(50px)' }}></div>
            <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', background: 'var(--accent)', opacity: '0.1', borderRadius: '50%', filter: 'blur(50px)' }}></div>
            <div style={{ width: '150px', height: '150px', position: 'relative', zIndex: 10, borderRadius: '50%', overflow: 'hidden', background: 'white', padding: '10px' }}>
              <img src="/GTS Logo.png" alt="GTS Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
