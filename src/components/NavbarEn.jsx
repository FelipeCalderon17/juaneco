/* import React from "react"; */

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="index.html">
              Juan Eco Coffee
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">
                    ES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-lg-3 py-3 py-lg-4" href="indexEn.html">
                    EN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </>
    );
  };
  
  export default Navbar;
  