import React from 'react';
import {Link} from 'react-router-dom';
import Titles from '../components/static/Titles';
import NavBar from '../components/static/NavBar';
import BackgroundImg from '../backgrounds/background.png'
import '../components/static/Titles.css';
import '../App.css'

class HomePage extends React.Component {
  render() {
    return(
      <div>
        <div className="container">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-3">
                <Titles />
              </div>
              <div className="col-sm-5 col-md-7">
                <NavBar />
              </div>
            </div>
            <Link to="/weather"><button className="btn btn-primary"> WEATHER PAGE </button></Link>
            <br /><br />
            <Link to="/directions"><button className="btn btn-primary"> DIRECTIONS PAGE </button></Link>
            <br /><br />
            <Link to="/trips"><button className="btn btn-primary"> HISTORICAL WEATHER PAGE </button></Link>
          </div>
        </div>
          <div className="bkg-container">
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
export default HomePage;
