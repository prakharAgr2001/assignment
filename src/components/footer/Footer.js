import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="row primary">
          <div className="column about">
            <h3>TaxAdda</h3>

            <p>
              TaxAdda, as the name suggest, it’s adda for all the tax needs for
              small and medium business.
            </p>
          </div>

          <div className="column links">
            <h3>Some Links</h3>

            <ul className="pra">
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          <div className="column subscribe">
            <h3>TaxAdda</h3>
            <div>
              <input className="email" type="email" placeholder="Your email id here" />
              <button className="sub">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="row copyright">
          <p>Copyright &copy; 2022 TaxAdda</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
