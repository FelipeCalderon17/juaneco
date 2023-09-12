/* import img from "../assets/images/content2.jpg"; */
import img2 from "../assets/images/secadoalsol.jpg";
const Content2En = () => {
    return (  <>
    <div className="container-fluid">
        <div className="row  justify-content-center" style={{backgroundColor:"bisque"}} >
          <div className="col-10">
            <div className="post-preview">
              <div className="row">
                <div className="col-7 mt-4 mb-4" >
                <p className="post-subtitle">Planting and establishment of artisanal seedbeds and nurseries, selection of coffee seeds, tracing, manual artisanal sowing, cultivation under shade with allelopathy concepts, manual weed control with tools, and fertilization with permitted chemical products as agroecological practices, manual, selective, and careful harvesting of fruits at the optimal degree of ripeness, traditional fermentation with local environmental microorganisms with traditional time and conditions management, renewal through pruning, stump cutting, and total reseeding in empty spaces, application of organic soil amendments, conservation and protection plans for native flora and fauna.</p>
                </div>
                <div className="col-5 mt-5 mb-5" style={{ justifyContent: "center", textAlign: "center", alignItems: "center",margin:"auto",display:"grid",placeItems:"center" }}>
                <img src={img2} className="img-fluid rounded" alt="" srcSet="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
}
 
export default Content2En;