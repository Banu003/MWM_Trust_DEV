'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'animate.css';

export default function HomePage() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators (dots) */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="hand_hold.jpg" className="d-block w-100" alt="Slide 1" style={{ maxHeight: "600px", objectFit: "cover" }} />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
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

        <div className="carousel-item">
          <img src="help_others.jpg" className="d-block w-100" alt="Slide 2" style={{ maxHeight: "600px", objectFit: "cover" }} />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
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

        <div className="carousel-item">
          <img src="team_spirit.jpg" className="d-block w-100" alt="Slide 3" style={{ maxHeight: "600px", objectFit: "cover" }} />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
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
      </div>

      {/* Controls (arrows) */}
      <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
