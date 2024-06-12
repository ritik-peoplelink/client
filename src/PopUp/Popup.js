import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ title, children, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};
export default Popup;
