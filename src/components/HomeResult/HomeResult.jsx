import React from "react";
import "./HomeResult.css";
import { result } from "../../assets/assets";

const HomeResult = () => {
  return (
    <div className="result">
      <h1 className="result-heading">Acompanhe nossos resultados!</h1>
      <div className="result-container">
        <div className="result-grid-container">
          {result.map((item, index) => {
            return (
              <div className="result-box" key={index}>
                <div className="result-img-box">
                  <img src={item.img} alt="" />
                </div>
                <h1 className="result-box-num">{item.num}</h1>
                <p className="result-box-title">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="result-btn">
        <button className="result-btn-purp">PUBLIQUE UM PROJETO</button>
        <button className="result-btn-gray">TRABALHE COMO FREELA</button>
      </div>
    </div>
  );
};

export default HomeResult;
