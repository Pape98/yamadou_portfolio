import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = ({ images }) => {
  const carouselItems = images.map(url => {
    return (
      <Carousel.Item>
        <div
          className='carouselImage'
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
      </Carousel.Item>
    );
  });

  return <Carousel>{carouselItems}</Carousel>;
};

export default ImageCarousel;
