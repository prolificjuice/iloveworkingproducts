const defaultTripsState = {
  temperature: null,
  time: null,
};

export default (state = defaultTripsState, action) => {
  switch (action.type) {
    case 'FETCH_TRIPS':
      return action.payload;
    default:
      return state;
  }
}
