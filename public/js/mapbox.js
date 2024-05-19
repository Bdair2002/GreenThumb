console.log(garden.Longitude);
mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3JlZW50aHVtYjEyMyIsImEiOiJjbHdkeTRkaWIxN3NrMnFwYThnajBycWd0In0.fekBM72e6zgdYFXj_p4QEA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [garden.Latitude, garden.Longitude], // starting position [lng, lat]
  zoom: 15, // starting zoom
});
new mapboxgl.Marker().setLngLat([garden.Latitude, garden.Longitude]).addTo(map);
