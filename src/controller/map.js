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

export default { setPosition, draw }