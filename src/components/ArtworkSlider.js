import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

function ArtworkSlider(props) {
  const img1 = props.imgOne;
  const img2 = props.imgTwo;
  const img3 = props.imgThree;

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ArtworkSlider;
