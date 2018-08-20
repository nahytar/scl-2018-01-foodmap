import mapModel from '../model/map'

const data = {
  search: new H.places.Search(mapModel.getPlatform().getPlacesService()),
  searchResult: null
}

const getSearch = () => {
  return data.search;
}

const setSearchResult = (results) => {
  data.searchResult = results;
}

export default { getSearch, setSearchResult }