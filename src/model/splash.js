const data = {
  on: true
}

const isOn = () => {
  return data.on;
}

const turnOff = () => {
  data.on = false;
}

export default { isOn, turnOff }
