import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = ({ images }) => {
  if (images.length === 0)
    return (
      <Carousel>
        <img
          className='carouselWipImage'
          src='/assets/images/wip2.svg'
          alt='Work in progress'
        />
      </Carousel>
    );

  const carouselItems = images.map(url => {
    return (
      <Carousel.Item key={url}>
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
