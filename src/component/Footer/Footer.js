import React from "react";
import FooterList from "./FooterList";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="border-top">
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-3">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              style={{ height: "30px", widht: "150px" }}
            ></img>
            <h5>
              <i className="fas fa-phone-alt mr-2"></i>+91 80 4040 2020
            </h5>
            <small>
              &copy; 2010 - 2024, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </small>
            <div className="d-flex">
              <div className="m-2">
                <a href="#">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </div>
              <div className="m-2">
                <a href="#">
                  <i className="fab fa-facebook-square fa-lg"></i>
                </a>
              </div>
              <div className="m-2">
                <a href="#">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
              <div className="m-2">
                <a href="#">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <FooterList />
        </div>
      </div>
    </div>
  );
}
