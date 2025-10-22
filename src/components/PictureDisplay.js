import React, { useState, useEffect } from 'react';
import './PictureDisplay.css';

const PictureDisplay = () => {
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentSet, setCurrentSet] = useState(0);

  // Multiple sets of mock data for different "versus" rounds
  const mockImageSets = [
    // Set 1: Nature vs Architecture
    [
      {
        id: 1,
        url: 'https://picsum.photos/400/300?random=1',
        alt: 'Beautiful mountain landscape'
      },
      {
        id: 2,
        url: 'https://picsum.photos/400/300?random=2',
        alt: 'Modern city architecture'
      }
    ],
    // Set 2: Ocean vs Forest
    [
      {
        id: 1,
        url: 'https://picsum.photos/400/300?random=10',
        alt: 'Ocean waves at sunset'
      },
      {
        id: 2,
        url: 'https://picsum.photos/400/300?random=11',
        alt: 'Dense forest with sunlight'
      }
    ],
    // Set 3: Desert vs Snow
    [
      {
        id: 1,
        url: 'https://picsum.photos/400/300?random=20',
        alt: 'Desert sand dunes'
      },
      {
        id: 2,
        url: 'https://picsum.photos/400/300?random=21',
        alt: 'Snow-covered mountains'
      }
    ],
    // Set 4: Urban vs Rural
    [
      {
        id: 1,
        url: 'https://picsum.photos/400/300?random=30',
        alt: 'Busy city street'
      },
      {
        id: 2,
        url: 'https://picsum.photos/400/300?random=31',
        alt: 'Peaceful countryside'
      }
    ]
  ];

  // Mock data for texts - each set has different descriptions
  const mockTextSets = [
    // Set 1: Nature vs Architecture
    {
      1: "18% (23 głosów)",
      2: "82% (2345 głosów)"
    },
    // Set 2: Ocean vs Forest
    {
      1: "50% (2334 głosów)",
      2: "50% (2334 głosów)"
    },
    // Set 3: Desert vs Snow
    {
      1: "1% (12 głosów)",
      2: "99% (9784 głosów)"
    },
    // Set 4: Urban vs Rural
    {
      1: "45% (1200 głosów)",
      2: "55% (1340 głosów)"
    }
  ];

  // Load images for current set
  useEffect(() => {
    const loadImages = () => {
      setLoading(true);
      setTexts({}); // Clear previous texts
      // Simulate API delay
      setTimeout(() => {
        setImages(mockImageSets[currentSet]);
        setLoading(false);
      }, 1000);
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
        </div>
      ))}
      
      <div className="next-versus-container">
        <button 
          className="next-versus-btn"
          onClick={handleNextVersus}
        >
          Next Versus
        </button>
        <p className="versus-info">
          Round {currentSet + 1} of {mockImageSets.length}
        </p>
      </div>
    </div>
  );
};

export default PictureDisplay;
