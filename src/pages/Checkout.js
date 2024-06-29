import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    pinCode: '',
    email: '',
    mobile: ''
  });

  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    pinCode: '',
    country: 'India',
    phone: ''
  });

  const [useBillingAddress, setUseBillingAddress] = useState(true);
  const [formErrors, setFormErrors] = useState({
    shipping: {
      firstName: false,
      lastName: false,
      address: false,
      pinCode: false,
      email: false,
      mobile: false
    },
    billing: {
      firstName: false,
      lastName: false,
      address: false,
      pinCode: false,
      phone: false
    }
  });

  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    if (location.state && location.state.discountAmount) {
      setDiscountAmount(location.state.discountAmount);
    }
  }, [location.state]);

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryCharge = 499;
  const totalPayable = cartTotal - discountAmount + deliveryCharge;

  const handleProceedToPayment = (event) => {
    event.preventDefault();
    if (validateForm()) {
      saveFormData();
      navigate('/payment');
    } else {
      alert('Please fill out all required fields marked with *');
    }
  };

  const handleBackToCart = () => {
    navigate('/cart');
  };

  const handleInputChange = (event, type) => {
    const { name, value } = event.target;
    if (type === 'shipping') {
      setShippingAddress({ ...shippingAddress, [name]: value });
    } else if (type === 'billing') {
      setBillingAddress({ ...billingAddress, [name]: value });
    }
  };

  const toggleBillingAddress = () => {
    setUseBillingAddress(!useBillingAddress);
  };

  const validateForm = () => {
    let isValid = true;
    const shippingErrors = { ...formErrors.shipping };
    const billingErrors = { ...formErrors.billing };

    Object.keys(shippingAddress).forEach(field => {
      if (shippingAddress[field] === '' && field !== 'lastName') {
        shippingErrors[field] = true;
        isValid = false;
      } else {
        shippingErrors[field] = false;
      }
    });

    if (!useBillingAddress) {
      Object.keys(billingAddress).forEach(field => {
        if (billingAddress[field] === '') {
          billingErrors[field] = true;
          isValid = false;
        } else {
          billingErrors[field] = false;
        }
      });
    }

    setFormErrors({ shipping: shippingErrors, billing: billingErrors });
    return isValid;
  };

  const saveFormData = () => {
    console.log('Shipping Address:', shippingAddress);
    console.log('Billing Address:', useBillingAddress ? shippingAddress : billingAddress);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-container">
        <form onSubmit={handleProceedToPayment}>
          <div className="checkout-section">
            <div className="addresses-container">
              <div className="shipping-address">
                <h3>Shipping Address</h3>
                <div className={`form-group ${formErrors.shipping.firstName ? 'has-error' : ''}`}>
                  <label>First Name *</label>
                  <input type="text" name="firstName" value={shippingAddress.firstName} onChange={(e) => handleInputChange(e, 'shipping')} />
                  {formErrors.shipping.firstName && <span className="error-message">Please enter your first name.</span>}
                </div>
                <div className={`form-group ${formErrors.shipping.lastName ? 'has-error' : ''}`}>
                  <label>Last Name *</label>
                  <input type="text" name="lastName" value={shippingAddress.lastName} onChange={(e) => handleInputChange(e, 'shipping')} />
                  {formErrors.shipping.lastName && <span className="error-message">Please enter your last name.</span>}
                </div>
                <div className={`form-group ${formErrors.shipping.address ? 'has-error' : ''}`}>
                  <label>Address *</label>
                  <textarea name="address" value={shippingAddress.address} onChange={(e) => handleInputChange(e, 'shipping')} />
                  {formErrors.shipping.address && <span className="error-message">Please enter your address.</span>}
                </div>
                <div className={`form-group ${formErrors.shipping.pinCode ? 'has-error' : ''}`}>
                  <label>Pin Code *</label>
                  <input type="text" name="pinCode" value={shippingAddress.pinCode} onChange={(e) => handleInputChange(e, 'shipping')} />
                  {formErrors.shipping.pinCode && <span className="error-message">Please enter your pin code.</span>}
                </div>
                <div className={`form-group ${formErrors.shipping.email ? 'has-error' : ''}`}>
                  <label>Email *</label>
                  <input type="email" name="email" value={shippingAddress.email} onChange={(e) => handleInputChange(e, 'shipping')} />
                  {formErrors.shipping.email && <span className="error-message">Please enter your email.</span>}
                </div>
                <div className={`form-group ${formErrors.shipping.mobile ? 'has-error' : ''}`}>
                  <label>Mobile *</label>
                  <input type="tel" name="mobile" value={shippingAddress.mobile} onChange={(e) => handleInputChange(e, 'shipping')} />
                  {formErrors.shipping.mobile && <span className="error-message">Please enter your mobile number.</span>}
                </div>
              </div>

              {!useBillingAddress && (
                <div className="billing-address">
                  <h3>Billing Address</h3>
                  <div className={`form-group ${formErrors.billing.firstName ? 'has-error' : ''}`}>
                    <label>First Name *</label>
                    <input type="text" name="firstName" value={billingAddress.firstName} onChange={(e) => handleInputChange(e, 'billing')} />
                    {formErrors.billing.firstName && <span className="error-message">Please enter your first name.</span>}
                  </div>
                  <div className={`form-group ${formErrors.billing.lastName ? 'has-error' : ''}`}>
                    <label>Last Name *</label>
                    <input type="text" name="lastName" value={billingAddress.lastName} onChange={(e) => handleInputChange(e, 'billing')} />
                    {formErrors.billing.lastName && <span className="error-message">Please enter your last name.</span>}
                  </div>
                  <div className={`form-group ${formErrors.billing.address ? 'has-error' : ''}`}>
                    <label>Address *</label>
                    <textarea name="address" value={billingAddress.address} onChange={(e) => handleInputChange(e, 'billing')} />
                    {formErrors.billing.address && <span className="error-message">Please enter your address.</span>}
                  </div>
                  <div className={`form-group ${formErrors.billing.pinCode ? 'has-error' : ''}`}>
                    <label>Pin Code *</label>
                    <input type="text" name="pinCode" value={billingAddress.pinCode} onChange={(e) => handleInputChange(e, 'billing')} />
                    {formErrors.billing.pinCode && <span className="error-message">Please enter your pin code.</span>}
                  </div>
                  <div className={`form-group ${formErrors.billing.phone ? 'has-error' : ''}`}>
                    <label>Mobile *</label>
                    <input type="tel" name="phone" value={billingAddress.phone} onChange={(e) => handleInputChange(e, 'billing')} />
                    {formErrors.billing.phone && <span className="error-message">Please enter your phone number.</span>}
                  </div>
                </div>
              )}
            </div>

            <div className="billing-toggle">
              <input type="checkbox" id="useBillingAddress" checked={useBillingAddress} onChange={toggleBillingAddress} />
              <label htmlFor="useBillingAddress">Use shipping address as billing address</label>
            </div>
          </div>

          <div className="checkout-section order-summary">
            <h3>Order Summary</h3>
            {cartItems.map(product => (
              <div key={product.id} className="cart-item">
                <div className="checkout-item-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="cart-item-details">
                  <h4>{product.name}</h4>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ₹{product.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                </div>
              </div>
            ))}
            <p>Order Total: ₹{cartTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            {discountAmount > 0 && (
              <p>Discount Applied: ₹{discountAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            )}
            <p>Delivery Charges: ₹{deliveryCharge}</p>
            <h4>Total Payable Amount: ₹{totalPayable.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</h4>
          </div>

          <div className="checkout-buttons">
            <button type="button" className="back-to-cart" onClick={handleBackToCart}>
              Back to Cart
            </button>
            <button type="submit" className="proceed-to-payment">
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
