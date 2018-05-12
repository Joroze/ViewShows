import "./TopNavigator.css";
import React from "react";
import { Link } from "react-router-dom";

function TopNavigator() {
  return (
    <header className="component-top-navigator">
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/shows">Shows</Link>
    </header>
  );
}

export default TopNavigator;
