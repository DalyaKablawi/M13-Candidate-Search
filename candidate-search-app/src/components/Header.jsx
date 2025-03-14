import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Candidate Search</h1>
      <nav>
        <Link to="/">Search Candidates</Link> |{" "}
        <Link to="/saved">Saved Candidates</Link>
      </nav>
    </header>
  );
};

export default Header;
