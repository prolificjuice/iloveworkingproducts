import React from 'react';
import { connect } from 'react-redux';
import { FetchWeather } from '../../actions';
import Icons from './data/icons.json';
import './WeatherIcon.css'

class WeatherIcon extends React.Component {
  render(){
    var currentIcon = this.props.currentWeather.icon;
    var iconImage = './static/moonCycle.gif'
    if (currentIcon){
      iconImage = Icons[currentIcon];
    }
    return (
      <div>
        <img className="iconImage" src={require(`${iconImage}`)} alt="Icon" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentWeather: state.weather}
}

export default connect(
  mapStateToProps,
  { FetchWeather }
)(WeatherIcon);
