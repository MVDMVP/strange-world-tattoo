import './Studio.css';
import StudioMap from './StudioMap';
import '../../shared/data-display.css';

const Studio = () => {

  return (
    <div className='studio'>
      <div className="head">
        <h2>OUR STUDIO</h2>
        <p>Conveniently located in the NW community of Varsity and within walking distance of the Dalhousie c-train station</p>
      </div>

      
      <div className="body">
        
        <div className="text">
          <h3>Strange World Tattoo</h3>
          <p>5403 Crowchild Trail NW #103, Calgary, AB T3B 4Z1</p>
          <br />
          <p>Open Tuesday - Saturday from 10am-6pm</p>
          <p>Closed Sunday, Monday and most holidays</p>
        </div>

        <div className="map-container">
          <StudioMap />
        </div>
      </div>
    </div>
  );
};

export default Studio;