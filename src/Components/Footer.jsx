import React from "react";
import "./Footer.css";
import logo from "../Images/NORDIC ROSE(1).png";
function Footer() {
  // Footer Component
  return (
    <section className="footerSection">
      <ul className="ul">
        <li className="liTxt bold">Digital product design</li>
        <li className="liTxt">Remote work</li>
        <li className="liTxt bold">UX design</li>
        <li className="liTxt">Distributed teams</li>
        <li className="liTxt bold">Creativity</li>
        <li className="liTxt">Strategy</li>
        <li className="liTxt bold">Suspense</li>
        <li className="liTxt">Growth</li>
      </ul>
      <div style={{ textAlign: "center" }}>
        <img className="footerLogo" src={logo} alt="logo" />
      </div>
      <div className="footerTxt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.
      </div>
      <div className="footerLinks">
        <div className="footerLink">Twitter</div>
        <div className="footerLink">LinkedIn</div>
        <div className="footerLink">RSS</div>
      </div>
      <div className="footerBottom">
        © 2012–2020 Nordic Rose Co.<aside> All rights reserved.</aside>
      </div>
    </section>
  );
}

export default Footer;
