import { UPDATE_CITY, FETCH_CITIES, CLEAR_CITIES } from '../constants';
import produce from 'immer';

const initialState = {
  city: '',
  cities: [],
  loading: false,
};

const updateCity = (state, action) =>
  produce(state, (draft) => {
    draft.city = action.payload.value;
  });

const fetch_cities_request = (state) =>
  produce(state, (draft) => {
    draft.loading = true;
  });

const fetch_cities_success = (state, action) =>
  produce(state, (draft) => {
    draft.loading = false;
    draft.cities = action.payload.data;
  });

const fetch_cities_error = (state, action) =>
  produce(state, (draft) => {
    draft.loading = false;
    draft.cities = [];
  });

const clearCities = (state) =>
  produce(state, (draft) => {
    draft.cities = [];
  });

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CITY:
      return updateCity(state, action);
    case `${FETCH_CITIES}_REQUEST`:
      return fetch_cities_request(state);
    case `${FETCH_CITIES}_SUCCESS`:
      return fetch_cities_success(state, action);
    case `${FETCH_CITIES}_ERROR`:
      return fetch_cities_error(state, action);
    case CLEAR_CITIES:
      return clearCities(state);
    default:
      return state;
  }
};
