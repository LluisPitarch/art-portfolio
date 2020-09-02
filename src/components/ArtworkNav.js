import React from 'react';

import './styles/artworknav.css';

class ArtworkNav extends React.Component {
  render() {
    const navArtworks = this.props.projects;

    return (
      <ul className="nav-artwork-ul">
        <div className="rotated-nav">
          <div className="scrolling-div-nav">
            {navArtworks.map((navArtworks) => {
              return (
                <a
                  onClick={this.props.update}
                  href={`/artwork-info/${navArtworks.id}`}>
                  {navArtworks.title}
                </a>
              );
            })}
          </div>
        </div>
      </ul>
    );
  }
}

export default ArtworkNav;
