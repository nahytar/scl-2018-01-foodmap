import model from '../model/search'
import mapModel from '../model/map'
import mapController from '../controller/map'
import view from '../view/search'

const find = () => {
  // Define search parameters:
  var params = {
    // Plain text search for places with the word "hotel"
    // associated with them:
    'q': document.getElementById('select').value,
    //  Search in the Chinatown district in San Francisco:
    'at': `${mapModel.getPosition().lat},${mapModel.getPosition().lng}`
  };

  model.getSearch().request(params, {}, onResult, onError);
}

// Define a callback function to handle data on success:
const onResult = (searchResult) => {
  mapController.cleanMarkers();
  view.clear();
  searchResult.results.items.forEach((item) => {
    // Create an icon, an object holding the latitude and longitude, and a marker:
    let coords = {
      lng: item.position[1],
      lat: item.position[0],
      name: item.title,
      direccion: item.vicinity,
      hours: item.openingHours
    };
    mapController.addMarker(coords);
    view.render(coords);
  });
}
// Define a callback function to handle errors:
const onError = (error) => {
  console.error(error);
}

export default { find }