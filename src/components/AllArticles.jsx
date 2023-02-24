import React from "react";
import "./AllArticles.css";
import {Data} from "../data/Data.js"
function AllArticles() {
  // All Articles Component
  return (
    <section className="articleSection">
      <div className="articleHeader">All articles</div>
      <div className="articles">
        {Data.map((val, index) => (
          <div key={index} className="article">
            <img className="cardImg" src={val.img} alt="cardImg" />
            <div className="cardTxt">{val.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllArticles;
