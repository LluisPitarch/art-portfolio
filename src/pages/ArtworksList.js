import React from 'react';

import {Link} from 'react-router-dom'
import Header from '../components/Header'
import ArtworkComponent from '../components/ArtworkComponent'
import Data from '../data/data'

import './styles/artworklist.css'

class ArtworksList extends React.Component {
    state = {
        artworks: Data.artworks
    }

    render(){
        const artworks = this.state.artworks

        return (
            <React.Fragment>

            <Header/>

            <div className="projects-container">
                <h1 className="projects-title"> Projects </h1>
            

                
                <ul className="list-unstyled">
                    <div className="list-artworks-container">
                        {artworks.map((artworks) => {
                            return (
                                <li key={artworks.id} className="artwork-component">
                                    <Link className='text-reset text-decoration-none' to={`/artwork-info/${artworks.id}`}>
                                        <div>
                                            <ArtworkComponent artwork={artworks}/>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </div>
                </ul>
            </div>
            </React.Fragment>
        );
    }
}

 
export default ArtworksList;