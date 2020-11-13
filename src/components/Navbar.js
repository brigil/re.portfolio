import React from 'react'
import navlogo from '../images/navlogo.png';


function Navbar() {
    return (
    
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="./aboutme.html">
      <img src={navlogo} width="150" height="50"/>
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

        <ul class="navbar-nav">

          <li class="nav-item">
            <a id class="nav-link" href="./aboutme.html">About </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./portfolio.html">Portfolio </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  
    )
}

export default Navbar;
