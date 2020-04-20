import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ArtworkLayout from '../pages/ArtworkLayout'
import ArtworksList from '../pages/ArtworksList'
import Bio from '../pages/Bio'
import Contact from '../pages/Contact'

function App() {
    return(
        <BrowserRouter> 

                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/artwork-info/:artworksId" component={ArtworkLayout}></Route>
                    <Route exact path="/artworks-list" component={ArtworksList} />
                    <Route exact path="/bio" component={Bio} /> 
                    <Route exact path="/contact" component={Contact} /> 
                    <Route exact path="/404" component={NotFound} /> 
                    <Redirect to="/404"/>
                </Switch>

        </BrowserRouter>
    )
}
 
export default App;

















