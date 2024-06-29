import React, { useState, useEffect } from 'react';
import { productData } from '../components/ProductData'; 
import '../styles/AllProducts.css'; // Import your CSS file

const AllProducts = ({ addToCart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const allProductsArray = Object.values(productData).flatMap(category => category);
        setAllProducts(allProductsArray);
      } catch (err) {
        setError('Failed to load products.');
      }
      setLoading(false);
    };

    fetchAllProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="products-container">
      {allProducts.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
