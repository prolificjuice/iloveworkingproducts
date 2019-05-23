import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { FetchDestination, FetchDepartLocation } from '../../actions';


class AutoCompleteSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = { address: '', latLng: null };
    }

    handleChange = address => {
      this.setState({ address });
    };

    // sends lat long into action creators for both destination and depart loc
    // the action creator used is dependent on whether the form entry being used
    // is for dest or departing location.
    handleSelect = (address) => {
      this.setState({ address: address });
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          if(this.props.Destination){
            this.props.FetchDestination(latLng);
          }else{
            this.props.FetchDepartLocation(latLng);
          }

          this.setState({ latLng: latLng});
          console.log(this.state);
        })
        .catch(error => console.error('Error', error));
    };

    render(props) {
      return (
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'form-control',
                })}
              />
            </div>
          )}
        </PlacesAutocomplete>
      );
    }
  }

export default connect(null, {FetchDestination, FetchDepartLocation })(AutoCompleteSearch);
