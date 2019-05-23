import React from 'react';
import {Link} from 'react-router-dom';
import './biker.png'
import './navbar.css'


class NavBar extends React.Component{
   render(){
     var bikerPath = './biker.png';
     return(
        <div className="row justify-content-end">
            <nav className="navbar navbar-expand-lg" id="nav3">
            <div class="container-fluid">
            <button className="navbar-toggler hidden-sm-up ml-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                ☰
            </button>
            <div className="collapse navbar-collapse" id="collapsingNavbar">
                <ul className="nav navbar-nav text-right">
                    <li className="nav-item">
                        <Link to="/directions"><span className="nav-link text"> MAP MY RIDE </span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/weather"><span className="nav-link text"> WEATHER </span></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle text" role="button" data-toggle="dropdown"> MY PROFILE 
                            <span class="caret"/>
                        </Link>
                        <ul className="dropdown-menu text-right">
                            <li><Link to="/trips"><span className="nav-link text_small"> PAST TRIPS </span></Link></li>
                            <li><Link to=""><span className="nav-link text_small"> SETTINGS </span></Link></li>
                            <li><Link to=""><span className="nav-link text_small"> LOG OUT </span></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
            </nav>
        </div>
     );
   }
};

export default NavBar;
