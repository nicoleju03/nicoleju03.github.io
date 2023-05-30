import React from 'react';
import { CRS, LatLngBounds } from 'leaflet';
import { MapContainer, ImageOverlay, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './Interactive.css';

import magnifyingGlass from './Images/magnifying-glass.png';

function MyMap() {
  const bounds = new LatLngBounds(
    [34.0689, -118.4452], // Southwestern coordinate
    [34.0789, -118.4352] // Northeastern coordinate
  );

  return (
    <div id="map-container" style={{ height: '600px', width: '100%' }}>
      <MapContainer
        crs={CRS.Simple}
        bounds={bounds}
        style={{ height: '100%', width: '100%' }}
        container="map-container"
      >
        <ImageOverlay url={magnifyingGlass} bounds={bounds} />
        <Marker position={[34.0689, -118.4452]} />
      </MapContainer>
    </div>
  );
}

export default MyMap;
