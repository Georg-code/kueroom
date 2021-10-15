import React from "react";
import "./navbar.scss";

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
        <p>Github</p>
      </div>
    </div>
  );
}

export default Navbar;
