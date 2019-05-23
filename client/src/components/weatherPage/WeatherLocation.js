import React from 'react';
import './Weather.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';
import SearchBar from './SearchBar'

class WeatherLocation extends React.Component {

  onSubmit = (formValues) => {
    this.props.FetchInput(formValues);
  }



  renderError({ error, touched }){
    if (touched && error){
      return(
        <div>{error}</div>
      );
    }
  }

  // Redux Form for Weather location?
  renderLocation = (formProps) => {
    return(
      <div className="form-group col-12">
        <label className="control-label textLabel">Place of weather forecast:</label>
        <SearchBar />
      </div>
    );
  }

  render(){
    return(
        <div
          className="box-container"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="row">
            <Field name="weatherLocation" component={this.renderLocation}/>
          </div>
        </div>
     );
   }
}
// Validation for Weather Input- do we need this if we have AUTOcomplete?
const validate = (formValues) => {
  const errors = {};

  if(!formValues.weatherLocation){
      errors.weatherLocation = 'You must enter a location for weather forecast';
  }
  return errors;
};

// Need to make new form called 'WeatherLocation' (see first point)
const LocationForm = reduxForm({
  form: "weatherLocation",
  validate: validate
})(WeatherLocation);

// previous for featch weather - AKEL (edit this to fetch for location input)
export default connect(
  null,
  { FetchWeather }
)(LocationForm);
