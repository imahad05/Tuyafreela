import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-heading">
          Torne se um profissional <br /> digital. <span>Torne se um freelancer</span>
        </h1>
        <p className="banner-para">
          Você pode melhorar a sua presença na web, vender online, vender nas
          redes sociais, criar conteúdos que mantenham seus clientes
          interessados ​na sua marca e muito mais!
        </p>
        <button className="banner-btn">COMEÇE SUA JORNADA!</button>
      </div>
    </section>
  );
};

export default HomeBanner;
