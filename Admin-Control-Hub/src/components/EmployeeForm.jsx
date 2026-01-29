import React, { useState } from "react";
import "../styles/EmployeeForm.css";

const EmployeeForm = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    position: "Менеджер",
    department: "Продажі",
    status: "Офлайн",
    email: "",
    phone: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="employee-form-wrapper">
      <div className="employee-form">
        <h2 className="form-title">Реєстрація працівника</h2>

        <div className="form-body">
          {/* блок аватара */}
          <div className="photo-upload">
            <div
              className="photo-circle"
              style={{
                backgroundImage: formData.avatar ? `url(${formData.avatar})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {!formData.avatar && <span>Фото</span>}
            </div>

            <button
              type="button"
              className="add-photo-btn"
              onClick={() => document.getElementById("avatarInput").click()}
            >
              +
            </button>

            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          {/* поля форми */}
          <div className="form-fields">
            <label>
              ПІБ:
              <input
                name="fullName"
                type="text"
                onChange={handleChange}
                placeholder="Введіть ПІБ"
              />
            </label>

            <label>
              Посада:
              <select name="position" onChange={handleChange} defaultValue="Менеджер">
                <option>Менеджер</option>
                <option>Інженер</option>
                <option>Розробник</option>
              </select>
            </label>

            <label>
              Відділ:
              <select name="department" onChange={handleChange} defaultValue="Продажі">
                <option>Продажі</option>
                <option>IT</option>
                <option>Технічний</option>
              </select>
            </label>

            <label>
              Статус:
              <select name="status" onChange={handleChange} defaultValue="Офлайн">
                <option>Онлайн</option>
                <option>Офлайн</option>
                <option>Відпустка</option>
              </select>
            </label>

            <label>
              Email:
              <input name="email" type="email" onChange={handleChange} />
            </label>

            <label>
              Телефон:
              <input name="phone" type="tel" onChange={handleChange} />
            </label>

            <div className="form-actions">
              <button className="cancel" onClick={onClose}>Скасувати</button>
              <button className="save" onClick={handleSubmit}>Зберегти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
