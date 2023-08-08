import React, {useEffect, useState} from 'react';
import { GOOGLE_MAPS_API_KEY } from '../../config.js'
import { GoogleMap, Marker } from "@react-google-maps/api";


const StudioMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const center = {
    lat: 43.44031222422944,
    lng: -79.67459180990829
  };


  return(
    <div></div>
  );
}

export default StudioMap