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
  }),
  markers: []
}

const cleanMarkers = () => {
  data.markers = [];
}

const getMarkers = () => {
  return data.markers;
}

const addMarker = (marker) => {
  data.markers.push(marker);
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

const getPosition = () => {
  return {
    lng: data.configuration.center.lng,
    lat: data.configuration.center.lat
  }
}

export default { getConfiguration, setPosition, getPlatform, getPosition, cleanMarkers, getMarkers, addMarker }
