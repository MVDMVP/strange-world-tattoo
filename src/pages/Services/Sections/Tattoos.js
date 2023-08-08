import React from 'react';

const Tattoos = () => {
  return (
    <div className="category">
    <div className="head"> <h2>TATTOOS</h2> <h3>PRICING</h3></div>
    <div className="group">
      <div className="left">
        <h3>TATTOO</h3>
        <p>Personalized and fully customizable, designed to bring your vision to life</p>
        <p>Includes <strong>one complimentary touchup</strong> - conditions apply</p>
      </div>
      <div className="right">
        <p>VARIES</p>
      </div>
    </div>

    <div className="group">
      <div className="left">
        <h3>IN-PERSON CONSULTATION</h3>
        <p>Personalized recommendations, expert guidance</p>
      </div>
      <div className="right">
        <p>FREE</p>
      </div>
    </div>

    <div className="group">
      <div className="left">
        <h3>TOUCHUP</h3>
        <p>Give your tattoo at <strong>LEAST</strong> 2 months to heal first! - conditions apply</p>
      </div>
      <div className="right">
        <p>FREE / VARIES</p>
      </div>
    </div>
  </div>
  );
};

export default Tattoos;