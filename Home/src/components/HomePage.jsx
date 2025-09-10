import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Wmodel1 from '../assets/Wmodel1.jpg';
import Wmodel2 from '../assets/Wmodel2.webp';
import Wmodel3 from '../assets/Wmodel3.jpg';
import Wmodel4 from '../assets/Wmodel4.png';
import Wmodel5 from '../assets/Wmodel5.jpg';
import Wmodel6 from '../assets/Wmodel6.webp';
import Wmodel7 from '../assets/Wmodel7.jpg';

import Mmodel5 from '../assets/Mmodel5.jpg';

import Kmodel5 from '../assets/Kmodel5.jpeg';

import Pmodel2 from '../assets/Pmodel2.jpg';

import Tmodel1 from '../assets/Tmodel1.jpg';

const galleries = {
  women: [Wmodel1, Wmodel2, Wmodel6, Wmodel3, Wmodel4, Wmodel5, Wmodel7],
  men: [Mmodel5],
  kids: [Kmodel5],
  perfumes: [Pmodel2],
  travel: [Tmodel1],
};

const sections = Object.keys(galleries);

export default function HomePage({ isMenuOpen }) {
  const [sectionIdx, setSectionIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % galleries[sections[sectionIdx]].length);
    }, 800);
    return () => clearInterval(timer);
  }, [sectionIdx]);

  const handleImageClick = (section) => {
    navigate(`/${section}`);
  };

  // Apply blur effect and disable interactions on main content when menu is open
  const blurStyle = isMenuOpen
    ? { filter: 'blur(5px)', pointerEvents: 'none', userSelect: 'none', transition: 'filter 0.3s ease' }
    : { filter: 'none', transition: 'filter 0.3s ease' };

  return (
    <div className="d-flex flex-column align-items-center mt-4" style={{ position: 'relative', width: '100%', ...blurStyle }}>
      <div
        className="d-flex align-items-center"
        style={{
          minHeight: 500,
          borderTop: 'none',
          borderBottom: 'none',
          position: 'relative',
          width: '100%',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        {sectionIdx > 0 && (
          <Button
            variant="light"
            onClick={() => {
              setSectionIdx(sectionIdx - 1);
              setImgIdx(0);
            }}
            style={{
              position: 'fixed',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 900,
              borderRadius: '50%',
              padding: 0,
              fontSize: '2rem',
              lineHeight: 1,
              userSelect: 'none',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              marginLeft: '40px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-50%) translateX(-10px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(-50%)')}
            aria-label="Previous Section"
          >
            ←
          </Button>
        )}

        <img
          src={galleries[sections[sectionIdx]][imgIdx]}
          alt={`${sections[sectionIdx]} model`}
          style={{
            width: 800,
            height: 420,
            objectFit: 'cover',
            cursor: 'pointer',
            borderRadius: 0,
            background: 'transparent',
            boxShadow: 'none',
          }}
          onClick={() => handleImageClick(sections[sectionIdx])}
        />

        {sectionIdx < sections.length - 1 && (
          <Button
            variant="light"
            onClick={() => {
              setSectionIdx(sectionIdx + 1);
              setImgIdx(0);
            }}
            style={{
              position: 'fixed',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 900,
              borderRadius: '50%',
              padding: 0,
              fontSize: '2rem',
              lineHeight: 1,
              userSelect: 'none',
              background: 'transparent',
              border: 'none',
              marginRight: '40px',
              boxShadow: 'none',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-50%) translateX(10px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(-50%)')}
            aria-label="Next Section"
          >
            →
          </Button>
        )}
      </div>
    </div>
  );
}
