import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  const { cartItems, totalPayable, clearCart, order } = useContext(CartContext);

  useEffect(() => {
    if (order && order.status === 'success') {
      clearCart();
    }
  }, [order, clearCart]);

  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((product) => (
            <li key={product.id} className="order-item">
              <div className="item-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="item-details">
                <span>{product.name}</span>
                <span>Quantity: {product.quantity}</span>
                <span>Price: ₹{product.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
              </div>
            </li>
          ))}
        </ul>
        {totalPayable !== undefined && (
          <h4>Total Payable Amount: ₹{totalPayable.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</h4>
        )}
      </div>
      <div className="thank-you-message">
        <p>Thank you for your order!</p>
      </div>
      <div className="track-order">
        <Link to="/track-order">
          <button>Track Your Order</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
