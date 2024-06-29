import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/Payment.css';

const Payment = () => {
  const { totalPrice } = useContext(CartContext);
  const totalPayable = totalPrice;
  const navigate = useNavigate();

  const [selectedMethod, setSelectedMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });
  const [upiId, setUpiId] = useState('');
  const [upiMethod, setUpiMethod] = useState('googlePay'); 
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handlePayment = () => {
    setTimeout(() => {
      setShowSuccessPopup(true);
    }, 1500);
  };

  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleUPIInputChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleUpiMethodChange = (event) => {
    setUpiMethod(event.target.value);
  };

  const handlePayNow = () => {
    switch (selectedMethod) {
      case 'card':
        if (validateCardDetails()) {
          handlePayment();
        }
        break;
      case 'upi':
        if (validateUPI()) {
          handlePayment();
        }
        break;
      case 'cod':
        handlePayment();
        break;
      default:
        break;
    }
  };

  const validateCardDetails = () => {
    return (
      cardDetails.cardNumber !== '' &&
      cardDetails.cardHolderName !== '' &&
      cardDetails.expiryDate !== '' &&
      cardDetails.cvv !== ''
    );
  };

  const validateUPI = () => {
    return upiId !== '';
  };

  const handleSuccessPopupOk = () => {
    setShowSuccessPopup(false);
    navigate('/order-confirmation'); 
  };

  return (
    <div className="payment">
      <h2>Payment</h2>
      <div className="payment-methods">
        <div className="method-selector">
          <label>Select Payment Method:</label>
          <div>
            <input
              type="radio"
              id="card"
              value="card"
              checked={selectedMethod === 'card'}
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <label htmlFor="card">Credit/Debit Card</label>
          </div>
          <div>
            <input
              type="radio"
              id="upi"
              value="upi"
              checked={selectedMethod === 'upi'}
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <label htmlFor="upi">UPI</label>
          </div>
          <div>
            <input
              type="radio"
              id="cod"
              value="cod"
              checked={selectedMethod === 'cod'}
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
        </div>

        {selectedMethod === 'card' && (
          <div className="card-payment">
            <h3>Credit/Debit Card Payment</h3>
            <div className="form-group">
              <label>Card Number:</label>
              <input type="text" name="cardNumber" value={cardDetails.cardNumber} onChange={handleCardInputChange} />
            </div>
            <div className="form-group">
              <label>Card Holder Name:</label>
              <input type="text" name="cardHolderName" value={cardDetails.cardHolderName} onChange={handleCardInputChange} />
            </div>
            <div className="form-group">
              <label>Expiry Date:</label>
              <input type="text" name="expiryDate" value={cardDetails.expiryDate} onChange={handleCardInputChange} />
            </div>
            <div className="form-group">
              <label>CVV:</label>
              <input type="text" name="cvv" value={cardDetails.cvv} onChange={handleCardInputChange} />
            </div>
          </div>
        )}

        {selectedMethod === 'upi' && (
          <div className="upi-payment">
            <h3>UPI Payment</h3>
            <div className="form-group">
              <label>Select UPI Method:</label>
              <div>
                <input
                  type="radio"
                  id="googlePay"
                  value="googlePay"
                  checked={upiMethod === 'googlePay'}
                  onChange={handleUpiMethodChange}
                />
                <label htmlFor="googlePay">Google Pay</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="phonePe"
                  value="phonePe"
                  checked={upiMethod === 'phonePe'}
                  onChange={handleUpiMethodChange}
                />
                <label htmlFor="phonePe">PhonePe</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="paytm"
                  value="paytm"
                  checked={upiMethod === 'paytm'}
                  onChange={handleUpiMethodChange}
                />
                <label htmlFor="paytm">Paytm</label>
              </div>
            </div>
            <div className="form-group">
              <label>UPI ID:</label>
              <input type="text" name="upiId" value={upiId} onChange={handleUPIInputChange} />
            </div>
          </div>
        )}

        {totalPayable !== undefined && (
          <h4>Total Payable Amount: ₹{totalPayable.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</h4>
        )}
      </div>

      <div className="payment-buttons">
        <button onClick={() => navigate('/checkout')}>Back to Checkout</button>
        <button onClick={handlePayNow}>Pay Now</button>
      </div>

      {showSuccessPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <h3>Payment Successful!</h3>
            <button onClick={handleSuccessPopupOk}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
