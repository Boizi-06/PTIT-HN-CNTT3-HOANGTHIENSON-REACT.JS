import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "10px", background: "#0d6efd" }}>
      <Link to="/" style={{ margin: "0 10px", color: "#fff" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 10px", color: "#fff" }}>
        About
      </Link>
      <Link to="/contact" style={{ margin: "0 10px", color: "#fff" }}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
