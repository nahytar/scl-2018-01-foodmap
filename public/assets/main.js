const platform = new H.service.Platform({
  'app_id': 'wPJPKvnkW9RvWEhqFwQf',
  'app_code': 'nOWzrH23UUts9L7nlypBpA'
});

// Obtain the default map types from the platform object:
var maptypes = platform.createDefaultLayers();
// se declara null para que no de undefine cuando se lo quiere usar
let currentPosition = null;
let map = null;
// Instantiate (and display) a map object:
navigator.geolocation.getCurrentPosition((position) => {
  currentPosition = position;
});

setTimeout(() => {
  splash.style.display = "none";
  home.style.display = "block";

  map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.normal.map, {
      zoom: 15,
      center: {
        lng: currentPosition.coords.longitude,
        lat: currentPosition.coords.latitude,
        useCIT: true, // para que funcione https en firebase
        useHTTPS: true  // para que funcione https en firebase
      }
    });
}, 2000)

var search = new H.places.Search(platform.getPlacesService()),
  searchResult, error;
let markers = [];

document.getElementById("select").addEventListener('change', () => {
  // Define search parameters:
  var params = {
    // Plain text search for places with the word "hotel"
    // associated with them:
    'q': document.getElementById('select').value,
    //  Search in the Chinatown district in San Francisco:
    'at': `${currentPosition.coords.latitude},${currentPosition.coords.longitude}`
  };
  // Define a callback function to handle data on success:
  function onResult(data) {
    searchResult = data;
    map.removeObjects(markers);
    markers = [];
    cleanDescription();
    searchResult.results.items.forEach((item) => {
      // Create an icon, an object holding the latitude and longitude, and a marker:
      var icon = new H.map.Icon('assets/img/resto.png')
      let coords = {
        lng: item.position[1],
        lat: item.position[0],
        name: item.title,
        direccion: item.vicinity,
        hours: item.openingHours
      };
      let marker = new H.map.Marker(coords, {
        icon: icon
      });
      markers.push(marker);
      printResult(coords);
      map.addObject(marker);
    })

  
  }
  // Define a callback function to handle errors:
  function onError(data) {
    error = data;
  }
  // Run a search request with parameters, headers (empty), and
  // callback functions:
  search.request(params, {}, onResult, onError);
});

const printResult = (coords) => {
  respuestas.innerHTML += `<p>${JSON.stringify(coords.name)}
  direccion: ${JSON.stringify(coords.direccion)}</p>`;
}

const cleanDescription = () => {
  respuestas.innerHTML = '';
}