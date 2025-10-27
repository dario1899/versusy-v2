import React, { useState, useEffect } from 'react';
import './PictureDisplay.css';

import messi from '../images/1-messi.png';
import ronaldo from '../images/1-ronaldo.png';
import donald1 from '../images/2-donald1.png';
import donald2 from '../images/2-donald2.png';
import memcen from '../images/3-memcen.png';
import mentzen from '../images/3-mentzen.png';
import lecka from '../images/4-lecka.png';
import wokulski from '../images/4-wokulski.png';
import matura from '../images/5-matura.png';
import mature from '../images/5-mature.png';
import stary from '../images/6-twój-stary.png';
import stara from '../images/6-twoja-stara.png';
import braun from '../images/7-braun.png';
import daun from '../images/7-daun.png';
import andrzej from '../images/8-andrzej.png';
import janpawel from '../images/8-jan-paweł.png';
import janpawel1 from '../images/9-jan-pawel-I.png';
import janpawel2 from '../images/9-jan-pawel-II.png';
import huba from '../images/10-huba.png';
import kuba from '../images/10-kuba.png';
import katarzyna from '../images/11-katarzyna.png';
import mariusz from '../images/11-mariusz.png';
import cola from '../images/12-cola.png';
import pepsi from '../images/12-pepsi.png';
import barbie from '../images/13-barbie.png';
import ken from '../images/13-ken.png';
import barbie2 from '../images/14-barbie.png';
import openheimer from '../images/14-oppenheimer.png';
import gory from '../images/15-góry.png';
import morze from '../images/15-morze.png';
import haloween from '../images/16-halloween.png';
import hellwin from '../images/16-hellwin.png';
import buleczka from '../images/17-buleczka.png';
import karpiel from '../images/17-sebastian-karpiel.png';
import wew from '../images/18-do-wewnatrz.png';
import zew from '../images/18-na-zewnatrz.png';



// Multiple sets of mock data for different "versus" rounds
const mockImageSets = [
    // Set 1: Nature vs Architecture
    [
      {
        id: 1,
        url: messi,
        alt: 'messi'
      },
      {
        id: 2,
        url: ronaldo,
        alt: 'ronaldo'
      }
    ],
    // Set 2: Ocean vs Forest
    [
      {
        id: 1,
        url: donald1,
        alt: 'donald1'
      },
      {
        id: 2,
        url: donald2,
        alt: 'mbappe'
      }
    ],
    // Set 3: Desert vs Snow
    [
      {
        id: 1,
        url: memcen,
        alt: 'salah'
      },
      {
        id: 2,
        url: mentzen,
        alt: 'modric'
      }
    ],
    // Set 4: Urban vs Rural
    [
      {
        id: 1,
        url: lecka,
        alt: 'kane'
      },
      {
        id: 2,
        url: wokulski,
        alt: 'hazard'
      },
    ],
    [
      // Set 5:
      {
        id: 1,
        url: matura,
        alt: 'ramos'
      },
      {
        id: 2,
        url: mature,
        alt: 'kante'
      }
    ],
    [
        // Set 6:
        {
          id: 1,
          url: stary,
          alt: 'stary'
        },
        {
          id: 2,
          url: stara,
          alt: 'stara'
        }
      ],
      [
        // Set 7:
        {
          id: 1,
          url: braun,
          alt: 'braun'
        },
        {
          id: 2,
          url: daun,
          alt: 'daun'
        }
      ],
      [
        // Set 8:
        {
          id: 1,
          url: andrzej,
          alt: 'andrzej'
        },
        {
          id: 2,
          url: janpawel,
          alt: 'jan pawel'
        }
      ],
      [
        // Set 9:
        {
          id: 1,
          url: janpawel1,
          alt: 'jan pawel 1'
        },
        {
          id: 2,
          url: janpawel2,
          alt: 'jan pawel 2'
        }
      ],
      [
        // Set 10:
        {
          id: 1,
          url: huba,
          alt: 'huba'
        },
        {
          id: 2,
          url: kuba,
          alt: 'kuba'
        }
      ],
      [
        // Set 11:
        {
          id: 1,
          url: katarzyna,
          alt: 'katarzyna'
        },
        {
          id: 2,
          url: mariusz,
          alt: 'mariusz'
        }
      ],
      [
        // Set 12:
        {
          id: 1,
          url: cola,
          alt: 'cola'
        },
        {
          id: 2,
          url: pepsi,
          alt: 'pepsi'
        }
      ],
      [
        // Set 13:
        {
          id: 1,
          url: barbie,
          alt: 'barbie'
        },
        {
          id: 2,
          url: ken,
          alt: 'ken'
        }
      ],
      [
        // Set 14:
        {
          id: 1,
          url: barbie2,
          alt: 'barbie 2'
        },
        {
          id: 2,
          url: openheimer,
          alt: 'oppenheimer'
        }
      ],
      [
        // Set 15:
        {
          id: 1,
          url: gory,
          alt: 'gory'
        },
        {
          id: 2,
          url: morze,
          alt: 'morze'
        }
      ],
      [
        // Set 16:
        {
          id: 1,
          url: haloween,
          alt: 'haloween'
        },
        {
          id: 2,
          url: hellwin,
          alt: 'hellwin'
        }
      ],
      [
        // Set 17:
        {
          id: 1,
          url: buleczka,
          alt: 'buleczka'
        },
        {
          id: 2,
          url: karpiel,
          alt: 'karpiel'
        }
      ],
      [
        // Set 18:
        {
          id: 1,
          url: wew,
          alt: 'wewnatrz'
        },
        {
          id: 2,
          url: zew,
          alt: 'zewnatrz'
        }
      ],
  
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
    },
    // Set 5: Urban vs Rural
    {
        1: "45% (1200 głosów)",
        2: "55% (1340 głosów)"
      }
  ];

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
          {index === 0 && (
            <div className="vs-text">
              VS
            </div>
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
        {/* <p className="versus-info"> */}
          {/* Round {currentSet + 1} of {mockImageSets.length} */}
        {/* </p> */}
      </div>
    </div>
  );
};

export default PictureDisplay;
