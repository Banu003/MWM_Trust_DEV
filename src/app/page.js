'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'animate.css';

export default function HomePage() {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  return (
    <div className="home-bg d-flex justify-content-center align-items-center text-dark text-center">

      <div className="p-4">
        <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">
          Welcome to MWM Trust
        </h1>
        <p className="lead animate__animated animate__fadeInUp">
          We uplift communities with education, care, and guidance — all under one trusted platform.
        </p>
        <a href="/about" className="btn btn-primary btn-lg mt-3 animate__animated animate__fadeInUp">
          Learn More
        </a>
      </div>
    </div>
  );
}
