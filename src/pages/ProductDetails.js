import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productData } from '../components/ProductData';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import { FaHeart, FaStar, FaRegStar, FaUser, FaQuoteLeft } from 'react-icons/fa';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);

  const product = getProductById(productId);

  function getProductById(productId) {
    for (const category in productData) {
      const foundProduct = productData[category].find(item => item.id === parseInt(productId));
      if (foundProduct) {
        return foundProduct;
      }
    }
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
  };

  const handleViewAllProducts = () => {
    navigate('/product-categories');
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  const renderStarRatings = (rating) => {
    const stars = [];
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={i} className="star-icon filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star-icon half-filled" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star-icon empty" />);
    }

    return (
      <div className="star-ratings">
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="product-details">
      <div className="product-header">
        <h2>{product.name}</h2>
        <div className="wishlist-icon-container">
          {wishlistItems.some((p) => p.id === product.id) ? (
            <FaHeart
              className="heart-icon filled"
              onClick={handleToggleWishlist}
            />
          ) : (
            <FaHeart
              className="heart-icon"
              onClick={handleToggleWishlist}
            />
          )}
        </div>
      </div>
      <div className="product-image">
      <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <p className="product-price">₹{product.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
        <p className="product-description">{product.description}</p>
        <p><strong>Dimensions:</strong> {product.dimensions}</p>
        <p><strong>Material:</strong> {product.material}</p>
        <p><strong>Colour:</strong> {product.color}</p>
        {product.reviews && (
          <div className="product-reviews">
            <h3>Reviews:</h3>
              {product.reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <FaUser className="user-icon" />
                    <strong className="customer-name">{review.customer}</strong>
                    {renderStarRatings(review.rating)}
                  </div>
                  <p className="review-text">
                    <FaQuoteLeft className="quote-icon" />
                    {review.review}
                  </p>
                </div>
              ))}
          </div>
        )}
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <button className="view-all-products" onClick={handleViewAllProducts}>View All Products</button>
      </div>
    </div>
  );
};

export default ProductDetails;
