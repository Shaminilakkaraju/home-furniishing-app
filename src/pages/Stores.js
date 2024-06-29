import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Stores.css'; 
import store1 from '../assets/store1.jpg';
import store2 from '../assets/store2.jpg';
import store3 from '../assets/store3.jpg';
import store4 from '../assets/store4.jpg';
import store5 from '../assets/store5.jpg';
import store6 from '../assets/store6.jpg';
import store7 from '../assets/store7.jpg';
import store8 from '../assets/store8.jpg';

const stores = [
  { image: store1 },
  { image: store2 },
  { image: store3 },
  { image: store4 },
  { image: store5 },
  { image: store6 },
  { image: store7 },
  { image: store8 },
];

const Stores = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/product-categories');
  };

  return (
    <div className="stores-container">
      <h2>Visit Our Stores</h2>
      <div className="stores-grid">
        {stores.map((store, index) => (
          <div className="store-item" key={index} onClick={handleCardClick}>
            <img src={store.image} alt={`Store ${index + 1}`} className="store-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;