import React from "react";

const Piercings = () => {
  return(
    <div className="category">
        <div className="head"> <h2>PIERCINGS</h2></div>

        <div className="group">
          <div className="left">
            <h4>EARS - FOR PAIR</h4>
            <p>Lobe, Cartilage, Helix, Tragus, etc</p>
          </div>
          <div className="right">
            <p>$70+ tax</p>
          </div>
        </div>

        <div className="group">
          <div className="left">
            <h4>BODY</h4>
            <p>Navel</p>
          </div>
          <div className="right">
            <p>$75+ tax</p>
          </div>
        </div>

        <div className="group">
          <div className="left">
            <h4>FACE</h4>
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