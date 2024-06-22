"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
//@ts-ignore
import L from "leaflet";

const Map: React.FC = () => {
  const customIcon = L.icon({
    iconUrl: "/marker.svg",
    iconSize: [40, 40],
    iconAnchor: [20, 40], // Adjust the anchor if necessary to center the icon properly
  });

  return (
    <MapContainer
    //@ts-ignore
      center={[12.9120665, 77.5957499]}
      zoom={13}
      className="h-96 w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //@ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        //@ts-ignore
        <Marker position={[12.9120665, 77.5957499]} icon={customIcon}>
        <Popup>
          We Are Here &nbsp;
          <a href="https://maps.app.goo.gl/6ypRde1cyFoank3F9">
            click here to navigate
          </a>
        </Popup>
      </Marker>}
    </MapContainer>
  );
};

export default Map;
