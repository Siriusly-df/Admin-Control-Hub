import React, { useState } from "react";

const PhotoUpload = () => {
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="photo-upload">
     
      <div
        className="photo-circle"
        style={{
          backgroundImage: avatar ? `url(${avatar})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!avatar && <span>Фото</span>}
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
  );
};

export default PhotoUpload;

