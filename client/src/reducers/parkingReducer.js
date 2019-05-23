const ParkingState = {
    location_desc: null,
    description: null,
    condition_rating: null,
    asset_class: null,
};

export default (state = ParkingState, action) => {
    switch (action.type) {
      case 'FETCH_PARKING':
        return action.payload;
      default:
        return state;
    }
};
