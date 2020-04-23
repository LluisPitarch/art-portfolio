import React from 'react';
import { Link } from 'react-router-dom';

import './styles/mainnav.css'

class MainNav extends React.Component {

    render() { 
        return (  
            <div className="nav-home only-desktop">
                    <ul>
                        <li className={`${this.props.gray}`}>
                            <Link to="/contact">Contact</Link>
                            <Link to="/bio">Bio</Link>
                            <Link className="last-link" to="/artworks-list">Projects</Link>
                        </li>
                    </ul>
                </div>
        );
    }
}
 
export default MainNav;