/* import React from "react"; */
import img from "../assets/images/banner2.jpg";
const Header = () => {
  return (
    <>
      <header className="masthead" style={{ backgroundImage: "url('" + img + "')" }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Juan Eco Coffee</h1>
                <span className="subheading">Marketing supply chain of Colombian Sustainable Specialty Coffee</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
