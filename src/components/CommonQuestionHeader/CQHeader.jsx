import React from "react";
import "./CQHeader.css";
import { assets } from "../../assets/assets";

const CQHeader = () => {
  return (
    <div className="common-question-header">
      <div className="common-question-header-bg"></div>
      <img src={assets.Shape} alt="" className="common-question-shape-one"/>
      <h1 className="common-question-heading">Perguntas Frequentes</h1>
      <img src={assets.Shape} alt="" className="common-question-shape-two"/>
    </div>
  );
};

export default CQHeader;
