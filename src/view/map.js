import model from '../model/map'

let map = null;

const init = () => {
  // Obtain the default map types from the platform object:
  const maptypes = model.getPlatform().createDefaultLayers();
  // Instantiate (and display) a map object:
  map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.normal.map, model.getConfiguration());

  new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
}

const render = () => {
  if (!map) {
    init();
  }
}

const addMarker = (coords) => {
  var icon = new H.map.Icon('assets/img/resto.png')
  let marker = new H.map.Marker(coords, {
    icon: icon
  });
  // printResult(coords);
  map.addObject(marker);
  return marker;
}

const removeMarkers = () => {
  map.removeObjects(model.getMarkers());
}

export default { render, removeMarkers, addMarker }