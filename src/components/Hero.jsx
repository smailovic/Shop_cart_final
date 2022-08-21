import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Hero=() =>{
 return (
    <div>
    <section className="pt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center py-6">
              <h1 className="mb-4 fs-9 fw-bold">Sell your Beats and be Seen</h1>
              <p className="mb-6 lead text-secondary">You make beats and want to buy/sell or be seen <br className="d-none d-xl-block" /> I made this platform for you <br className="d-none d-xl-block" />you just have to focus on what you love</p>
              <div className="text-center text-md-start"><a className="btn btn-warning me-3 btn-lg" href="#!" role="button">Shop Now </a><a className="btn btn-link text-warning fw-medium" href="#!" role="button" data-bs-toggle="modal" data-bs-target="#popupVideo"><span className="fas fa-play me-2"></span>Watch the video </a></div>
            </div>
            <div className="col-md-6 text-end"><img className="pt-7 pt-md-0 img-fluid" src="assets/img/hero/hero-img.png" alt="" /></div>
          </div>
        </div>
      </section>
       <section className="pt-5 pt-md-9 mb-6" id="feature">

       {/*<div className="bg-holder z-index--1 bottom-0 d-none d-lg-block" style="background-image:url(assets/img/category/shape.png);opacity:.5;">
       </div>*/}

       <div className="container">
         <h1 className="fs-9 fw-bold mb-4 text-center"> Check these upcoming artists<br className="d-none d-xl-block" />who are with our team/orrganization</h1>
         <div className="row">
           <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src="assets/img/category/icon1.png" width="75" alt="Feature" />
             <h4 className="mb-3">artist1 </h4>
             <p className="mb-0 fw-medium text-secondary">put a beat sample and some pitcure or profile pic</p>
           </div>
           <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src="assets/img/category/icon2.png" width="75" alt="Feature" />
             <h4 className="mb-3">artist2</h4>
             <p className="mb-0 fw-medium text-secondary">Sports betting,lottery and bingo playing for the fun</p>
           </div>
           <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src="assets/img/category/icon3.png" width="75" alt="Feature" />
             <h4 className="mb-3">artist3</h4>
             <p className="mb-0 fw-medium text-secondary">The Myspace page defines the individual.</p>
           </div>
           <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src="assets/img/category/icon4.png" width="75" alt="Feature" />
             <h4 className="mb-3">artist4</h4>
             <p className="mb-0 fw-medium text-secondary">Personal choices and the overall personality of the person.</p>
           </div>
         </div>
         <div className="text-center mt-5"><a className="btn btn-warning" href="#!" role="button">SIGN UP NOW</a></div>
       </div>

     </section>
     </div>
 )
}
export default Hero;