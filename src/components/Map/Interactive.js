import React from 'react';
import { CRS, LatLngBounds } from 'leaflet';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './Interactive.css';
import { basketball, bruincard, camera, flag_pin, football, gavel, house, magazine, microphone, money, police_siren, powell_cat, robot, royce_hall, soccer_ball, speakerphone, uaw_sign, volleyball, voting_box, wifi } from './Icons';
import magnifyingGlass from './Images/magnifying-glass.png';

function MyMap() {
    const bounds = new LatLngBounds(
        [35.06, -220.50], // Southwestern coordinate (adjusted longitude)
        [35.20, -220.36] // Northeastern coordinate (adjusted longitude)
    );

  const markerPositions = [
    {
        positionX: 0.2, // X coordinate relative to the image width (0.0 to 1.0)
        positionY: 0.5, // Y coordinate relative to the image height (0.0 to 1.0)
        icon: basketball,
        popupMessage: (
            <div>
              <h3>March Madness</h3>
              <p>With both UCLA women's and men's basketball teams clinching their tickets to the NCAA Tournament as top seeds, the two teams showed great promise in the end-of-year tournament. However, after hard-fought battles, both teams fell in the round of 16.</p>
              {/* Insert image from pop-up images folder */}
                <br></br>
              <p style={{ fontSize: 'smaller' }}>Read more about <a href="https://features.dailybruin.com/2023/march-madness-2023/#men">UCLA basketball's journey to the tournament</a>.</p>
            </div>
          ),
    },
    {
        positionX: 0.65,  
        positionY: 0.52,  
        icon: bruincard,
        popupMessage: 'Bruincard Marker',
    },
    {
        positionX: 0.6,  
        positionY: 0.7,  
        icon: camera,
        popupMessage: 'Camera Marker',
    },
    {
        positionX: 0.4,  
        positionY: 0.4,  
        icon: flag_pin,
        popupMessage: 'Flag Pin Marker',
    },
    {
        positionX: 0.55,  
        positionY: 0.5,  
        icon: football,
        popupMessage: 'Football Marker',
    },
    // {
    //     positionX: 0.6,  
    //     positionY: 0.6,  
    //     icon: gavel,
    //     popupMessage: 'Gavel Marker',
    // },
    {
        positionX: 0.65,  
        positionY: 0.65,  
        icon: house,
        popupMessage: 'House Marker',
    },
    {
        positionX: 0.33,  
        positionY: 0.7,  
        icon: magazine,
        popupMessage: 'Magazine Marker',
    },
    {
        positionX: 0.5,  
        positionY: 0.38,  
        icon: microphone,
        popupMessage: 'Microphone Marker',
    },
    {
        positionX: 0.4,  
        positionY: 0.4,  
        icon: money,
        popupMessage: 'Money Marker',
    },
    {
        positionX: 0.53,  
        positionY: 0.68,  
        icon: police_siren,
        popupMessage: 'Police Siren Marker',
    },
    {
        positionX: 0.3,  
        positionY: 0.4,  
        icon: powell_cat,
        popupMessage: 'Powell Cat Marker',
    },
    {
        positionX: 0.4,  
        positionY: 0.5,  
        icon: robot,
        popupMessage: 'Robot Marker',
    },
    {
        positionX: 0.5,  
        positionY: 0.6,  
        icon: royce_hall,
        popupMessage: 'Royce Hall Marker',
    },
    {
        positionX: 0.57,  
        positionY: 0.78,  
        icon: soccer_ball,
        popupMessage: 'Soccer Ball Marker',
    },
    {
        positionX: 0.45,  
        positionY: 0.75,  
        icon: speakerphone,
        popupMessage: 'Speakerphone Marker',
    },
    {
        positionX: 0.3,  
        positionY: 0.52,  
        icon: uaw_sign,
        popupMessage: 'UAW Sign Marker',
    },
    {
        positionX: 0.35,  
        positionY: 0.6,  
        icon: volleyball,
        popupMessage: 'Volleyball Marker',
    },
    {
        positionX: 0.225,  
        positionY: 0.6,  
        icon: voting_box,
        popupMessage: 'Voting Box Marker',
    },
    {
        positionX: 0.3,  
        positionY: 0.8,  
        icon: wifi,
        popupMessage: 'Wifi Marker',
    },
  ];

  const markers = markerPositions.map(({ positionX, positionY, icon, popupMessage }) => {
    const markerLatitude = bounds.getSouth() + positionY * (bounds.getNorth() - bounds.getSouth());
    const markerLongitude = bounds.getWest() + positionX * (bounds.getEast() - bounds.getWest());
    const markerPosition = [markerLatitude, markerLongitude];

    return (
      <Marker position={markerPosition} icon={icon}>
        <Popup position={markerPosition}>{popupMessage}</Popup>
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
        scrollWheelZoom={false}
        // zoomControl={true}
      >
        <ImageOverlay url={magnifyingGlass} bounds={bounds} />
        {markers}
      </MapContainer>
    </div>
  );
}

export default MyMap;
