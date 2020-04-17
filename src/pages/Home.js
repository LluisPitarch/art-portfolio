import React from 'react';

import { Link } from 'react-router-dom';
import './styles/home.css'
import Header from '../components/Header';

class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
        
            <div className="container-home">
                <div className="content-home">
                    <Header/>
                </div>
                <div className="nav-home">
                    <ul>
                        <li>
                            <Link>Contact</Link>
                            <Link>Bio</Link>
                            <Link className="last-link" to="/artworks-list">Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
            

            );
    }
}
 
export default Home;