import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Link } from 'react-router-dom';


const items = [
  {
    src: '../assets/images/homepagebeach.jpg',
    altText: 'Photo of beach',
    caption: 'About Us',
    link: '/about'
  },
  {
    src: '../assets/images/carouselchicken.jpg',
    altText: 'Jerk chicken',
    caption: 'Menu',
    link: '/menu'
  },
  {
    src: '../assets/images/carouseldrinks.jpg',
    altText: 'People with drinks',
    caption: 'Contact Us',
    link: '/contact'
  }
];

const HomeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} id="carouselImage" />
        <Link to={item.link}>
          <CarouselCaption captionHeader={item.caption} />
        </Link>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default HomeCarousel;
