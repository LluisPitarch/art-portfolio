import React from 'react';

import {Link} from 'react-router-dom'

import './styles/header.css'

function Header() {
    return (
        <div className="logo">
            <Link to="/">
                <h1><span className="light-logo"> Mireia </span>  Ávila</h1>
            </Link>
        </div>
    )
}

export default Header