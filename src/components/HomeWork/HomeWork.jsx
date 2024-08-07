import React from "react";
import "./HomeWork.css";
import { work } from "../../assets/assets";

const HomeWork = () => {
  return (
    <section className="work">
      <h1 className="work-heading">Como funciona?</h1>
      <div className="work-container">
        {work.map((item, index) => {
          return (
            <div key={index} className="work-box">
              <img src={item.image} alt="" />
              <h3 className="work-box-heading">{item.title}</h3>
              <p className="work-box-para">{item.des}</p>
            </div>
          );
        })}
      </div>
      <div className="work-btn">
        <button className="work-btn-purp">PUBLIQUE UM PROJETO</button>
        <button className="work-btn-gray">TRABALHE Como FREELA</button>
      </div>
    </section>
  );
};

export default HomeWork;
