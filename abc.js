// src/ThumbnailPopup.js

import React, { useState } from "react";
import "./ThumbnailPopup.css";

const ThumbnailPopup = ({ thumbnailUrl, popupUrl }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="thumbnail-container">
      <img
        className="thumbnail"
        src={thumbnailUrl}
        alt="Thumbnail Image"
        onClick={togglePopup}
      />
      {showPopup && (
        <div className="popup" onClick={togglePopup}>
          <img src={popupUrl} alt="Popup Image" />
        </div>
      )}
    </div>
  );
};

export default ThumbnailPopup;
