import React from 'react';
import './styles/artworkcomponent.css';

function ArtworksComponent(props) {
  const artwork = props.artwork;
  return (
    <div className="container_artworkComponent">
      <div className="container_artworkComponent_title">
        <h3>{artwork.title}</h3>
      </div>
      <img src={artwork.img1} alt={artwork.title} />
      <div className="artwork-data-specifications specific-list">
        <span>Year: {artwork.year}</span>
        <br />
        <span>{artwork.technique}</span>
        <br />
      </div>
    </div>
  );
}

export default ArtworksComponent;
