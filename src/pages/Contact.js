import React from 'react';
import Header from '../components/Header';

import './styles/contact.css'
import MainNav from '../components/MainNav';

class Contact extends React.Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-flex d-flex">

                    <div className="container-contact d-flex">
                        <div className="contact-container-l">
                            <Header/>
                            <div className="contact-text">
                                <hr className="hr"/>
                                <p className="text-container">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, reprehenderit! Maiores corrupti itaque amet fugiat laudantium magnam, reprehenderit eaque modi! <br/><br/>
                                    <span className="font-weight-bold">contact@mireiaavila.com</span>
                                </p>

                            </div>
                        </div>
                        <div className="contact-container-r">
                            <h1 className="contact-title">_CON<br></br>
                            TACT
                            </h1>
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
 
export default Contact;