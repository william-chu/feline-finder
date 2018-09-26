import React from 'react';
import '../styles/Legend.css';

export default function Header() {
  return (
    <div className="legend-container">
      <h1>Unique Breed Info</h1>
      <div className="legend-icon-flex">
        <div className="legend-icon-item-flex">
          <i className="fal fa-dna"></i>
          <p>Mutation</p>
        </div>
        <div className="legend-icon-item-flex">
          <i className="fas fa-adjust"></i>
          <p>Hybrid</p>
        </div>
      </div>
    </div>
  )
}
