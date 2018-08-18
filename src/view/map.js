import model from '../model/map'

let map = null;

const init = () => {
  // Obtain the default map types from the platform object:
  const maptypes = model.getPlatform().createDefaultLayers();
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

export default { render }