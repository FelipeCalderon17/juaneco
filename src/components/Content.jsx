/* import React from "react"; */
import img from "../assets/images/section2.jpg";

const Content = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row  justify-content-center" >
          <div className="col-10">
            <div className="post-preview">
              <div className="row">
                <div className="col-5 mt-4 mb-4" style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                  <img src={img} className="img-fluid rounded" alt="" srcSet="" />
                </div>
                {/* <div className="col-3 mb-4" style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                  <img src={img2} className="img-fluid rounded" alt="" srcSet="" />
                </div> */}
                <div className="col-7 mb-4">
                    <p className="post-subtitle">Contribuimos a preservar la cultura cafetera a lo largo del país, promoviendo la combinación de prácticas tradicionales con tecnologías 
                    modernas de cultivo, manejo de suelos bajo principios de sostenibilidad que protejan y restauren la naturaleza, regenerando el hábitat natural donde nuestros ancestros produjeron
                    el café de calidad que posicionó a Colombia como líder de arábicos suaves en el mercado internacional.</p>
                    <p>Esta misión la podremos lograr solo obteniendo un reconocimiento económico por la calidad, que es reflejo directo de la simbiosis entre cultura, bioma, 
                      clima y la implementación de practicas productivas sostenibles promovidas e implementadas en la base de la cadena productiva que hacen parte de nuestras acciones 
                      como eslabon de la cadena de valor de cafés especiales y convencionales.</p>
                      <p>Para tal fin nos encargamos de apoyar a productores y asociaciones de productores con acompañamiento en extensión rural, trazabilidad, procesos, acopio, transformación,
                      selección de calidades, logística y comercialización de cafés especiales y convencionales recuperando los valores de la cadena y distribuyéndolos equitativamente entre todos sus integrantes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
