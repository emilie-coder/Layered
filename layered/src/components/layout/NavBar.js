import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className = "nav-wrapper">
            <div className = "navigation-container">
                <Link to='/' className = "layered-logo"> Layered </Link>
                <Link to='/Thesis' className = "layered-logo"> Thesis </Link>
                <Link to='/Browse' className = "layered-logo"> Browse </Link>
                <Link to='/CreatePiece' className = "layered-logo"> Create </Link>
            </div>
        </nav> 
    )
}

export default NavBar;