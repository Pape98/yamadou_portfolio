import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = () => {
  const background = 'http://unsplash.it/500?random&gravity=center';
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className='carouselImage'
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className='carouselImage'
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className='carouselImage'
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
