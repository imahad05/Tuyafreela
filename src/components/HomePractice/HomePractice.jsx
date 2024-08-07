import React from "react";
import "./HomePractice.css";
import { practice } from "../../assets/assets";

const HomePractice = () => {
  return (
    <section className="practice">
      <h1 className="practice-heading">
        Não deixe para amanhã, o que pode fazer{" "}
        <span className="hoje">HOJE!</span> <br />
        <span>Coloque suas ideias em prática</span>
      </h1>

      <div className="container">
        <div className="practice-container">
          {practice.map((item, index) => {
            return (
              <div className="practice-box" key={index}>
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePractice;
