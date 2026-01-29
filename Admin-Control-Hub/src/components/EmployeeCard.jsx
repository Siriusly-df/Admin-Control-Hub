import React from "react";
import styles from "../styles/EmployeeCard.module.css";

const EmployeeCard = ({ 
    id,
    firstName,
    lastName,
    middleName,
    position,
    status,
    department,
    email,
    phone,
    avatar,
    isActive,
    onOpen,
    onEdit,
    onDelete
}) => {
  const handleCardClick = () => {
    if (!isActive) {
      onOpen(id); // відкриваємо тільки якщо не активна
    }
  };

  return (
    <div className={styles.cardWrapper}>
      <div 
        id={`card-${id}`}
        className={`${styles.styles_card} ${isActive ? styles.active : ""}`} 
        onClick={handleCardClick}
      >
        <div className={styles.imageWrapper}>
          <img className={styles.img} src={avatar} alt={lastName} />
        </div>

        <div className={styles.employee_infomation}>
          <div className={styles.name}>
            {firstName} {lastName} {middleName}
          </div>
          <p>Посада: {position}</p>
          <p>Статус: {status}</p>
          <p>Відділ: {department}</p>
          <p>Email: {email}</p>
          <p>Телефон: {phone}</p>
        </div>

        {isActive && (
          <div 
            className={styles.employee_menu} 
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => onEdit(id)}>Редагувати</button>
            <button onClick={() => onDelete(id)}>Видалити</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
