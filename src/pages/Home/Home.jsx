import React from "react";
import "./Home.css";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeWork from "../../components/HomeWork/HomeWork";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeResult from "../../components/HomeResult/HomeResult";
import HomeTestimonials from "../../components/HomeTestimonials/HomeTestimonials";
import HomePractice from "../../components/HomePractice/HomePractice";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeWork />
      <HomeBanner />
      <HomeResult />
      <HomeTestimonials />
      <HomePractice />
    </div>
  );
};

export default Home;
