import { useWishlist } from "../context/WishlistContext";
import React from "react";
import Link from "next/link";

const wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  console.log("🚀 ~ file: wishlist.js:6 ~ wishlist ~ wishlist:", wishlist);

  const addtodelete = (productId) => {
    removeFromWishlist(productId);
  };
  return (
    <div style={{ textAlign: "center", margin: "20px", height:"100vh" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" ,color: "#4CAF50" }}>Wishlist</h1>
      <Link
        href="/dashboard"
        style={{
          fontSize: "18px",
          color: "#008CBA",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        Go to Dashboard
      </Link>

      <div
        style={{
          width: "80%",
          margin: "auto",
        //   border: "1px solid red",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        {wishlist &&
          wishlist.map((item) => (
            <div
              key={item.id}
              style={{
                // border: "1px solid blue",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                
                
              }}
            >
              <img
                src={item.image}
                style={{ width: "100px", marginBottom: "10px", margin:"auto" }}
              />
              <h4 style={{ fontSize: "18px", marginBottom: "8px" }}>
                Title:{item.title}
              </h4>
              <h4 style={{ fontSize: "18px", marginBottom: "8px" }}>
                Price:₹{item.price}
              </h4>
              <button
                onClick={() => addtodelete(item.id)}
                style={{
                  backgroundColor: "#f44336",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default wishlist;
