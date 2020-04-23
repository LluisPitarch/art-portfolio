import React from 'react';

import {Link} from 'react-router-dom'
import MenuRes from './ResponsiveNav'

import './styles/header.css'


function Header(props) {
    return (
        
        <div className={`${props.gray} header-container`}> 
            <MenuRes/>
            <div className="logo">
            
                <Link className="logo-nav" to="/">
                    <h1><span className="light-logo"> Mireia </span>  Ávila</h1>
                </Link>
            </div>

        </div>
        
    )
}

export default Header