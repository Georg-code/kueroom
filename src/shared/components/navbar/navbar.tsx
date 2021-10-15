import React from "react";
import "./navbar.scss";
import Button from "../button/button";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <a href='/'>KueRoom</a>
      </div>
      <div className='navbar__middle'>
        <a href='/about'>About</a>
        <p className='navbar__dot'>.</p>
        <a href='/privacy'> Privacy</a>
        <p className='navbar__dot'>.</p>
        <a href='/support'>Support</a>
      </div>
      <div className='navbar__right'>
        <a href='/github'>Github</a>
      </div>
    </div>
  );
}

export default Navbar;
