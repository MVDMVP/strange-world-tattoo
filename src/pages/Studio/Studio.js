import React, {useEffect, useState} from 'react';
import './Studio.css';
import StudioMap from './StudioMap';

const Studio = () => {
  return (
    <div className='studio'>
      <div className="text">
        <h2>OUR STUDIO</h2>
        <h3>The Golden Pearl</h3>
        <p>7C-77 Lakeshore Rd West<br/>Oakville, ON L6K 1C9</p>
        <br />
        <p>Open Tuesday - Saturday | 12pm-8pm</p>
        <p>Closed Sunday and Monday</p>
        <p>Closed Friday during holiday weekends</p>
      </div>

      <div className="map-container">
        <StudioMap />
      </div>
    </div>
  );
};

export default Studio;