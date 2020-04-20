import React from 'react';

import Header from '../components/Header'
import MainNav from '../components/MainNav'
import BioImg from '../img/bio.jpg'


import './styles/bio.css'

class Bio extends React.Component {
    render() { 
        return ( 
            <React.Fragment>
                
                <div className="d-flex-bio">
                    <div className="width-100">
                        <Header/>
                    

                    <div className="d-flex w-90">
                        

                        <div className="row-l">
                            <div className="img-bio">
                                <img className="img-bio" src={BioImg} alt="Mireia Ávila Bio image"/>
                            </div>
                            <h1 className="title-bio">_Bio</h1>
                        </div>
                        <div className="row-r">
                            <div className="justify-end">
                                <div className="bio-data">
                                    <span>Birth: 1992</span><br/>
                                    <span>Location: Valencia Spain</span><br/>
                                    <span>PDH in UPV Spain</span>
                                </div>
                            </div>
                            <div>
                                <p className="bio-text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis beatae cupiditate temporibus suscipit consequatur voluptatem natus provident omnis, odit quam! Corrupti mollitia iusto debitis quidem voluptas, obcaecati veniam, iure aperiam ad in, sequi magni omnis? Praesentium modi eveniet reprehenderit obcaecati accusamus assumenda voluptate iusto impedit, facilis, adipisci placeat, quae eligendi.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem possimus officiis a iure reiciendis minima quidem sapiente atque delectus placeat ex ab dolorum quaerat eius in aspernatur, eveniet iusto perferendis!
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="nav-projects-list nav-home">
                        <MainNav gray="gray"/>
                    </div>
                </div>
            </React.Fragment>

         );
    }
}
 
export default Bio;