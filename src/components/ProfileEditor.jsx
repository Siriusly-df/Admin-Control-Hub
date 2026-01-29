import React, { useState } from "react";
import "../styles/ProfileEditor.css";

const ProfileEditor = ({ employee, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: `${employee.lastName || ""} ${employee.firstName || ""} ${employee.middleName || ""}`.trim(),
    position: employee.position || "",
    status: employee.status || "",
    department: employee.department || "",
    email: employee.email || "",
    phone: employee.phone || "",
    avatar: employee.avatar || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const [lastName = "", firstName = "", middleName = ""] = formData.fullName.split(" ");

    onSave({
      ...employee,
      firstName,
      lastName,
      middleName,
      position: formData.position,
      status: formData.status,
      department: formData.department,
      email: formData.email,
      phone: formData.phone,
      avatar: formData.avatar
    });

    onClose();
  };

  return (
    <form className="profile-editor" onSubmit={handleSubmit}>
      <h2 className="profile-title">Редагування профілю</h2>

      <div className="profile-body">
        <div className="profile-photo-upload">
          <div className="profile-photo-circle">
            {formData.avatar ? (
              <img src={formData.avatar} alt="avatar" />
            ) : (
              "Фото"
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            id="avatarUpload"
            style={{ display: "none" }}
            onChange={handlePhotoUpload}
          />

          <button
            type="button"
            className="profile-add-photo-btn"
            onClick={() => document.getElementById("avatarUpload").click()}
          >
            +
          </button>
        </div>

        <div className="profile-fields">
          <label>
            ПІБ
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Прізвище Ім’я По-батькові"
            />
          </label>
          <label>
            Посада
            <input name="position" value={formData.position} onChange={handleChange} />
          </label>
          <label>
            Статус
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="Активний">Активний</option>
              <option value="Відпустка">Відпустка</option>
              <option value="Звільнений">Звільнений</option>
            </select>
          </label>
          <label>
            Відділ
            <input name="department" value={formData.department} onChange={handleChange} />
          </label>
          <label>
            Email
            <input name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Телефон
            <input name="phone" value={formData.phone} onChange={handleChange} />
          </label>
        </div>
      </div>

      <div className="profile-actions">
        <button type="button" className="profile-cancel" onClick={onClose}>Скасувати</button>
        <button type="submit" className="profile-save">Зберегти</button>
      </div>
    </form>
  );
};

export default ProfileEditor;
