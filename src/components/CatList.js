import React from 'react';
import '../styles/CatList.css';
import Cat from './Cat';

export default function CatList(props) {
  return (
    <div className="catlist-container">
      <h1>Your Results:</h1>
      <div className="catlist-grid">
        {props.catResults.map(function(obj,i) {
          return <Cat catDetail={obj} key={i} />;
        })}
      </div>
    </div>
  )
}
