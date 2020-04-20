import React from 'react';

import './styles/artworklayout.css'
import './styles/home.css'
import Typed from 'react-typed'
import ArtworkSlider from '../components/ArtworkSlider';
import Header from '../components/Header'
import ArtworkNav from '../components/ArtworkNav'
import Loading from '../components/Loading';

import Data from '../data/data'

class ArtworkLayout extends React.Component {
    state = {
        loading: true,
        error: null,
        artworks: '',
        nonActiveArtworks: [],
     }

    componentDidMount(){
        this.chargeArtworkData();
        this.getNonActiveArtworks();
    }


    chargeArtworkData = async (e) => {
        this.setState( {loading: true, error: null})
        
        try {
            const artworkData = await Data.artworks.find( artworkData => artworkData.id ===
                Math.floor(this.props.match.params.artworksId)
                // Getting data of the artworks that matches with the hash id from the collection
                )
            
            await this.setState({ artworks: artworkData })
            this.setState( {loading: false})
        } catch (error) {
            this.setState( {loading: false, error: error})
        }
    }

    getNonActiveArtworks = async (e) => {
        this.setState( {loading: true, error: null})
        
        try {
            const artworkCollection = await Data.artworks;
            const id = this.props.match.params.artworksId
            const nonActiveArtworksList = await artworkCollection.filter( (artworkCollection) => artworkCollection.id !== id)

            this.setState( {loading: false, nonActiveArtworks: nonActiveArtworksList})

        } catch (error) {
            this.setState( {loading: false, error: error})
        }
    }


  render() { 

        const title = this.state.artworks.title
        const navArtworks = this.state.nonActiveArtworks

        if(this.state.loading === true){
            return (<Loading/>)
        } 
        
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
                                        typeSpeed={80}
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
                        <div className="nav-artwork-container">
                            <ArtworkNav projects={navArtworks} update={this.chargeArtworkData}/>
                        </div>

                    </div>
                </div>
                
         );

        
    }
}
 
export default ArtworkLayout;


