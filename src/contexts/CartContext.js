import React, { createContext, useState, useCallback, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const couponCodes = useMemo(
    () => [
      { code: 'FLAT5', discount: 5 },
      { code: 'V10U2', discount: 12 },
      { code: 'SUMMER20', discount: 20 },
      { code: 'WELCOME15', discount: 15 },
      { code: 'HOLIDAY10', discount: 10 },
      { code: 'STUDENT8', discount: 8 },
      { code: 'FRIEND7', discount: 7 },
    ],
    []
  );

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const totalPayable = useMemo(() => {
    return totalPrice - discount;
  }, [totalPrice, discount]);

  const calculateDeliveryDate = useMemo(() => {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(deliveryDate.getDate() + 7); 
    return deliveryDate.toLocaleDateString('en-US'); 
  }, []);

  const applyCoupon = useCallback(
    (code) => {
      const selectedCoupon = couponCodes.find((coupon) => coupon.code === code);
      if (selectedCoupon) {
        setCouponCode(selectedCoupon.code);
        setDiscount(totalPrice * (selectedCoupon.discount / 100));
      } else {
        setCouponCode('');
        setDiscount(0);
      }
    },
    [couponCodes, totalPrice]
  );

  const addToCart = useCallback(
    (product) => {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    },
    [setCartItems]
  );

  const removeFromCart = useCallback(
    (productId) => {
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
    },
    [setCartItems]
  );

  const updateQuantity = useCallback(
    (productId, newQuantity) => {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => {
          if (item.id === productId) {
            const updatedQuantity = item.quantity + newQuantity;
            if (updatedQuantity <= 0) {
              return null; 
            }
            return { ...item, quantity: updatedQuantity };
          }
          return item;
        })
      );
    },
    [setCartItems]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
    setDeliveryAddress('');
    setDeliveryDate('');
    setCouponCode('');
    setDiscount(0);
  }, []);

  const selectPaymentMethod = useCallback((method) => {
    setPaymentMethod(method);
  }, []);

  const processPayment = useCallback(async () => {
    try {
     
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setPaymentStatus('success');
      clearCart();
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('failure');
    }
  }, [clearCart]);

  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      totalPrice,
      totalPayable,
      applyCoupon,
      couponCode,
      discount,
      paymentMethod,
      paymentStatus,
      selectPaymentMethod,
      processPayment,
      calculateDeliveryDate,
      deliveryAddress,
      setDeliveryAddress,
      deliveryDate,
      setDeliveryDate,
    }),
    [
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      totalPrice,
      totalPayable,
      applyCoupon,
      couponCode,
      discount,
      paymentMethod,
      paymentStatus,
      selectPaymentMethod,
      processPayment,
      calculateDeliveryDate,
      deliveryAddress,
      setDeliveryAddress,
      deliveryDate,
      setDeliveryDate,
    ]
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
