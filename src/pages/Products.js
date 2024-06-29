import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { WishlistContext } from '../contexts/WishlistContext';
import { productData } from '../components/ProductData';
import { FaHeart } from 'react-icons/fa';
import '../styles/Products.css';


const Products = ({ allProducts, addToCart }) => {
  const { slug = 'all' } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async (categorySlug) => {
      setLoading(true);
      try {
        let simulatedProducts = [];
        if (allProducts) {
          simulatedProducts = Object.keys(productData).flatMap((category) => productData[category]);
        } else {
          simulatedProducts = productData[categorySlug];
        }
        setProducts(simulatedProducts);
      } catch (err) {
        setError('Failed to load products.');
      }
      setLoading(false);
    };

    fetchProducts(slug);
  }, [slug, allProducts]);

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleViewAllProducts = () => {
    navigate('/product-categories');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="products-container">
      <h2 className="products-heading">{allProducts ? 'All Products' : slug?.charAt(0).toUpperCase() + slug?.slice(1)}</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={product.id} className="product-grid-item">
            <div className="heart-icon-container">
              {wishlistItems.some((p) => p.id === product.id) ? (
                <FaHeart
                  className="heart-icon filled"
                  onClick={() => toggleWishlist(product)}
                />
              ) : (
                <FaHeart
                  className="heart-icon"
                  onClick={() => toggleWishlist(product)}
                />
              )}
            </div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <div className="btn-container">
              <button className="btn-add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
              <button className="btn-view-product" onClick={() => handleViewProduct(product.id)}>View Product</button>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-container">
        <button className="btn-view-all" onClick={handleViewAllProducts}>View All Products</button>
        <div className="btn-cart">
          <button>
            <Link to="/cart">Go to Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
