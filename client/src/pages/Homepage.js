import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import HomepageImage from "./images/homepage-background.jpg";

const Homepage = () => {
  return (
    <div className="homepage">

      <div className="hero-text">
        <p>Sleek. Chic. Unstoppable.</p>
        <h1>Get up to 30% Off</h1>
        <h2>Summer Collection</h2>
        <Link to="/products" className="shop-now-button">
          SHOP NOW
        </Link>
      </div>

      <div className="hero-style">
        <div className="new-label">
          <p>NEW</p>
        </div>
        <div className="fits-label">
          <p>FITS</p>
        </div>
        <div className="fits-year">
          <p>2025</p>
        </div>
      </div>

    </div>
  );
};

export default Homepage;
