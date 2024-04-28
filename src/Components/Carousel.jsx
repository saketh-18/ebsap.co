import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img src="../../images/slide1.jpg" onDragStart={handleDragStart} role="presentation" />,
	<img src="../../images/slide2.jpg" onDragStart={handleDragStart} role="presentation" />,
	<img src="../../images/slide3.jpg" onDragStart={handleDragStart} role="presentation" />,
];

const Carousel = () => (
  <div style={{ width: '100%', height: '100%' }}> {/* Container for the carousel */}
    <AliceCarousel 
      mouseTracking 
      items={items}
      autoPlay
      infinite
      autoPlayInterval="1500"
      disableDotsControls // Disable dots
    />
  </div>
);

export default Carousel;
