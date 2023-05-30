import React from 'react';
import { CRS, LatLngBounds } from 'leaflet';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './Interactive.css';
import { basketball, bruincard, camera } from './Icons';
import magnifyingGlass from './Images/magnifying-glass.png';

function MyMap() {
  const bounds = new LatLngBounds(
    [34.0689, -118.4452], // Southwestern coordinate
    [34.0789, -118.4352] // Northeastern coordinate
  );

  const markerPositions = [
    {
      positionX: 0.2, // X coordinate relative to the image width (0.0 to 1.0)
      positionY: 0.5, // Y coordinate relative to the image height (0.0 to 1.0)
      icon: basketball,
      popupMessage: 'Basketball Marker',
    },
    {
      positionX: 0.8, // X coordinate relative to the image width (0.0 to 1.0)
      positionY: 0.3, // Y coordinate relative to the image height (0.0 to 1.0)
      icon: bruincard,
      popupMessage: 'Bruincard Marker',
    },
    {
      positionX: 0.6, // X coordinate relative to the image width (0.0 to 1.0)
      positionY: 0.7, // Y coordinate relative to the image height (0.0 to 1.0)
      icon: camera,
      popupMessage: 'Camera Marker',
    },
  ];

  const markers = markerPositions.map(({ positionX, positionY, icon, popupMessage }) => {
    const markerLatitude = bounds.getSouth() + positionY * (bounds.getNorth() - bounds.getSouth());
    const markerLongitude = bounds.getWest() + positionX * (bounds.getEast() - bounds.getWest());
    const markerPosition = [markerLatitude, markerLongitude];

    return (
      <Marker position={markerPosition} icon={icon}>
        <Popup>{popupMessage}</Popup>
      </Marker>
    );
  });

  return (
    <div id="map-container" style={{ height: '600px', width: '100%' }}>
      <MapContainer
        crs={CRS.Simple}
        bounds={bounds}
        style={{ height: '100%', width: '100%' }}
        container="map-container"
      >
        <ImageOverlay url={magnifyingGlass} bounds={bounds} />
        {markers}
      </MapContainer>
    </div>
  );
}

export default MyMap;
