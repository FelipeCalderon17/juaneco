/* import img from "../assets/images/content2.jpg"; */
import img2 from "../assets/images/secadoalsol.jpg";
const Content2 = () => {
    return (  <>
    <div className="container-fluid">
        <div className="row  justify-content-center" style={{backgroundColor:"bisque"}} >
          <div className="col-10">
            <div className="post-preview">
              <div className="row">
                <div className="col-7 mt-4 mb-4" >
                <p className="post-subtitle">Siembra y establecimiento de semilleros y almácigos artesanales, selección de la semilla de café 
                trazado, ollado, sembrado manual artesanal, cultivos bajo sombra con conceptos de alelopatía, limpias manuales con herramientas y fertilizaciones con 
                productos químicos permitidos como prácticas agroecologicas, recolección manual, selectiva y cuidadosa de frutos con un grado de maduración óptimo, 
                fermentación tradicional con microorganismos del ambiente local con manejo de tiempo y condiciones tradicionales, renovación por podas, soqueo y
                resiembra total en espacios vacíos, aplicación de enmiendas órganicas al suelo, planes de conservación y protección de flora y fauna nativa.</p>
                </div>
                <div className="col-5 mt-5 mb-5" style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                <img src={img2} className="img-fluid rounded" alt="" srcSet="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
}
 
export default Content2;