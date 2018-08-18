import model from '../model/splash'

const render = () => {
  if (model.isOn()) {
    document.getElementById('splash').innerHTML = `
     <div class="row">
     <div class="col-sm">
       <h1 class="titulo">FOODMAP</h1>
     </div>
     </div>`;
  } else {
    document.getElementById('splash').innerHTML = '';
  }
} 

export default { render }