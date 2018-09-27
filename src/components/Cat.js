import React from 'react';
import '../styles/Cat.css';
import catImg from '../assets/img/cat.png';

export default function Cat(props) {
  return (
    <div className="cat-container">
      <div className="cat-portrait-bg">
        <img src={catImg} className="cat-portrait" alt="image of cat" />
      </div>
      <h2>{props.catDetail.breed}</h2>
      <p>{props.catDetail.country}</p>
    </div>
  )
}
