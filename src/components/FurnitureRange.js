import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faStore, faCouch, faBed, faUtensils, faChair, faCoffee, faTv, faBook, faLightbulb, faStar, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCategories.css';

const FurnitureRange = () => {
  const navigate = useNavigate();

  const categories = [
    { icon: faTag, label: 'Deal Zone', slug: 'all-products' },
    { icon: faStore, label: '50+ Stores', slug: 'stores' },
    { icon: faCouch, label: 'Sofas', slug: 'sofas' },
    { icon: faBed, label: 'Beds', slug: 'beds' },
    { icon: faUtensils, label: 'Dining', slug: 'dining' },
    { icon: faChair, label: 'Seating', slug: 'seating' },
    { icon: faCoffee, label: 'Coffee Tables', slug: 'coffee-tables' },
    { icon: faTv, label: 'TV Units', slug: 'tv-units' },
    { icon: faShoePrints, label: 'Shoe Racks', slug: 'shoe-racks' },
    { icon: faBook, label: 'Study', slug: 'study' },
    { icon: faLightbulb, label: 'Lighting', slug: 'lighting' },
    { icon: faStar, label: 'Bestsellers', slug: 'bestsellers' },
  ];

  const handleIconClick = (slug) => {
    if (slug === 'stores') {
      navigate(`/stores`);
    } else if (slug === 'all-products' || slug === 'bestsellers') {
      navigate(`/all-products`);
    } else {
      navigate(`/products/${slug}`);
    }
  };

  return (
    <div className="product-categories-container">
      <h1>Explore Our Furniture Range</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => handleIconClick(category.slug)}>
            <span className="category-icon">
              <FontAwesomeIcon icon={category.icon} size="3x" />
            </span>
            <div>
              <p className="category-name">{category.label}</p>
              <p className="category-description">Explore our range of {category.label.toLowerCase()}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureRange;
