import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const couponCodes = [
    { code: 'FLAT5', discount: 5 },
    { code: 'V10U2', discount: 12 },
    { code: 'SUMMER20', discount: 20 },
    { code: 'WELCOME15', discount: 15 },
    { code: 'HOLIDAY10', discount: 10 },
    { code: 'STUDENT8', discount: 8 },
    { code: 'FRIEND7', discount: 7 },
  ];

  const handleCouponChange = (event) => {
    const selectedCouponCode = event.target.value;
    const selectedCoupon = couponCodes.find(coupon => coupon.code === selectedCouponCode);
    if (selectedCoupon) {
      setCouponCode(selectedCoupon.code);
      applyDiscount(selectedCoupon.discount);
    } else {
      setCouponCode('');
      applyDiscount(0);
    }
  };

  const applyDiscount = (discountPercentage) => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discountAmount = (totalPrice * discountPercentage / 100).toFixed(2);
    return parseFloat(discountAmount);
  };

  const incrementQuantity = (itemId) => updateQuantity(itemId, 1);
  const decrementQuantity = (itemId) => updateQuantity(itemId, -1);

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryCharge = 499;
  const discountAmount = applyDiscount(couponCodes.find(coupon => coupon.code === couponCode)?.discount || 0);
  const totalPayableAmount = (totalPrice - discountAmount + deliveryCharge).toFixed(2);

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    removeFromCart(product.id);
  };

  const handleRemoveFromCart = (productId) => {
    updateQuantity(productId, 0);
    removeFromCart(productId);
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout', { state: { discountAmount } });
  };

  const showPopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setSelectedProduct(null);
    setPopupVisible(false);
  };

  const handlePopupRemoveFromCart = () => {
    handleRemoveFromCart(selectedProduct.id);
    hidePopup();
  };

  const handlePopupAddToWishlist = () => {
    handleAddToWishlist(selectedProduct);
    hidePopup();
  };

  const getDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + 7)); 
    return deliveryDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const handleContinueShopping = () => {
    navigate(-1);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>PRODUCTS</th>
                <th>DELIVERY DATE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="cart-item-image-container">
                    <img src={product.image} alt={product.name} className="cart-item-image" />
                    </div>
                    <p className="cart-item-name">{product.name}</p>
                  </td>
                  <td>{getDeliveryDate()}</td>
                  <td>
                    <div className="quantity-controls">
                      <button onClick={() => decrementQuantity(product.id)}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => incrementQuantity(product.id)}>+</button>
                    </div>
                  </td>
                  <td>
                    <p className="cart-item-total">₹{(product.price * product.quantity).toFixed(2)}</p>
                  </td>
                  <td>
                    <button className="remove-button" onClick={() => showPopup(product)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <p>Cart Total: ₹{totalPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            <p>
              Discounts: 
              <select value={couponCode} onChange={handleCouponChange}>
                <option value="">Select a coupon</option>
                {couponCodes.map((coupon) => (
                  <option key={coupon.code} value={coupon.code}>{coupon.code} - {coupon.discount}% off</option>
                ))}
              </select>
            </p>
            {discountAmount > 0 && (
              <p>🎉 Woah!!! You've saved ₹{discountAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            )}
            <p>Delivery Charges: ₹{deliveryCharge.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            <p>Total Payable Amount: ₹{totalPayableAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
          </div>
          <p>
            You can cancel your order before shipped, and a full refund will be initiated.
          </p>
          <button className="continue-shopping" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="proceed-to-checkout" onClick={handleProceedToCheckout}>
            Checkout
          </button>
        </div>
      )}

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>What would you like to do with {selectedProduct.name}?</p>
            <button onClick={handlePopupAddToWishlist}>Add to Wishlist</button>
            <button onClick={handlePopupRemoveFromCart}>Remove from Cart</button>
            <button onClick={hidePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
