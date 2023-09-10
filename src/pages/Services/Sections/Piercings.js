import React from "react";

const Piercings = () => {
  return (
    <div className="category">
      <div className="head"> <h2>PIERCINGS</h2></div>

      <div className="group">
        <div className="left">
          <h3>EARS - FOR PAIR</h3>
          <p>Lobes</p>
        </div>
        <div className="right">
          <p>$70+ tax</p>
        </div>
      </div>

      <div className="group">
          <div className="left">
            <h3>EARS - EACH</h3>
            <p>Cartilage, Helix, Tragus, etc</p>
          </div>
          <div className="right">
            <p>$80+ tax</p>
          </div>
        </div>

      <div className="group">
        <div className="left">
          <h3>BODY</h3>
          <p>Navel</p>
        </div>
        <div className="right">
          <p>$75+ tax</p>
        </div>
      </div>

      <div className="group">
        <div className="left">
          <h3>FACE</h3>
          <p>Nose</p>
        </div>
        <div className="right">
          <p>$60+ tax</p>
        </div>
      </div>
    </div>
  );
};
export default Piercings;