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
                <h1 style={{display: "inline", paddingLeft: ".5rem"}}>Otter League Fantasy Baseball</h1>
            </Link>
            <ul className='nav-links'>
                <Link style={LinkStyle} to="/Standings">
                    <li style={{fontSize: "2rem", fontWeight: "600"}}>Standings</li>
                </Link>
                <Link style={LinkStyle} to="/Schedule">
                    <li style={{fontSize: "2rem", fontWeight: "600"}}>Schedule</li>
                </Link>
                <Link style={LinkStyle} to="/Rules">
                    <li style={{fontSize: "2rem", fontWeight: "600"}}>Rules</li>
                </Link>
            </ul>
        </nav>
        );
}

export default Nav;