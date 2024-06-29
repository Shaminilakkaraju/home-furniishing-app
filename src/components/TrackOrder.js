import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/TrackOrder.css';

const TrackOrder = () => {
  const { cartItems } = useContext(CartContext);

  const simulateDeliveryStatus = () => {
    const statuses = ['In Transit', 'Out for Delivery', 'Delivered'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

  const generateTrackingId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let trackingId = '';
    for (let i = 0; i < 10; i++) {
      if (i < 2) {
        trackingId += letters.charAt(Math.floor(Math.random() * letters.length));
      } else {
        trackingId += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
    }
    return trackingId;
  };

  return (
    <div className="track-order">
      <h2>Track Your Order</h2>
      <div className="order-details">
        <h3>Order Details</h3>
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
                <span>Tracking ID: {generateTrackingId()}</span> 
                <span>Delivery Status: {simulateDeliveryStatus()}</span> 
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackOrder;
