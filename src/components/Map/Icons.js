import L from 'leaflet';
import basketball_icon from './Images/basketball.png';
import bruincard_icon from './Images/bruincard.png';
import camera_icon from './Images/camera.png';

export const basketball = L.icon({
  iconUrl: basketball_icon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export const bruincard = L.icon({
  iconUrl: bruincard_icon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export const camera = L.icon({
  iconUrl: camera_icon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});