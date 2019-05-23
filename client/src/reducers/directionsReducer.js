const directionsState = {
  route: null,
  departingFrom: null,
  destination: null,
  time: null,
  parking: false
}

export default (state = directionsState, action) => {
  switch(action.type){
      case 'FETCH_INPUT':
        return ({
          ...state,
          departingFrom: action.payload.departFrom,
          destination: action.payload.destination,
          time: action.payload.time,
          parking: (!action.payload.optionForParking) ? false: true
        });
      case 'FETCH_DIRECTIONS':
        return ({
          ...state,
          route: action.payload.directions
        });
      default:
        return state;
  }
};
