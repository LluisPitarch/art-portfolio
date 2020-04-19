import React from 'react';

import Loader from '../img/loader.gif'
import './styles/loading.css'

function Loading() {

        return ( 
            <div className="center-container">
                <img src={Loader} alt="loading content"/>
            </div>
         );

}
 
export default Loading;