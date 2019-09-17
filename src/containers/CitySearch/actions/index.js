import { UPDATE_CITY, FETCH_CITIES, CLEAR_CITIES } from '../constants';
import axios from 'axios';

export const updateCity = value => ({
    type: UPDATE_CITY,
    payload: {
        value
    }
});

export const clearCities = () => ({
    type: CLEAR_CITIES
});

const fetchCitiesRequest = () => ({
    type: `${FETCH_CITIES}_REQUEST`
});

const fetchCitiesSuccess = data => ({
    type: `${FETCH_CITIES}_SUCCESS`,
    payload: {
        data
    }
});

const fetchCitiesError = error => ({
    type: `${FETCH_CITIES}_ERROR`,
    payload: {
        error
    }
});

export const asyncFetchCity = (country, query) => async dispatch => {
    dispatch(fetchCitiesRequest());
    try {
        const response = await axios.get(
            `http://gd.geobytes.com/AutoCompleteCity?callback=?&filter=${country}&q=${query}`
        );

        let parsedData = JSON.parse(
            response.data.replace('?(', '').replace(');', '')
        );
        if (parsedData[0] === '') {
            parsedData = [];
        }
        dispatch(fetchCitiesSuccess(parsedData));
    } catch (error) {
        dispatch(fetchCitiesError(error));
    }
};
