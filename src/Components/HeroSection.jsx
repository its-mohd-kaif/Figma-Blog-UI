import React from "react";
import banner from "../Images/image 2.png";
import "./HeroSection.css";
function HeroSection() {
  // Hero Section Component
  return (
    <section className="HeroSection">
      <div>
        <img className="bannerImg" src={banner} alt="banner" />
      </div>
      <div className="bannerTxt">
        A few words about this blog platform, Ghost, and how this site was made
      </div>
      <div className="bannerSubTxt">
        Why Ghost (& Figma) instead of Medium,
        <aside>WordPress or other options?</aside>
      </div>
      <div className="hr"></div>
    </section>
  );
}

export default HeroSection;
