import React from 'react';
import './Scrollup.css';
import  { useState, useEffect } from 'react';

export default function Scrollup() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      
      <div className='scrollUp btn btn-warning'onClick={scrollToTop} style={{ display: showScroll ? 'flex' : 'none' }}>
          <i  className="fa-solid fa-arrow-up"></i>
          
      </div>
      
    </>
  )
}
