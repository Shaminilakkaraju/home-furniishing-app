import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StoreCards.css';
import store1 from '../assets/store1.jpg';
import store2 from '../assets/store2.jpg';
import store3 from '../assets/store3.jpg';
import store4 from '../assets/store4.jpg';
import store5 from '../assets/store5.jpg';
import store6 from '../assets/store6.jpg';
import store7 from '../assets/store7.jpg';
import store8 from '../assets/store8.jpg';

const StoreCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const storeData = [
    { image: store1 },
    { image: store2 },
    { image: store3 },
    { image: store4 },
    { image: store5 },
    { image: store6 },
    { image: store7 },
    { image: store8 },
    { label: 'EXPLORE ALL STORES >' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? storeData.length - 3 : prevIndex - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= storeData.length ? 0 : prevIndex + 3));
  };

  const visibleStores = storeData.slice(currentIndex, currentIndex + 3);

  const handleCardClick = () => {
    navigate('/stores');
  };

  return (
    <div className="store-cards-container">
      <h2>Visit Our Stores</h2>
      <div className="navigation-btns">
        <button className="prev-btn" onClick={handlePrev}>
          &lt;
        </button>
        <button className="next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="store-cards-wrapper">
        {visibleStores.map((store, index) => (
          <div key={index} className="store-card" onClick={handleCardClick}>
            {store.image ? (
              <img src={store.image} alt={`Store ${index + 1}`} className="store-card-image" />
            ) : (
              <div className="explore-card" onClick={handleCardClick}>
                <p className="explore-label">{store.label}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreCards;
