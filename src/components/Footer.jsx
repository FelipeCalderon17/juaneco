const Footer = () => {
  return (
    <>
      <footer className="border-top">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <ul className="list-inline text-center" style={{alignItems:"center"}}>
                <li className="list-inline-item"></li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/juaneco-compa%C3%B1%C3%ADa-cafetera-s-a-s-3b3497108/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/juanecocoffee/">
                  <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/robertmazcortez">
                  <i className="bi bi-facebook"></i>
                  </a>
                </li>
              </ul>
              <div className="small text-center text-muted fst-italic">Copyright &copy; JuanEcoCoffee 2023</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
