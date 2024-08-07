import React from "react";
import "./WorkPractice.css";
import { HTWPracticeSection } from "../../assets/assets";

const WorkPractice = () => {
  return (
    <div>
      <section className="work-practice">
        <h1 className="work-practice-heading">
          Não deixe para amanhã, o que pode fazer{" "}
          <span className="hoje">HOJE!</span> <br />
          <span>Coloque suas ideias em prática</span>
        </h1>
        <div className="container">
          <div className="work-practice-container">
            {HTWPracticeSection.map((item, index) => {
              return (
                <div className="work-practice-box" key={index}>
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPractice;
