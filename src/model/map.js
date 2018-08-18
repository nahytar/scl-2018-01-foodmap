const data = {
  configuration: {
    zoom: 15,
    center: {
      lng: null,
      lat: null,
      useCIT: true, // para que funcione https en firebase
      useHTTPS: true  // para que funcione https en firebase
    }
  },
  platform: new H.service.Platform({
    'app_id': 'wPJPKvnkW9RvWEhqFwQf',
    'app_code': 'nOWzrH23UUts9L7nlypBpA'
  })
}

const getConfiguration = () => {
  return data.configuration;
}

const getPlatform = () => {
  return data.platform;
}

const setPosition = (position) => {
  data.configuration.center.lng = position.coords.longitude;
  data.configuration.center.lat = position.coords.latitude;
}

export default { getConfiguration, setPosition, getPlatform }
