'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

export default function Services() {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  const peopleGroups = [
    { title: 'Midnight Fortune Tellers', image: 'midnight-fortune-tellers.jpg' },
    { title: 'Gypsies', image: 'gypsies.jpg' },
    { title: 'Bamboo Dancers', image: 'bamboo-dancers.jpg' },
    { title: 'Boom Boom Cow Fortune Tellers', image: 'boom-boom-cow.jpg' },
    { title: 'Rope Performers', image: 'rope-performers.jpg' },
    { title: 'Natural Medicine Sellers', image: 'natural-medicine.jpg' },
    { title: 'Hill Tribes (Lambadis)', image: 'lambadis.jpg' },
    { title: 'Street Actors', image: 'street-actors.jpg' },
    { title: 'Historical Dancers', image: 'historical-dancers.jpg' },
    { title: 'Vessel Cleaners with Lids', image: 'vessel-cleaners.jpg' },
    { title: 'Parrot Fortune Tellers', image: 'parrot-tellers.jpg' },
    { title: 'Stone Carriers', image: 'stone-carriers.jpg' },
    { title: 'Basket Makers', image: 'basket-makers.jpg' },
    { title: 'Doll Dancers', image: 'doll-dancers.jpg' },
    { title: 'Bird Catchers', image: 'bird-catchers.jpg' },
    { title: 'Mountain Dwellers (Palliars)', image: 'palliars.jpg' },
    { title: 'Circus Communities', image: 'circus.jpg' },
    { title: 'Doll Makers', image: 'doll-makers.jpg' },
    { title: 'Stone Grinder Repairers', image: 'grinder-repair.jpg' },
    { title: 'Tribal Hunters', image: 'hunters.jpg' },
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5 animate__animated animate__fadeInDown">
        <h1 className="display-5 fw-bold">Our Services</h1>
        <p className="text-muted">
          We serve India's most vulnerable communities by providing access to education, shelter, and dignity.
        </p>
      </div>

      {/* Service Cards */}
      <div className="row g-4">
        {peopleGroups.map((group, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card shadow-sm border-0 h-100 transition-hover animate__animated animate__fadeInUp">
              <img
                src={`/services/${group.image}`}
                className="card-img-top"
                alt={group.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{group.title}</h5>
                <p className="card-text small text-muted">
                  We bring hope and transformation to this community through targeted outreach and care.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
