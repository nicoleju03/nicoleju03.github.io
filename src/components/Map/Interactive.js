import React from 'react';
import { CRS, LatLngBounds } from 'leaflet';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './Interactive.css';

import magnifyingGlass from './Images/magnifying-glass.png';

function MyMap() {
  const bounds = new LatLngBounds(
    [34.0689, -118.4452], // Southwestern coordinate
    [34.0789, -118.4352] // Northeastern coordinate
  );

  const imageWidth = 4500; // Width of the magnifying glass image in pixels
  const imageHeight = 4500; // Height of the magnifying glass image in pixels

  const markerPositionX = 0.5; // Fractional X coordinate of the marker (0.0 to 1.0)
  const markerPositionY = 0.5; // Fractional Y coordinate of the marker (0.0 to 1.0)

  const markerLatitude = bounds.getSouth() + (markerPositionY * (bounds.getNorth() - bounds.getSouth()));
  const markerLongitude = bounds.getWest() + (markerPositionX * (bounds.getEast() - bounds.getWest()));

  const markerPosition = [markerLatitude, markerLongitude];

  return (
    <div id="map-container" style={{ height: '600px', width: '100%' }}>
      <MapContainer
        crs={CRS.Simple}
        bounds={bounds}
        style={{ height: '100%', width: '100%' }}
        container="map-container"
      >
        <ImageOverlay url={magnifyingGlass} bounds={bounds} />
        <Marker position={markerPosition}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MyMap;
