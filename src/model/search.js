import mapModel from '../model/map'

const data = {
  search: new H.places.Search(mapModel.getPlatform().getPlacesService()),
  searchResult: null, 
  error: null
}

const getSearch = () => {
  return data.search;
}

export default { getSearch }