import React from 'react';
import './DestinationInput.css'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FetchInput, FetchDepartLocation, FetchDestination } from '../../actions';
import SearchBar from './AutoCompleteSearch';

//Input box for destination takes a few user inputs on location and user
//preference to output a route on map display.
class DestinationInput extends React.Component{

   // will take care of form submittal in future to update destination routes
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

   // both renderDepart and renderDestination use searchbar formed in
   // AutoCompleteSearch to help get latlong for both the departing location
   // and destination
   renderDepart = (formProps) => {
     return(
       <div className="form-group col-xs-12 col-12">
         <label className="control-label">Departing from:</label>
         <SearchBar Destination={false}/>
          {this.renderError(formProps.meta)}
       </div>
     );
   }

    renderDestination = (formProps) => {
      return(
        <div className="form-group col-xs-12 col-12">
          <label className="control-label">Your Destination:</label>
          <SearchBar Destination={true}/>
           {this.renderError(formProps.meta)}
        </div>
      );
    }

   render(){
    return(
       // form made to take the users preffered destination, departure location,
       // time of departure. All gets put into state when button is pressed.
      <form
        className="box-container"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="row ">
          <Field name="departFrom" component={this.renderDepart}/>
          <Field name="destination" component={this.renderDestination}/>
        </div>
        <center>
          <button className="btn btn-success" onClick={() => this.onSubmit}>Map My Ride!</button>
        </center>
      </form>
     );
   }
};

const wrappedInputForm = reduxForm({
  form: "destinationInput",
})(DestinationInput);

export default connect(
  null,
  {
    FetchInput,
    FetchDepartLocation,
    FetchDestination
  }
)(wrappedInputForm);
