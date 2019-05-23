import React from 'react';
import { connect } from 'react-redux';
import { FetchTrips } from '../../actions';

class Trips extends React.Component {

  onSubmit = () =>{
    this.props.FetchTrips();
  }

  render(){
    return(
      <div className="box-container">
        <h2>List of all historical weather</h2>
        <hr/>
        <button className="btn btn-success mb-3" onClick={this.onSubmit}>Load weather history</button>
        <p>All recorded temperatures:</p>
        {this.props.currentTrips.temperature && <p>Temperature: {this.props.currentTrips.temperature}°C</p>}
        {this.props.currentTrips.time && <p>Time: {this.props.currentTrips.time}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentTrips: state.weather };
}

export default connect(
  mapStateToProps,
  { FetchTrips }
)(Trips);
