import React from "react";

import WorkHeader from "../../components/WorkHeader/WorkHeader";
import WorkSections from "../../components/WorkSections/WorkSections";
import WorkBecomeSecion from "../../components/WorkBecomeSection.jsx/WorkBecomeSection";
import WorkPractice from "../../components/WorkPracticeSection/WorkPractice";

const HowToWork = () => {
  return (
    <div>
      <WorkHeader />
      <WorkSections />
      <WorkBecomeSecion />
      <WorkPractice />
    </div>
  );
};

export default HowToWork;
