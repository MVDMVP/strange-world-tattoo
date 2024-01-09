import React, {useEffect, useState} from 'react';
import { GOOGLE_MAPS_API_KEY } from '../../config.js'
import { GoogleMap, Marker } from "@react-google-maps/api";


const StudioMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const center = {
    lat: 43.44031222422944,
    lng: -79.67459180990829
  };

  return (
    <div>
      <iframe className='map'
        title="Studio Map"
        width="600"
        height="450"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=51.103677077763074,-114.16574309964214&zoom=17`}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default StudioMap