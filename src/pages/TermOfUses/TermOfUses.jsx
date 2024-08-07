import React from "react";
import "./TermOfUses.css";
import TermOfHeader from "../../components/TermOfHeader/TermOfHeader";
import TermsOfQuestions from "../../components/TermsOfQuestions/TermsOfQuestions";
const TermOfUses = () => {
  return (
    <div>
      <TermOfHeader title={'Perguntas Frequentes'}/>
      <TermsOfQuestions/>
    </div>
  );
};

export default TermOfUses;
