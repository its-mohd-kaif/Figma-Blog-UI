import React from "react";
import logo from "../Images/NORDIC ROSE.png";
import "./Header.css";
function Header() {
  // Header Component
  return (
    <section className="headerSection">
      <div className="headerDiv">
        <div>
          <img className="headerImg" src={logo} alt="logo" />
        </div>
        <div>
          <span className="headerTxt blogTxt">BLOG</span>
          <span className="headerTxt">ABOUT</span>
          <span className="headerTxt">LINKS</span>
          <span style={{ marginRight: "0" }} className="headerTxt">
            PROJECTS
          </span>
        </div>
      </div>
    </section>
  );
}

export default Header;
