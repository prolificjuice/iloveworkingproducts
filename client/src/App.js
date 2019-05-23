import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import DirectionsPage from './routes/directionsPage';
import WeatherPage from './routes/weatherPage';
import HomePage from './routes/homePage';
import TripsPage from './routes/tripsPage';
import './App.css'
import GoogleAuth from './components/loginPage/GoogleAuth';
import { connect } from 'react-redux';
import { FetchWeather } from './actions';

class App extends React.Component {
  componentDidMount(){
    const lat = "144.9612";
    const lng = "-37.7964";
    this.props.FetchWeather(lat, lng);
  }

  render() {
    return(
      <BrowserRouter>
      <div>
        <div>
          <GoogleAuth />
        </div>
      <div className="bkg-animated">
            <Route path="/" exact component={HomePage} />
            <Route path="/weather" exact component={WeatherPage} />
            <Route path="/directions" exact component={DirectionsPage} />
            <Route path="/trips" exact component={TripsPage} />
      </div>
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
    return { weather: state.weather };
}


export default connect(
    mapStateToProps,
    { FetchWeather }
)(App);
