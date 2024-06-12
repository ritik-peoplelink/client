import React, { useState } from "react";
import Success from "../PopUp/Success";
import Failure from "../PopUp/Failure";
function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleButtonClick = () => {
    const fileInput = document.getElementById("file-upload");
    fileInput.click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleSubmit = (event) => {
    setUploading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    fetch("http://localhost:5001/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUploaded(true);
        setUploading(false);
        console.log("API RESPONSE::::", data);
      });
  };

  return (
    <div className="file-upload-container">
      <form onSubmit={handleSubmit}>
        <div
          className="file-upload-area"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            accept="*"
          />
          <label htmlFor="file-upload">
            <i className="fas fa-cloud-upload-alt"></i>
            <p>Drag and drop files here</p>
            <p>or</p>
            <button type="button" onClick={handleButtonClick}>
              Upload File
            </button>
          </label>
        </div>
        {selectedFile && (
          <div className="file-preview">
            <p>Selected File: {selectedFile.name}</p>
            <p>Size: {selectedFile.size} bytes</p>
            <p>Type: {selectedFile.type}</p>
          </div>
        )}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
