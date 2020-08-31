import React from 'react';

import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import MainNav from '../components/MainNav';

import ArtworkComponent from '../components/ArtworkComponent';
import Data from '../data/data';

import './styles/artworklist.css';
import Header from '../components/Header';

class ArtworksList extends React.Component {
  state = {
    artworks: Data.artworks,
  };

  render() {
    const artworks = this.state.artworks;

    return (
      <React.Fragment>
        <Header gray="gray-nav"></Header>
        <div className="flex-container-list">
          <div className="projects-container responsive-fw">
            <h1 className="projects-title only-desktop">
              <Typed strings={['_PROJECTS']} typeSpeed={80} />
            </h1>

            <h1 className="projects-title only-responsive">
              <Typed strings={['_PRO <br>JECTS']} typeSpeed={80} />
            </h1>

            <ul className="list-unstyled">
              <div className="list-artworks-container">
                {artworks.map((artworks) => {
                  return (
                    <li key={artworks.id} className="artwork-component">
                      <Link
                        className="text-reset text-decoration-none"
                        to={`/artwork-info/${artworks.id}`}>
                        <div>
                          <ArtworkComponent artwork={artworks} />
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>

          <MainNav gray="gray" />
        </div>
      </React.Fragment>
    );
  }
}

export default ArtworksList;
