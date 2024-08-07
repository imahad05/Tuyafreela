import React from "react";
import "./WorkBecomeSection.css";
import {assets} from '../../assets/assets'

const WorkBecomeSecion = () => {
  return (
    <section className="work-become-section">
      <div className="work-become">
        <div className="work-become-left">
          <h3 className="work-become-left-heading-one">Torne-se um profissional digital.</h3>
          <h2 className="work-become-left-heading-two">Torne-se um freelancer.</h2>
          <p className="work-become-left-heading-para">
            Você pode melhorar a sua presença na web, vender online, vender nas
            redes sociais, criar conteúdos que mantenham seus clientes
            interessados ​na sua marca e muito mais!
          </p>
          <button className="work-become-left-btn">COMEÇE SUA JORNADA!</button>
        </div>
        <div className="work-become-right">
            <img src={assets.BecomeFreelancer} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WorkBecomeSecion;
