import axios from 'axios';

export const FetchWeather = (lat, lng) => async dispatch => {
  const response = await axios.get(`/getWeather/${lat}/${lng}`);
  console.log(response);
  dispatch({ type: 'FETCH_WEATHER', payload: response.data.currently});
};

export const FetchTrips = () => async dispatch => {
  const response = await axios.get(`/trips`);
  return {
    type: 'FETCH_TRIPS',
    payload: response.data
  };
};

export const FetchParking = (lat, lng) => async dispatch => {
  const response = await axios.get(`/getParking/${lat}/${lng}`);

  dispatch({ type: 'FETCH_PARKING', payload: response.data[0]});
};

export const FetchInput = (formValues) => {
    return {
      type: 'FETCH_INPUT',
      payload: formValues
    };
};

export const FetchDepartLocation = location => {
  console.log(location);
  return {
    type: 'FETCH_DEPART_LOCATION',
    payload: location
  }
};

export const FetchDestination = location => {
  return {
    type: 'FETCH_DESTINATION',
    payload: location
  }
};

export const FetchDirections = (directions) => {
  return {
    type: 'FETCH_DIRECTIONS',
    payload: directions
  };
};
