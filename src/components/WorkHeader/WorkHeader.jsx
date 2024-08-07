import React from "react";
import "./WorkHeader.css";
import { assets } from "../../assets/assets";

const WorkHeader = () => {
  return (
    <header className="work-header">
      <div className="gradient-bg"></div>
      <img src={assets.Circle} alt="" className="work-header-circle" />
      <img src={assets.Shape} alt="" className="work-header-shape shape-one" />
      <img src={assets.Shape} alt="" className="work-header-shape shape-two" />
      <div className="work-header-container">
        <div className="work-header-left">
          <p className="work-header-left-para">NÃO PERCA TEMPO!!!</p>
          <h1 className="work-header-left-heading">
            Contrate freelancers especializados para qualquer trabalho online.
          </h1>
          <div className="work-header-left-btn">
            <button className="btn-purp">QUERO CONTRATAR</button>
            <button className="btn-gray">TRABALHE COMO FREELA</button>
          </div>
        </div>

        <div className="work-header-right">
          <img src={assets.HTWHimg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default WorkHeader;
