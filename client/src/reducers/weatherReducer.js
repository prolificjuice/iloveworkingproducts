const defaultWeatherState = {
    summary: null,
    temperature: null,
    humidity: null,
    windSpeed: null
};

export default (state = defaultWeatherState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return action.payload;
    default:
      return state;
  }
}
