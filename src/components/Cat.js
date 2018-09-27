import React from 'react';
import '../styles/Cat.css';
import catImg from '../assets/img/cat.png';

export default function Cat(props) {
  return (
    <div className="cat-container">
      <div className="cat-portrait-bg">
        <img src={catImg} className="cat-portrait" alt="image of cat" />
        {(props.catDetail.origin.toLowerCase() === "crossbreed" || props.catDetail.origin.toLowerCase() === 'mutation') &&
          <div className="glyph-bg">
            {props.catDetail.origin.toLowerCase() === "mutation" && <i className="fal fa-dna"></i>}
            {props.catDetail.origin.toLowerCase() === "crossbreed" && <i className="fas fa-adjust"></i>}
          </div>
        }
      </div>
      <h2>{props.catDetail.breed}</h2>
      <p>{props.catDetail.country}</p>
    </div>
  )
}
