import React from 'react';

import {Link} from 'react-router-dom'
import Typed from 'react-typed'
import MainNav from '../components/MainNav'

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

            
            <div className="flex-container-list">

                <div className="projects-container">

                    <div className="logo-artworks-list">
                        <Link className="logo-nav-list" to="/">
                            <h1><span className="light-logo-list"> Mireia </span>  Ávila</h1>
                        </Link>
                    </div>
                    
                    <h1 className="projects-title">
                    <Typed
                        strings={[
                            '_Projects'
                        ]}
                        typeSpeed={80}
                    />
                    </h1>
                

                    
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

                <div className="nav-projects-list nav-home">
                    <MainNav gray="gray"/>
                </div>
            </div>

            </React.Fragment>
        );
    }
}

 
export default ArtworksList;