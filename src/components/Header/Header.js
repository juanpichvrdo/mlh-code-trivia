import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/" href="#" className="navbar-brand ">
          CodeTrivia
        </Link>
      </h1>
    </nav>
  );
};

export default Header;
