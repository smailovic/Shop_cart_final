import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
 return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light  sticky-top" data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container"><a className="navbar-brand" href="index.html">Put your Logo here</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
          <div className="collapse navbar-collapse  mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item"><a className="nav-link" aria-current="page" href="./Shop">Shop Beats</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#validation">Customers</a></li>
              {/*<li className="nav-item"><a className="nav-link" aria-current="page" href="#superhero">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#marketing">Resources</a></li>*/}
            </ul>
            <div className="d-flex ms-lg-4"><a className="btn btn-secondary-outline " href="./Signin">Sign In</a><a className="btn btn-warning ms-3" href="./Signup">Sign Up</a></div>
          </div>
        </div>
      </nav>
      
    </div>
 )
}
export default Header;