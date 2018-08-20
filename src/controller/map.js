import model from '../model/map'
import view from '../view/map'

const setPosition = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    model.setPosition(position);  
  });
}

const draw = () => {
  view.render();
}

const cleanMarkers = () => {
 view.removeMarkers();
 model.cleanMarkers();
}

const addMarker = (coords) => {
  model.addMarker(view.addMarker(coords));
}

export default { setPosition, draw, cleanMarkers, addMarker }