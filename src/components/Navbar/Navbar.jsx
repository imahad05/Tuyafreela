import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchbar, setShowSearchBar] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <Link to={"/"} className="nav-logo">
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>

        <div
          className={`nav-search-bar ${showSearchbar ? "show-search-bar" : ""}`}
        >
          <input type="search" placeholder="Buscal por profissionals" />
          <img src={assets.searchIcon} alt="search" />
        </div>

        <ul className={`nav-menu ${showMenu ? "show-menu" : ""}`}>
          <li>
            <NavLink to={"/how-to-do-work"} onClick={() => setShowMenu(false)}>
              Como Funciona?
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"} onClick={() => setShowMenu(false)}>
              Cadastre-se
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} onClick={() => setShowMenu(false)}>
              Entrar
            </NavLink>
          </li>
          <button className="btn-sm-purp">PUBLIQUE UM PROJETO</button>
        </ul>

        <div className="nav-btn">
          <img
            src={assets.searchIcon}
            alt="search"
            className="search-sm-icon"
            onClick={() => (
              setShowSearchBar((prev) => !prev), setShowMenu(false)
            )}
          />
          <button className="btn">PUBLIQUE UM PROJETO</button>
          <button
            className="menu-bar-btn"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span>
              <i class={`fa-solid ${showMenu ? 'fa-xmark': "fa-bars"} `}></i>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
