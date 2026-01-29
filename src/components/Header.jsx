import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // 👈 додаємо
import "../style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);   
  const [isClosing, setIsClosing] = useState(false);          
  const [isRegistered, setIsRegistered] = useState(true);

  const navigate = useNavigate(); // 👈 хук для навігації

  const toggleProfilePanel = useCallback(() => {
    if (openUserMenu) {
      setIsClosing(true);
    } else {
      setOpenUserMenu(true);
    }
  }, [openUserMenu]);

  const handleAnimationEnd = useCallback((e) => {
    if (isClosing && e.animationName === "slideOutUp") {
      setIsClosing(false);
      setOpenUserMenu(false);
    }
  }, [isClosing]);

  const panelVisible = openUserMenu || isClosing;

  // 👇 функція виходу
  const handleLogout = () => {
    // тут можна очистити токени/стан користувача
    navigate("/register"); // переходимо на сторінку реєстрації
  };

  return (
    <header className="header">
      <div className="user-profile" onClick={toggleProfilePanel}>
        <img 
          src="/images/avatar.png"   
          alt="User Avatar" 
          className="user-avatar"
        />
        <div className="user-info">
          <span className="user-name">Адміністратор</span>
          <span className="user-role">Admin</span>
        </div>
      </div>

      <nav className={`menu-area ${openUserMenu ? "blurred" : ""}`}>
        <h3 className="menu-title"><i className="fas fa-tools"></i> СЕРВІСИ</h3>
        <div className="menu-buttons">
          <div className="menu-btn"><i className="fas fa-cogs"></i> Обладнання</div>
          <div className="menu-btn"><i className="fas fa-satellite"></i> Зв’язок</div>
          <div className="menu-btn"><i className="fas fa-ambulance"></i> Швидка допомога</div>
          <div className="menu-btn"><i className="fas fa-hard-hat"></i> Інженери</div>
        </div>       

        <h3 className="menu-title"><i className="fas fa-user-shield"></i> ADMIN</h3>
        <div className="menu-buttons">
          <div className="menu-btn"><i className="fas fa-users"></i> Працівники</div>
          <div className="menu-btn"><i className="fas fa-tasks"></i> Завдання</div>
          <div className="menu-btn"><i className="fas fa-user-cog"></i> Ролі</div>
          <div className="menu-btn"><i className="fas fa-chart-line"></i> Звіти</div>
        </div>

        <div className="setting"><i className="fas fa-cog"></i> Налаштування</div>
        <div className="future">© 2026 Future</div>
      </nav>

      {panelVisible && (
        <div
          className={`profile-panel ${isClosing ? "close" : "open"}`}
          onAnimationEnd={handleAnimationEnd}
        >
          {!isRegistered && (
            <div className="profile-item"><i className="fas fa-user-plus"></i> Реєстрація</div>
          )}
          <div className="profile-item"><i className="fas fa-user-cog"></i> Налаштування профілю</div>
          <div className="profile-item"><i className="fas fa-exchange-alt"></i> Змінити акаунт</div>
          <div className="profile-item" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Вийти
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
