import React from 'react';
import './Weather.css';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';

class WeatherSidebar extends React.Component {
  render(){
    if(this.props.currentWeather.summary){
      return(
          <div className="row ">
            <div className="form-group col-xs-12 col-6">
              <div className="box-container">
                <h2>Current Weather</h2>
                <hr/>
                <p>The weather looks {this.props.currentWeather.summary} at<b> {this.props.currentWeather.temperature}°C.</b></p>

                <div className="row">
                  <div className="col-6">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th scope="row">Precipitation:</th>
                          <td>{this.props.currentWeather.precipProbability *100}%</td>
                        </tr>
                        <tr>
                          <th scope="row">Humidity:</th>
                          <td>{this.props.currentWeather.humidity}</td>
                        </tr>
                        <tr>
                          <th scope="row">Wind speed:</th>
                          <td>{this.props.currentWeather.windSpeed} kn/s</td>
                        </tr>
                        <tr>
                          <th scope="row">UV index:</th>
                          <td>{this.props.currentWeather.uvIndex}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-6">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th scope="row">Dew Point:</th>
                          <td>{this.props.currentWeather.dewPoint}°</td>
                        </tr>
                        <tr>
                          <th scope="row">Wind gust:</th>
                          <td>{this.props.currentWeather.windGust} km/h</td>
                        </tr>
                        <tr>
                          <th scope="row">Visibility:</th>
                          <td>{this.props.currentWeather.visibility} miles</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group col-xs-12 col-6">
              <div className="box-container">
                <h2>2 Days Forecast</h2>
                <hr/>
                <b>Summary:</b> {this.props.currentWeather.summary}<br />
                <b>Temperature:</b> {this.props.currentWeather.temperature}°C<br />
                <b>Humidity:</b> {this.props.currentWeather.humidity}<br />
                <b>Wind Speed:</b> {this.props.currentWeather.windSpeed}kn/s<br />
              </div>
            </div>
          </div>
       );
    }
    else{
      return(
        <div></div>
      )
    }

   }
}

const mapStateToProps = state => {
  return { currentWeather: state.weather };
}

export default connect(
  mapStateToProps,
  { FetchWeather }
)(WeatherSidebar);
