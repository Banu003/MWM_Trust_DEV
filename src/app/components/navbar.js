'use client';

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
  return (
    <nav className="navbar bg-light px-4 py-2 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <img src="/trust-logo.png" alt="Logo" width="30" height="30" className="me-2" />
          MWM Trust
        </Link>

        {/* Nav Links */}
        <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
          <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
        </ul>

        {/* Social & Donate */}
        <div className="d-flex align-items-center gap-3">
          <a href="#" className="text-dark"><i className="bi bi-whatsapp fs-5"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-facebook fs-5"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-instagram fs-5"></i></a>
          <Link href="/donate" className="btn btn-primary btn-sm">Donate</Link>
        </div>
      </div>
    </nav>
  );
}
