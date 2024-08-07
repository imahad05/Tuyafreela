import React from "react";
import "./TermsOfQuestions.css";
import { assets } from "../../assets/assets";

const TermsOfQuestions = () => {
  const termsOfQuestions = [
    {
      id: 1,
      que: "Who can participate in this program",
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id: 2,
      que: "Who can participate in this program",
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id: 3,
      que: "Who can participate in this program",
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id: 4,
      que: "Who can participate in this program",
      ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ];

  return (
    <div className="terms-of-uses">
      <img src={assets.Circle} alt="" className="terms-of-uses-shape"/>
      <div className="term-of-uses-questions">
        {termsOfQuestions.map((item, index) => {
          return (
            <div className="term-of-uses-question">
              <h2 className="term-of-uses-que">
                {item.id}. {item.que}
              </h2>
              <div className="term-of-uses-que-underline"></div>
              <p className="term-of-uses-ans">{item.ans}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermsOfQuestions;
