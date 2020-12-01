import React from 'react'



function Navbar() {
    return (
    
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="./aboutme.html">
      <img src="https://fontmeme.com/temporary/55b66cd6cb9c8fdb303d88c74bd7d411.png" width="50" height="40"/>
      <img src="https://fontmeme.com/temporary/87810fb898b2de25295d3cbf26606a9f.png" width="70" height="40"/></a>
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
