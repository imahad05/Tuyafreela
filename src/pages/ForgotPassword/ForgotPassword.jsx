import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <div className="forgot-password-main-component-box">
        <h1 className="forgot-password-heading">
          Esqueceu a senha? <br />
          Não tem problema. Nós te ajudamos!
        </h1>

        <form className="forgot-password-form">
          <p className="forgot-password-para">nsira o email de registro</p>

          <div className="div-forgot-password-input">
            <input type="email" placeholder="email" className="email-input"/>
            <input type="submit" value="Enviar" className="enter-btn"/>
          </div>
        </form>
      </div>
      <p className="forgot-password-footer-para">
        @2020-2021 TugaFreela. Todos os direitos reservados.Termos de uso |
        Política de privacidade
      </p>
    </div>
  );
};

export default ForgotPassword;
