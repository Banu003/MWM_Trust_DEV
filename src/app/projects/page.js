'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

export default function Projects() {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  const activities = [
    {
      title: 'Free Clothing Distribution',
      icon: 'bi bi-bag-heart',
      desc: 'Distributed free clothes to underprivileged families during Thai Pongal festival.',
    },
    {
      title: 'Sports & Games Events',
      icon: 'bi bi-trophy',
      desc: 'Organized competitions like kabaddi, chess, and sack jump to engage youth.',
    },
    {
      title: 'Free Medical Camp',
      icon: 'bi bi-hospital',
      desc: 'Conducted health check-ups and distributed free medicine to villagers.',
    },
    {
      title: 'Cultural Celebrations',
      icon: 'bi bi-music-note-beamed',
      desc: 'Held traditional dance, music, and song competitions to promote culture.',
    },
    {
      title: 'Adult Literacy Programs',
      icon: 'bi bi-journal-check',
      desc: 'Taught illiterate adults to read, sign documents, and vote responsibly.',
    },
    {
      title: 'Christmas Feeding Program',
      icon: 'bi bi-gift',
      desc: 'Shared meals and gifts with the needy during the Christmas celebration.',
    },
    {
      title: 'Community Service & Thanks',
      icon: 'bi bi-people',
      desc: 'Thanked auditors, pastors, and volunteers who support our vision.',
    },
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5 animate__animated animate__fadeInDown">
        <h1 className="display-5 fw-bold">Our Projects</h1>
        <p className="text-muted">From empowerment to compassion — here’s how MWM Trust is uplifting lives.</p>
      </div>

      {/* Activity Cards */}
      <div className="row g-4">
        {activities.map((act, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card shadow-sm border-0 h-100 text-center p-3 transition-hover animate__animated animate__fadeInUp">
              <div className="text-primary mb-3">
                <i className={`${act.icon} fs-1`}></i>
              </div>
              <h5 className="card-title">{act.title}</h5>
              <p className="card-text">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
