import React, { useState } from 'react';
import { productData } from '../components/ProductData';
import { useNavigate } from 'react-router-dom';
import '../styles/UserProfile.css'; 

function UserProfile() {
  const [firstName, setFirstName] = useState('Shamini');
  const [lastName, setLastName] = useState('Lakkaraju');
  const [phoneNumber, setPhoneNumber] = useState('9876543210');
  const [email, setEmail] = useState('shaminilakkaraju@gmail.com');
  const [isEditing, setIsEditing] = useState(false);
  const [orders] = useState([
    { id: getRandomOrderId(), date: '2024-06-01', items: [{ productId: getRandomProductId(), quantity: getRandomQuantity() }] },
    { id: getRandomOrderId(), date: '2024-05-15', items: [{ productId: getRandomProductId(), quantity: getRandomQuantity() }] },
    { id: getRandomOrderId(), date: '2024-04-20', items: [{ productId: getRandomProductId(), quantity: getRandomQuantity() }] },
    { id: getRandomOrderId(), date: '2024-03-05', items: [{ productId: getRandomProductId(), quantity: getRandomQuantity() }] },
    { id: getRandomOrderId(), date: '2024-02-10', items: [{ productId: getRandomProductId(), quantity: getRandomQuantity() }] },
    { id: getRandomOrderId(), date: '2023-12-25', items: [{ productId: getRandomProductId(), quantity: getRandomQuantity() }] },
    { id: getRandomOrderId(), date: '2023-11-08', items: [{ productId: getRandomProductId(), quantity: getRandomQuantity() }] },
  ]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const getProduct = (id) => {
    for (const category in productData) {
      const product = productData[category].find(p => p.id === id);
      if (product) {
        return product;
      }
    }
    return null;
  };

  const getProductDetails = (productId) => {
    const product = getProduct(productId);
    if (product) {
      return {
        name: product.name,
        image: product.image,
        price: product.price,
      };
    }
    return {
      name: 'Unknown Product',
      image: '',
      price: 0,
    };
  };

  const handleOrderAgain = (productId) => {
    navigate(`/product/${productId}`);
  };

  function getRandomProductId() {
    return Math.floor(Math.random() * 100) + 1; 
  }

  function getRandomQuantity() {
    return Math.floor(Math.random() * 5) + 1; 
  }

  function getRandomOrderId() {
    return Math.floor(Math.random() * 1000) + 1; 
  }

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {!isEditing ? (
        <div className="profile-section">
          <p><strong>Name:</strong> {firstName} {lastName}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Email:</strong> {email}</p>
          <button className="edit-profile-button" onClick={toggleEditMode}>Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-input" />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-input" />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-input" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
          </label>
          <br />
          <button type="submit" className="save-button">Save</button>
          <button type="button" onClick={toggleEditMode} className="cancel-button">Cancel</button>
        </form>
      )}
      <h3 className="past-orders">Past Orders:</h3>
      {orders.map(order => (
        <div key={order.id} className="order-container">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <div className="order-details">
            <strong>Items:</strong>
            {order.items.map((item, index) => {
              const { name, image, price } = getProductDetails(item.productId);
              return (
                <div key={index} className="order-item">
                  <div className="item-image">
                    <img src={image} alt={name} />
                  </div>
                  <div className="order-item-details">
                    <p>{name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                    <button onClick={() => handleOrderAgain(item.productId)} className="order-item-button">Order Again</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
