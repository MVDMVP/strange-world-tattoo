import React from 'react';
import Prebooking from './Sections/Prebooking';
import Booking from './Sections/Booking';
import Preparation from './Sections/Preparation';
import Aftercare from './Sections/Aftercare';
import Touchups from './Sections/Touchups';
import './Process.css'


const Process = () => {
  return (
    <div className='process'>
      <Prebooking />
      <Booking />
      <Preparation />
      <Aftercare />
      <Touchups />
    </div>
  );
};

export default Process;
