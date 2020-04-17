import React from 'react';
import {Link} from 'react-router-dom'

import './styles/error.css'

class NotFound extends React.Component {
    state = {  }
    render() { 
        return ( 

            <div className="container-home">
                <div className="content-error">
                    <div className="error">
                        <h1>Error 404</h1>
                        <p>The content you're searching is not available</p>
                        <Link to="/" className="btn btn-outline-secondary no-radius"> Back Home </Link>
                    </div>
                </div>
                <div className="nav-home">
                    <ul>
                        <li>
                            <Link>Contact</Link>
                            <Link>Bio</Link>
                            <Link className="last-link">Artwork</Link>
                        </li>
                    </ul>
                </div>
            </div>
        
            
            )
    }
}
 
export default NotFound;