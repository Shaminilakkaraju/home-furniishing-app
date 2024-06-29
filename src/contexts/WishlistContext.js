import React, { createContext, useState } from 'react';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlistItems.some((p) => p.id === product.id)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter((p) => p.id !== productId));
  };

  const toggleWishlist = (product) => {
    if (wishlistItems.some((p) => p.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isProductInWishlist = (productId) => {
    return wishlistItems.some((p) => p.id === productId);
  };

  const getWishlistItemQuantity = (productId) => {
    const item = wishlistItems.find((p) => p.id === productId);
    return item ? item.quantity : 0;
  };

  const updateWishlistItemQuantity = (productId, newQuantity) => {
    setWishlistItems(
      wishlistItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const removeWishlistItemQuantity = (productId) => {
    setWishlistItems(wishlistItems.filter((p) => p.id !== productId));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isProductInWishlist,
        getWishlistItemQuantity,
        updateWishlistItemQuantity,
        removeWishlistItemQuantity,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };