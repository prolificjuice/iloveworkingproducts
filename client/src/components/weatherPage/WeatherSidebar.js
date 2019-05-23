import React from 'react';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';

class WeatherSidebar extends React.Component {

  onSubmit = () =>{
    const lat = "144.9612";
    const lng = "-37.7964";
    this.props.FetchWeather(lat, lng);
  }

  render(){
    return(
      <div className="box-container">
      <h2>Current Weather</h2>
      <hr/>
      <button className="btn btn-success mb-3" onClick={this.onSubmit}>Find Weather</button>
      {this.props.weather.summary && <p>Summary: {this.props.weather.summary}</p>}
      {this.props.weather.temperature && <p>Temperature: {this.props.weather.temperature}°C</p>}
      {this.props.weather.humidity && <p>Humidity: {this.props.weather.humidity}</p>}
      {this.props.weather.windSpeed && <p>Wind Speed: {this.props.weather.windSpeed}kn/s</p>}
    </div>
    );
  }
}

const mapStateToProps = state => {
  return { weather: state.weather };
}

export default connect(
  mapStateToProps,
  { FetchWeather }
)(WeatherSidebar);
