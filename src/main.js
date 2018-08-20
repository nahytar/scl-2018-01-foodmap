import splashController from './controller/splash'
import mapController from './controller/map'
import searchController from './controller/search';

// se declara null para que no de undefine cuando se lo quiere usar
let currentPosition = null
let map = null;
// Instantiate (and display) a map object:

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

const printResult = (coords) => {
  respuestas.innerHTML += `<p>${JSON.stringify(coords.name)}
  direccion: ${JSON.stringify(coords.direccion)}</p>`;
}

const cleanDescription = () => {
  respuestas.innerHTML = '';
}

window.onload = (() => {
  splashController.draw();
})