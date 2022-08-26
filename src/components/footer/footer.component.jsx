import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <div className="main-footer">
    <nav>
      <ul className="main-footer__links">
        <li className="main-footer__link">
          <span onClick={() => window.open("/", "_self")}>Support</span>
        </li>
        <li className="main-footer__link">
          <span onClick={() => window.open("/", "_self")}>Terms of Use</span>
        </li>
      </ul>
    </nav>
    <nav>
      <ul className="main-footer__links">
        <li className="main-footer__link">
          <span
            onClick={() =>
              window.open("https://github.com/zakaria-akash", "_blank")
            }
            target="_blank"
          >
            &copy; Zakaria Ibrahim 2022
          </span>
        </li>
      </ul>
    </nav>
  </div>
);

export default Footer;
