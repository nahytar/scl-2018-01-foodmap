import view from '../view/splash'
import model from '../model/splash'

const draw = () => {
  view.render();
}

const hide = () => {
  model.turnOff();
  draw();
}

export default { draw, hide }