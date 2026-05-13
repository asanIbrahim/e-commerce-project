import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">MyShop</Link>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Homes</Link>
        <Link to="/products">Products</Link>
      </div>

      <div>Cart (0)</div>
    </div>
  );
}

export default Navbar;
