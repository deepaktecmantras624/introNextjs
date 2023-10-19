import React, { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [added, setAdded]=useState({})

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    console.log("🚀 ~ file: WishlistContext.js:11 ~ addToWishlist ~ wishlist:", wishlist)
    setAdded(prevState=>({
      ...prevState, [product.id]:true
  }))
  };

  useEffect(()=> {
     
    
  },[wishlist] )

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    setAdded(false)
  };


  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, added }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
