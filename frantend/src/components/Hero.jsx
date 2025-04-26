// Hero.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import '../styles/hero.css';

const Hero = () => {
  const sliderContent = [
    {
      tag: "New Season",
      title: "Discover Elegance",
      description: "Explore our handcrafted collection designed for the modern individual",
      cta: "Shop Collection",
      image: Image1,
      color: "#f8f0e5"
    },
    {
      tag: "Limited Edition",
      title: "Artisan Series",
      description: "Unique pieces crafted with exceptional attention to detail",
      cta: "View Now",
      image: Image2, 
      color: "#e6e8e6"
    },
    {
      tag: "Trending Now",
      title: "Summer Essentials",
      description: "The perfect additions to elevate your seasonal wardrobe",
      cta: "Explore More",
      image: Image3, 
      color: "#f5e1da"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef(null);
  const slidesRef = useRef(null);

  // Initialize and clean up the interval
  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [current]);

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    slideInterval.current = setInterval(() => {
      if (!isTransitioning) {
        goToNextSlide();
      }
    }, 2000);
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrent((prevCurrent) => (prevCurrent === sliderContent.length - 1 ? 0 : prevCurrent + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrent((prevCurrent) => (prevCurrent === 0 ? sliderContent.length - 1 : prevCurrent - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === current) return;
    
    setIsTransitioning(true);
    setCurrent(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // Reset interval when user interacts with slider
  const handleUserInteraction = (callback) => {
    return () => {
      callback();
      startSlideTimer();
    };
  };

  return (
    <div className="hero-redesign" style={{ backgroundColor: sliderContent[current].color }}>
      <div className="hero-slider-container">
        {/* Main slider */}
        <div className="hero-slider-content">
          {/* Text Content */}
          <div className="hero-text-content">
            <div className="hero-text-animation">
              <span className="hero-tag">{sliderContent[current].tag}</span>
              <h1 className="hero-title">{sliderContent[current].title}</h1>
              <p className="hero-description">{sliderContent[current].description}</p>
              <Link to="/collection" className="hero-cta-button">
                {sliderContent[current].cta}
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="hero-image-container" ref={slidesRef}>
            {sliderContent.map((slide, index) => (
              <div 
                key={index} 
                className={`hero-image ${index === current ? 'active' : ''}`}
              >
                <img src={slide.image} alt={slide.title} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="hero-controls">
          <div className="slider-nav">
            <button 
              className="nav-arrow prev"
              onClick={handleUserInteraction(goToPrevSlide)}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="slide-indicators">
              {sliderContent.map((_, index) => (
                <button
                  key={index}
                  className={`slide-indicator ${index === current ? 'active' : ''}`}
                  onClick={handleUserInteraction(() => goToSlide(index))}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-arrow next"
              onClick={handleUserInteraction(goToNextSlide)}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;