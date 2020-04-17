import React from 'react';
import {Link } from 'react-router-dom'

import './styles/artworklayout.css'
import './styles/home.css'
import Typed from 'react-typed'
import ArtworkSlider from '../components/ArtworkSlider';
import Header from '../components/Header'

import Data from '../data/data'

class ArtworkLayout extends React.Component {
    state = {
        loading: 'false',
        error: 'null',
        artworks: ''
     }
    
    componentDidMount(){
        this.chargeArtworkData()
    }

    chargeArtworkData = async (e) => {
        this.setState( {loading: true, error: null})
        
        try {
            const artworkData = await Data.artworks.find( artworkData => artworkData.id ===
                Math.floor(this.props.match.params.artworksId)
                // Getting data of the artworks that matches with the hash id from the collection
                )
            
            this.setState( {loading: false, artworks: artworkData})

        } catch (error) {
            this.setState( {loading: false, error: error})
        }
    }


    render() { 

        const title = this.state.artworks.title
        
        return (   
                <div className="container-artwork">
                    <div className="content-img-artwork">
                        <Header/>
                        <div className="artwork-carousel">
                            <ArtworkSlider
                                imgOne={this.state.artworks.img1}
                                imgTwo={this.state.artworks.img2}
                                imgThree={this.state.artworks.img3}
                            />
                        </div>
                    </div>
                    
                    <div className="content-text-artwork">
                        <div className="artwork-info-container">
                            <div className="artwork-data">
                                <div className="container-artwork-title">
                                    <h2 className="artwork-title">    <Typed
                                        strings={[
                                            `${title}`
                                        ]}
                                        typeSpeed={60}
                                        backSpeed={50}
                                        backDelay={10000}
                                        loop
                                    />
                                    </h2>
                                </div>
                                
                                    <div className="artwork-data-specifications">
                                        <span>Dimensions: {this.state.artworks.dimensions}</span><br/>
                                        <span>Year: {this.state.artworks.year}</span><br/>
                                        <span>Technique: {this.state.artworks.technique}</span><br/>
                                        <span className="baseline">Materials: {this.state.artworks.materials}</span>
                                    </div>
                                
                            </div>
                            <div className="artwork-description">
                                <p>{this.state.artworks.shortDescription}</p>

                                <p>{this.state.artworks.longDescription}</p>
                            </div>
                        </div>
                        <div className="nav-artwork">
                            <ul>
                                <li>
                                    <Link>Artwork 1</Link>
                                    <Link>Artwork 2</Link>
                                    <Link>Artwork 3</Link>
                                    <Link>Artwork 4</Link>
                                    <Link>Artwork 5</Link>
                                    <Link className="last-link-artwork" to="/artwork">Artwork 6</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                
         );

         
    }
}
 
export default ArtworkLayout;


