import React, { useState } from "react";
import "./RegisterOne.css";

const RegisterOne = () => {
  return (
    <div className="register-one">
      <h1 className="register-heading">
        Bem-vindo ao
        <span> TugaFreela</span>
      </h1>

      <form className="register-form">
        <div className="register-radio-btn">
          <div className="radio-client">
            <input type="radio" id="client" name="owner" />
            <label htmlFor="client">Cliente</label>
          </div>
          <div className="radio-freelancer">
            <input type="radio" id="freelancer" name="owner" />
            <label htmlFor="freelancer">Freelancer</label>
          </div>
        </div>

        <div className="multiple-input">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Apelido" />
        </div>

        <div className="full-filed-input">
          <input type="text" placeholder="NIF" />
          <input type="email" placeholder="E-mail" />
          <input type="email" placeholder="Confirmar e-mail" />
        </div>

        <div className="multiple-input">
          <input type="text" placeholder="Senha" />
          <input type="text" placeholder="Confirmar senha" />
        </div>

        <div className="accept-input">
          <input type="checkbox" id="accept" />
          <label htmlFor="">
            Aceito os <span>Termos de Serviço</span>
          </label>
        </div>

        <input type="submit" value="Cadastrar" className="register-btn" />
        <p className="new-user">
          New user? <span>Create a new account</span>
        </p>
      </form>
    </div>
  );
};

export default RegisterOne;
