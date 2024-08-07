import React, { useState } from "react";
import "./Register.css";
import RegisterOne from "../../components/RegisterOne/RegisterOne";

const Register = () => {

  return (
    <div className="register">
      <div className="register-main-component-box">
        <RegisterOne />
      </div>
      <p className="register-footer-para">
        @2020-2021 TugaFreela. Todos os direitos reservados.Termos de uso |
        Política de privacidade
      </p>
    </div>
  );
};

export default Register;
