import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/icon.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faQuestionCircle, faTruck, faUser, faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchInput.trim() !== '') {
      navigate(`/products/search/${encodeURIComponent(searchInput.trim())}`);
    }
    setSearchInput('');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-left">
            <Link to="/" className="header-link">
              <FontAwesomeIcon icon={faQuestionCircle} aria-label="Help" /> Help
            </Link>
            <Link to="/track-order" className="header-link">
              <FontAwesomeIcon icon={faTruck} aria-label="Track Order" /> Track Order
            </Link>
          </div>
          <div className="header-right">
            <Link to="/stores" className="header-link">
              Find a Store
            </Link>
            <Link to="/" className="header-link">Bulk Orders</Link>
            <Link to="/" className="header-link">Gift Cards</Link>
            <Link to="/" className="header-link">UL Services</Link>
          </div>
        </div>
        <div className="header-middle">
          <span className="logo">
            <Link to="/" className="header-action">
              <img src={logo} alt="Logo" />
            </Link>
          </span>
          <form className="search-form" role="search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="button" className="search-button" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} aria-label="Search" />
            </button>
          </form>
          <div className="header-actions">
            <Link to="/" className="header-action">
              <FontAwesomeIcon icon={faHome} aria-label="Home" />
            </Link>
            <Link to="/track-order" className="header-action"> 
              <FontAwesomeIcon icon={faTruck} aria-label="Orders" />
            </Link>
            <Link to="/user-profile" className="header-action"> 
              <FontAwesomeIcon icon={faUser} aria-label="User" />
            </Link>
            <Link to="/wishlist" className="header-action" >
              <FontAwesomeIcon icon={faHeart} aria-label="Wishlist" />
            </Link>
            <Link to="/cart" className="header-action" >
              <FontAwesomeIcon icon={faShoppingCart} aria-label="Cart" />
            </Link>
          </div>
        </div>
        <div className="header-bottom">
          <nav className="header-nav">
            <Link to="/products/sofas" className="header-link">Sofas & Recliners</Link>
            <Link to="/products/beds" className="header-link">Bedroom & Mattresses</Link>
            <Link to="/products/dining" className="header-link">Dining</Link>
            <Link to="/products/seating" className="header-link">Seating</Link>
            <Link to="/products/coffee-tables" className="header-link">Coffee Tables</Link>
            <Link to="/products/tv-units" className="header-link">TV Units</Link>
            <Link to="/products/shoe-racks" className="header-link">Shoe Racks</Link>
            <Link to="/products/study" className="header-link">Study</Link>
            <Link to="/products/lighting" className="header-link">Lighting & Decor</Link>
            <Link to="/products/home-decor" className="header-link">Home Decor</Link>
            <Link to="/products/office-furniture" className="header-link">Office Furniture</Link>
            <Link to="/products/mattresses" className="header-link">Mattresses</Link>
            <Link to="/products/kitchenware" className="header-link">Kitchenware</Link>
            <Link to="/products/bathroom-accessories" className="header-link">Bathroom Accessories</Link>
            <Link to="/products/outdoor-furniture" className="header-link">Outdoor Furniture</Link>
            <Link to="/products/rugs-carpets" className="header-link">Rugs & Carpets</Link>
            <Link to="/products/wall-art" className="header-link">Wall Art</Link>
            <Link to="/products/planters-gardening" className="header-link">Planters & Gardening</Link>
            <Link to="/products/kids-furniture" className="header-link">Kids Furniture</Link>
            <Link to="/products/storage-solutions" className="header-link">Storage Solutions</Link>
            <Link to="/all-products" className="header-link">All Products</Link> 
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
