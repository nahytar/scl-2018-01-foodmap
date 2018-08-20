const render = (coords) => {
  respuestas.innerHTML += `<p>${JSON.stringify(coords.name)}
  direccion: ${JSON.stringify(coords.direccion)}</p>`;
}

const clear = () => {
  respuestas.innerHTML = '';
}

export default { clear, render }