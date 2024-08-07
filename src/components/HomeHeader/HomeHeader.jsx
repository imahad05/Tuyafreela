import React from "react";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <header>
      <div className="text-bg "></div>
      <div className="header-container">
        <div className="header-left">
          <h1 className="header-left-heading">
            Contrate freelancers <span>especializados para qualquer</span>{" "}
            trabalho, online.
          </h1>
          <div className="header-btn">
            <button className="btn-purp">QUERO CONTRATAR</button>
            <button className="btn-gray">TRABALHE COMO FREELA</button>
          </div>
        </div>

        <div className="header-right"></div>
      </div>
    </header>
  );
};

export default HomeHeader;
