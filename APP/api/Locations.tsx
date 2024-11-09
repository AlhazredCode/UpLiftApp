// LocationData.tsx
import React from 'react';
import { Location } from '../types/Location';

const LocationsData: Location[] = [
  {
    id: 1,
    name: "Squeaky Clean Car Wash - Downtown",
    address: "123 Biscayne Blvd, Miami, FL 33132",
    latitude: 25.77427,
    longitude: -80.22486,

  },
  {
    id: 2,
    name: "Squeaky Clean Car Wash - Wynwood",
    address: "245 NW 26th St, Miami, FL 33127",
    latitude: 25.80214,
    longitude: -80.19903,
  },
  {
    id: 3,
    name: "Squeaky Clean Car Wash - Coral Gables",
    address: "305 Miracle Mile, Coral Gables, FL 33134",
    latitude: 25.72149,
    longitude: -80.26837,
  },
  {
    id: 4,
    name: "Squeaky Clean Car Wash - South Beach",
    address: "100 Ocean Dr, Miami Beach, FL 33139",
    latitude: 25.77023,
    longitude: -80.13018,

  },
  {
    id: 5,
    name: "Squeaky Clean Car Wash - Design District",
    address: "40 NE 39th St, Miami, FL 33137",
    latitude: 25.81527,
    longitude: -80.18916,

  },
];

export default LocationsData;