import React from "react";
import "./ContactUs.css";
import { assets } from "../../assets/assets";
const ContactUs = () => {
  return (
    <div>
      <main className="contact-header">
        <img src={assets.HTWHimg} alt="" className="contact-header-img" />
        <div className="contact-header-bg"></div>
        <img src={assets.Shape} alt="" className="contact-header-shape-one"/>
        <img src={assets.Shape} alt="" className="contact-header-shape-two"/>
        <img src={assets.Circle} alt="" className="contact-header-circle"/>
      </main>


        <section className="contact">
          <div className="contact-left">
            <h1 className="contact-heading">Entre em contato conosco!</h1>

            <form className="contact-form">
              <input type="text" placeholder="NOME" className="name" />
              <input type="email" placeholder="EMAIL" className="email" />
              <input type="text" placeholder="WHATSAPP" className="whatsapp" />
              <textarea
                placeholder="MENSAGEM"
                className="msg"
                rows={10}
                cols={10}
              />
              <button type="submit" className="btn form-btn">
                ENVIAR
              </button>
            </form>
          </div>

          <div className="contact-right">
            <img src={assets.ContactImg} alt="" />
          </div>
        </section>

    </div>
  );
};

export default ContactUs;
