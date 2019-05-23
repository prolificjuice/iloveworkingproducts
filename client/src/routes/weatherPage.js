import React from 'react';
import WeatherSidebar from '../components/weatherPage/Weather';
import WeatherLocation from '../components/weatherPage/WeatherLocation';
import Titles from '../components/static/Titles';
import UserIcon from '../components/static/UserIcon';
import WeatherIcon from '../components/weatherPage/WeatherIcon';
import BackgroundImg from '../backgrounds/background.png'
class WeatherPage extends React.Component {

  render() {
    return(
      <div>
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-auto mr-auto">
                <Titles />
              </div>
              <div className="md-auto">
                <UserIcon />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <WeatherLocation />
              </div>
              <div className="col-12 col-md-6">
                <WeatherIcon />
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-12">
                <WeatherSidebar />
              </div>
            </div>
          </div>
        </div>
        <div className="bottomBackground start-bkg-container-scroll">
           <div className="bottomBackground">
             <div className="background_img">
               <img src={BackgroundImg} width="100%" alt="userprofile"/>
             </div>
           </div>
         </div>
      </div>
    );
  }
}
export default WeatherPage;
