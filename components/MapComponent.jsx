// components/MapComponent.jsx
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';

const MapComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const map = L.map('map').setView([33.561, -7.609], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Create a custom red marker icon
      const redIcon = L.divIcon({
        className: 'red-marker',
        html: '<div style="background-color: red; border-radius: 50%; width: 12px; height: 12px;"></div>',
        iconSize: [12, 12],
        iconAnchor: [6, 6], // Adjust the anchor point
      });

      // Add the red marker at the specified location
      const marker = L.marker([33.561, -7.609], { icon: redIcon }).addTo(map);
      marker.bindPopup('<b>My Place</b><br>This is where I am!').openPopup();
    }
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default dynamic(() => Promise.resolve(MapComponent), {
  ssr: false,
});
