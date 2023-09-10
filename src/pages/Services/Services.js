import React from 'react';
import '../../shared/data-display.css';
import Tattoos from './Sections/Tattoos';
import Piercings from './Sections/Piercings';


const Services = () => {
  return (
    <div className="data-display">
      <div className="category">
        <div className="head">
          <h2>OUR SERVICES</h2>
        </div>
        <div className="fill">
          <p>Visit our <strong>PROCESS</strong> page to learn all about our tattooing process; from start-to-finish </p>
          <p>While walk-in appointments are welcome, we cannot guarantee availability - call first</p>
          <p>Click <strong>BOOK NOW</strong> at the top-right to start booking any appointment</p>
        </div>
      </div>

      <Tattoos />
      <Piercings />
    </div>
  );
};

export default Services;