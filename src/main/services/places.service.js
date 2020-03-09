import {places} from './places.mock';

const fetchPlaces = () => {
  return Promise.resolve(places);
};

const placesApi = {
  fetchPlaces,
};

export default placesApi;
