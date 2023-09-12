/* import React from "react"; */
import img from "../assets/images/section3.jpg";
const Content3 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row  justify-content-center" >
          <div className="col-10">
            <div className="post-preview">
              <div className="row">
                <div className="col-5 mt-4 mb-4" style={{ justifyContent: "center", textAlign: "center", alignItems: "center",margin:"auto",display:"grid",placeItems:"center" }}>
                  <img src={img} className="img-fluid rounded" alt="" srcSet="" />
                </div>
                <div className="col-7 mt-4 mb-4">
                    <h3 className="post-title">Man must explore, and this is exploration at its greatest</h3>
                    <p className="post-subtitle">Problems look mighty small from 150 miles up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
