import React from "react";
import "./WorkSections.css";
import { assets, LearnHowYourProcessWork } from "../../assets/assets";

const WorkSections = () => {
  return (
    <div className="work-section">
      <h1 className="work-section-heading">
        Saiba como funciona <br />
        nossoprocesso.
      </h1>

      <div className="work-section-container">
        <img
          src={assets.ConnectStringOne}
          alt=""
          className="work-section-string-one"
        />
        <img
          src={assets.ConnectStringTwo}
          alt=""
          className="work-section-string-two"
        />
        <img
          src={assets.ConnectStringOne}
          alt=""
          className="work-section-string-three"
        />
        {LearnHowYourProcessWork.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={index} className="work-child-section">
              <div
                className="work-child-section-left"
                style={{ order: isEven ? 1 : 2 }}
              >
                <img src={item.img} alt="" />
              </div>
              <div
                className="work-child-section-right"
                style={{ order: isEven ? 2 : 1 }}
              >
                <h2 className="work-child-section-title">{item.title}</h2>
                <p className="work-child-section-des">{item.des}</p>
              </div>
            </section>
          );
        })}
      </div>

      <div className="work-child-section-btn">
        <button className="work-section-btn-purp">PUBLIQUE UM PROJETO</button>
        <button className="work-section-btn-gray">TRABALHE COMO FREELA</button>
      </div>
    </div>
  );
};

export default WorkSections;
