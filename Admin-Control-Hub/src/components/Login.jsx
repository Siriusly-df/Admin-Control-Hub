import React, { useState } from "react";
import "../styles/Login.css"; // если файл стилей лежит в src/style

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Логін:", login);
    console.log("Пароль:", password);
    // здесь можно добавить логику авторизации
  };

  return (
    <div className="login-container">
      <h2>Вхід</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логін"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#" className="forgot">Забули пароль?</a>
        <div className="buttons">
          <button type="submit" className="btn primary">Увійти</button>
          <button type="button" className="btn secondary">Зареєструватись</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
