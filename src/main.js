import splashController from './controller/splash'
import mapController from './controller/map'
import searchController from './controller/search';

mapController.setPosition();

setTimeout(() => {
  home.style.display = "block";
  splashController.hide();
  mapController.draw(); 
}, 2000)

let markers = [];

document.getElementById("select").addEventListener('change', () => {
  // Run a search request with parameters, headers (empty), and
  // callback functions:
  searchController.find();
});

window.onload = (() => {
  splashController.draw();
})