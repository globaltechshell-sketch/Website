import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* Using the user's provided logo saved as public/logo.png */}
                    <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                        <img src="/Website/GTS Logo.png" alt="GlobalTechShell Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <span>Global Tech Shell</span>
                </Link>
                <div className="nav-links">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/services" className="nav-link">Services</Link>
                    <Link href="/projects" className="nav-link">Projects</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
