import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { productData } from '../components/ProductData'; 
import '../styles/productSearchResults.css'; 

const ProductSearchResults = () => {
  const { keywords } = useParams();

  const filterProducts = (keyword) => {
    const filteredProducts = [];
    for (const category in productData) {
      const productsInCategory = productData[category];
      const matchingProducts = productsInCategory.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      );
      filteredProducts.push(...matchingProducts);
    }
    return filteredProducts;
  };

  const filteredProducts = filterProducts(keywords);

  return (
    <div>
      <h2>Search Results for "{keywords}"</h2>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <Link to={`/product/${product.id}`} className="view-product-button">View Product</Link>
            </div>
          ))
        ) : (
          <p>No products found for "{keywords}".</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearchResults;
