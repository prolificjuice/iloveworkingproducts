import React from 'react';
import './userIcon.css'

class UserIcon extends React.Component{
   render(){
     var bikerPath = './biker.png';
     return(
        <div>
            <div className="col align-self-center">
                <div className="user-icon">
                  <img src={require(`${bikerPath}`)} width="100%" alt="userprofile"/>
                </div>
                <span className="username">Username</span>
            </div>
        </div>
     );
   }
};

export default UserIcon;
