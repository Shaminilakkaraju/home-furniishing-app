import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CustomerStories from './components/CustomerStories';
import Stores from './pages/Stores';
import ProductCategories from './pages/ProductCategories';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import ErrorBoundary from './components/ErrorBoundary';
import { productData } from './components/ProductData';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import OrderConfirmation from './pages/OrderConfirmation';
import TrackOrder from './components/TrackOrder';
import UserProfile from './components/UserProfile';
import Wishlist from './components/Wishlist';
import { WishlistProvider } from './contexts/WishlistContext';
import { CartContext } from './contexts/CartContext';
import ProductSearchResults from './components/ProductSearchResults';
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        const updatedQuantity = item.quantity + newQuantity;
        if (updatedQuantity <= 0) {
          return null;
        }
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    }).filter(Boolean);

    setCartItems(updatedCart);
  };

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <ErrorBoundary>
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            <WishlistProvider>
              <div className="app">
                <Header cartQuantity={cartQuantity} />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/customer-stories" element={<CustomerStories />} />
                    <Route path="/stores" element={<Stores />} />
                    <Route path="/product-categories" element={<ProductCategories />} />
                    <Route path="/products/:slug" element={<Products addToCart={addToCart} productData={productData} />} />
                    <Route path="/product/:productId" element={<ProductDetails productData={productData} />} />
                    <Route path="/all-products" element={<Products allProducts productData={productData} addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/order-confirmation" element={<OrderConfirmation />} />
                    <Route path="/track-order" element={<TrackOrder />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/products/search/:keywords" element={<ProductSearchResults />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </WishlistProvider>
      </CartContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
