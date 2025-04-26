import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Navbar.css";
import Bag from "./images/bag.png";
import Heart from "./images/heart.png";
import Search from "./images/search.png";
import Profile from "./images/profile.jpg";

const Navbar = () => {
  return(
    <div className="navbar">
      <nav>
        <ul>
          <h2 className="heading-main">shrique</h2>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Trending</Link></li>
          <li><Link to="/sale">Sale</Link></li>

          <li><Link to="/cart">
            <img src={Bag} alt="Bag"/></Link>
          </li>
          <li><Link to="/liked">
            <img src={Heart} alt="Heart"/></Link>
          </li>
          <li> <img src={Search} alt="Search"/> </li>
          <li> <img src={Profile} alt="Profile"/> </li>
        </ul>  
      </nav>
    </div>
  );
};

export default Navbar;