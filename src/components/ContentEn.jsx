/* import React from "react"; */
import img from "../assets/images/section2.jpg";

const ContentEn = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row  justify-content-center" >
          <div className="col-10">
            <div className="post-preview">
              <div className="row">
                <div className="col-5 mt-5 mb-4" style={{ justifyContent: "center", textAlign: "center", alignItems: "center", margin:"auto",display:"grid",placeItems:"center" }}>
                  <img src={img} className="img-fluid rounded" alt="" srcSet="" />
                </div>
                {/* <div className="col-3 mb-4" style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                  <img src={img2} className="img-fluid rounded" alt="" srcSet="" />
                </div> */}
                <div className="col-7 mb-4">
                    <p className="post-subtitle">We contribute to preserving the coffee culture throughout the country, promoting the combination of traditional practices with modern cultivation technologies, soil management under sustainability principles that protect and restore nature, regenerating the natural habitat where our ancestors produced the high-quality coffee that positioned Colombia as a leader in the international market for mild Arabica coffee.</p>
                    <p>We can achieve this mission only by obtaining economic recognition for quality, which is a direct reflection of the symbiosis between culture, biome, climate, and the implementation of sustainable production practices promoted and implemented at the base of the productive chain, which are part of our actions as a link in the value chain of both specialty and conventional coffees.</p>
                      <p>To this end, we are responsible for supporting producers and producer associations with assistance in rural extension, traceability, processing, collection, transformation, quality selection, logistics, and marketing of both specialty and conventional coffees, recovering the values of the chain and distributing them equitably among all its members.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentEn;
