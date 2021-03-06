import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from 'react-google-maps';
import { connect } from 'react-redux';

class Directions extends React.Component {

  state = {
    directions: null
  }

  // uses google maps api to get directions of a trip from
  // origin to destination and then updates state with results.
  getJourneyRoute(origin, destination){
    const DirectionsService = new window.google.maps.DirectionsService();
    DirectionsService.route({
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.BICYCLING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions:result
          });
        }
    });
  }

  // renders each map differently depending on whether a route map has been drawn
  // for user or not.
  renderMap(directions){
    if(directions){
      return(
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat:-37.7964, lng: 144.9612}}
          >
            <DirectionsRenderer directions={this.state.directions} />
          </GoogleMap>
      );
    }else{
      return(
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat:-37.7964, lng: 144.9612}}
          >
          </GoogleMap>
      );
    }
  }

  // checks to see if user has input both a departing location and a destination
  // parses them into the getJourneyRoute function so an overlay can be drawn 
  // over the existing map
  render = () => {
    if(this.props.location.resultsDepart && this.props.location.resultsDestination){
      this.getJourneyRoute(this.props.location.resultsDepart, this.props.location.resultsDestination);
    }
    return(
      <div>
        {this.renderMap(this.state.directions)};
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    directions: state.directions,
    location: state.location,
  });
}

const directionsWrapped = withScriptjs(withGoogleMap(Directions));

export default connect(
  mapStateToProps
)(directionsWrapped);
