import React from "react";
import "./about.css";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-section">
        <div className="inner-container">
          <h1>About Us</h1>
          <p className="text">
            TaxAdda, as the name suggest, its adda for all the tax needs for
            small and medium business. We (Rohit Pithisaria & Prateek Agarwal)
            started TaxAdda as an blog in 2011 after completing their CA. After
            couple of years and with lot of user engagement, we started selling
            service to the customer all over the India. We also start developing
            tools for CAs for managing their practice. Right now we are having
            more than 5 tools which helps CAs to manage practices. Currently, we
            are having a customer base of more than 1000 for various services,
            tool, software etc.
          </p>
          <div className="skills">
            <span>Tax</span>
            <span>Gst</span>
            <span>Invoices</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
