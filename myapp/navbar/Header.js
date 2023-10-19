import React from "react";
import Link from "next/link"

const Header = () => {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <h1
        style={{
          backgroundColor: "teal",
          padding: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        Navbar Header
      </h1>
  
    </div>
  );
};

export default Header;
