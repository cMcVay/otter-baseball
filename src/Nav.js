import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    const LinkStyle = {
        'color': 'white',
        textDecoration: 'none'
    }
    return (
        <nav>
            <Link style={LinkStyle} to="/">
                <img src="images/OtterFantasyLogo.png" type="image/png" alt="Logo" style={{width: "2.88rem"}}/>
                <h1 id="mainSiteTitle">Otter League Fantasy Baseball</h1>
            </Link>
            <ul className='nav-links'>
                <Link style={LinkStyle} to="/Standings">
                    <li>Standings</li>
                </Link>
                <Link style={LinkStyle} to="/Schedule">
                    <li>Schedule</li>
                </Link>
                <Link style={LinkStyle} to="/History">
                    <li>History</li>
                </Link>
                <Link style={LinkStyle} to="/Rules">
                    <li>Rules</li>
                </Link>
            </ul>
        </nav>
        );
}

export default Nav;