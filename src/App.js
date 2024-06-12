import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import FileUpload from "./component/FIleUpload";
import ChatInterface from "./component/chatInterFace";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Choose An Option</h1>
        <button>
          <Link to="/upload">Upload Content</Link>
        </button>
        <button>
          <Link to="/chat">Chat With Server</Link>
        </button>
      </div>
      <Routes>
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/chat" element={<ChatInterface />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
