import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-6">
              <div className="landing-teks">
                <h4 className="fw-bold">Welcome</h4>
                <h1 className="fw-bold">Notes Palette</h1>
                <p>
                  Mulai menulis sekarang dan jadikan setiap kata sebagai bagian
                  dari perjalanan Anda.
                </p>
              </div>
              <Link to="/home" className="get-start">
                Get Started
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src="asset/ikon-landingpage.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
