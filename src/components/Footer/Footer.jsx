import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-box intro-box">
          <Link to={"/"}>
            <img src={assets.logo} alt="" className="footer-logo" />
          </Link>
          <ul>
            <li>
              <NavLink to={"/how-to-do-work"}>Como Funciona?</NavLink>
            </li>
            <li>
              <NavLink to={"/term-of-uses"}>Termos de Serviço</NavLink>
            </li>
            <li>
              <NavLink to={"/privacy-policy"}>Política de Privacidade</NavLink>
            </li>
            <li>
              <NavLink to={"/join-our-team"}>Una-se a Nossa Equipe</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h4>Para Freelancer</h4>
          <ul>
            <li>
              <NavLink>Projetos</NavLink>
            </li>
            <li>
              <NavLink to={"/contact-us"}>Contato</NavLink>
            </li>
            <li>
              <NavLink to={"/FAQ"}>F.A.Q</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h4>Para Clientes</h4>
          <ul>
            <li>
              <NavLink>Freelancers</NavLink>
            </li>
            <li>
              <NavLink to={"/FAQ"}>F.A.Q</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-box icon-box">
          <h4>Siga-nos</h4>
          <span>
            <img src={assets.facebook} alt="" />
          </span>
          <span>
            <img src={assets.twitter} alt="" />{" "}
          </span>
          <span>
            <img src={assets.insta} alt="" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
