import React from 'react';
import '../styles/Filter.css';

export default function Filter() {
  return (
    <div className="filter-container">
      <h1>Show me cat breeds that are</h1>
      <div className="filter-flex">
        <select>
          <option value='' defaultValue>this coat</option>
          <option value='short'>Short</option>
          <option value='medium'>Medium</option>
          <option value='semi'>Semi-Long</option>
          <option value='long'>Long</option>
          <option value='rex'>Rex</option>
          <option value='hairless'>Hairless</option>
        </select>
        <p>and<br /><br />or</p>
        <select>
          <option value='' defaultValue>this pattern</option>
          <option value='solid'>Solid</option>
          <option value='spot'>Spotted</option>
          <option value='tick'>Ticked</option>
          <option value='tabby'>Tabby</option>
          <option value='colorpoint'>Colorpoint</option>
          <option value='bi'>Bi-Color</option>
          <option value='tri'>Tri-Color</option>
          <option value='mackerel'>Mackerel</option>
          <option value='marble'>Marbled</option>
          <option value='mink'>Mink</option>
          <option value='van'>Van</option>
        </select>
      </div>
    </div>
  )
}
