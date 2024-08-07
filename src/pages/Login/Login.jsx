import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = (e) => {
    return e.preventDefault();
  };

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-heading">Login</div>
          <p className="login-form-para">
            New user? <Link to={"/register"}>create a new account</Link>
          </p>

          <div className="email-input-box">
            <input type="email" placeholder="E-mail address" />
          </div>
          <div className="password-input-box">
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Enter password"
            />
            <span
              className={`${showPassword ? "" : "show-green"} show-hide`}
              onClick={() => setShowPassword((prev) => !prev)}
            ></span>
          </div>
          <p className="f-password">
            Forgot password? <Link to={"/forgot-password"}>Recover</Link>
          </p>
          <button type="submit" className="login-form-btn">
            Next
          </button>
        </form>
        <p className="login-footer-para">
          Ao continuar, confirmo que aceito os termos de serviço e as diretrizes
          da comunidade do TugaFreelas e li a política de privacidade.
        </p>
      </div>
    </div>
  );
};

export default Login;
