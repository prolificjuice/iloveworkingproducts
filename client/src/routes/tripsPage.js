import React from 'react';
import Trips from '../components/tripsPage/Trips';
import Titles from '../components/static/Titles'
import UserIcon from '../components/static/UserIcon'
class TripsPage extends React.Component {

  render() {
    return(
      <div className="container">
        <div className="container-fluid">
          <div className="row">
          <div className="col-auto mr-auto">
            <Titles />
          </div>
          <div className="md-auto">
            <UserIcon />
          </div>
            <div className="col-8">
              <Trips />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TripsPage;
