// Add console.log to check to see if our code is working
console.log("working");

// create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.2980, -94.7170], 4);

// coordinates for each point to be used in the polyline
let line = [
  [33.9416, -118.4085],
  [30.1975, -97.6664],
  [39.2980, -94.7170],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: 'blue',
  weight: 4,
  opacity: 0.5,
  dashArray: 10
}).addTo(map);

// Get data from cities.js
let cityData = cities;

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);