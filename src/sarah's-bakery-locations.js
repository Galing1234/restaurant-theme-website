var map = L.map('map', {
  center: [37.7833, -122.4167],
  zoom: 10
}) ;

// Add a tile layer to the map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map) ;

// Add markers for LA, NYC, Boston, Dallas, and Newark to the map.
L.marker([34.0522, -118.2437]).addTo(map) ; // LA
L.marker([40.7127, -74.0059]).addTo(map) ; // NYC
L.marker([42.3601, -71.0583]).addTo(map) ; // Boston
L.marker([32.7783, -96.7903]).addTo(map) ; // Dallas
L.marker([40.7128, -74.1750]).addTo(map) ; // Newark

L.marker([34.0522, -118.2437]).addTo(map)
    .bindPopup('Los Angeles')
    .openPopup() ;

L.marker([40.7127, -74.0059]).addTo(map)
    .bindPopup('New York City')
    .openPopup() ;

L.marker([42.3601, -71.0583]).addTo(map)
    .bindPopup('Boston')
    .openPopup() ;

L.marker([32.7783, -96.7903]).addTo(map)
    .bindPopup('Dallas')
    .openPopup() ;

L.marker([40.7128, -74.1750]).addTo(map)
    .bindPopup('Newark')
    .openPopup() ;