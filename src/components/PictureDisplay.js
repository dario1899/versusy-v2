import React, { useState, useEffect } from 'react';
import './PictureDisplay.css';

import { mockImageSets, mockTextSets } from './mockData';


  const PictureDisplay = () => {
    const [images, setImages] = useState([]);
    const [texts, setTexts] = useState({});
    const [loading, setLoading] = useState(true);
    const [currentSet, setCurrentSet] = useState(0);
  
    // Load images for current set
    useEffect(() => {
      const loadImages = () => {
        setLoading(true);
        setTexts({}); // Clear previous texts
        // Simulate API delay
        setTimeout(() => {
          setImages(mockImageSets[currentSet]);
          setLoading(false);
        }, 1);
      };
  
      loadImages();
    }, [currentSet]);
  
    // Handle image click - show text on BOTH pictures
    const handleImageClick = () => {
      // Simulate API delay
      setTimeout(() => {
        const currentTexts = mockTextSets[currentSet];
        setTexts({
          1: currentTexts[1],
          2: currentTexts[2]
        });
      }, 300);
    };
  
    // Handle next versus button click
    const handleNextVersus = () => {
      const nextSet = (currentSet + 1) % mockImageSets.length;
      console.log("liczba setow: " + mockImageSets.length)
      setCurrentSet(nextSet);
    };
  
    if (loading) {
      return (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading images...</p>
        </div>
      );
    }
    
    return (
      <div className="picture-container">
        {images.map((image, index) => (
          <div key={image.id} className="image-wrapper">
            {/* Show name above second image */}
            {index === 1 && (
              <div className="image-name second">
                {image.name}
              </div>
            )}
            
            <div 
              className="image-container"
              onClick={handleImageClick}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="clickable-image"
              />
              {texts[image.id] && (
                <div className="text-overlay">
                  <p>{texts[image.id]}</p>
                </div>
              )}
            </div>
            
            {/* Show name below first image, VS text, and arrow button */}
            {index === 0 && (
              <>
                <div className="image-name first">
                  {image.name}
                </div>
                <div className="vs-text">
                  VS
                </div>
                <button 
                  className="arrow-btn"
                  onClick={handleNextVersus}
                  aria-label="Next versus"
                >
                  →
                </button>
              </>
            )}
          </div>
        ))}
        
        <div className="next-versus-container">
          <button 
            className="next-versus-btn"
            onClick={handleNextVersus}
          >
            Next Versus
          </button>
        </div>
      </div>
    );
  };
  
  export default PictureDisplay;