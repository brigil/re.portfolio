import React from 'react'
import "../styles/Navbar.css";



function Navbar() {
    return (
    
       <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="./aboutme.html">
      <img src="https://fontmeme.com/temporary/55b66cd6cb9c8fdb303d88c74bd7d411.png" width="50" height="40"/>
      <img src="https://fontmeme.com/permalink/201201/87810fb898b2de25295d3cbf26606a9f.png" width="70" height="40"/></a>
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

      <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/loginsignup">Portfolio </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/savedtours">Contact</a>
          </li>

        </ul>
      </div>
    </nav>
  
    )
}

export default Navbar;
