import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { getConfig } from "./config";

const App = () => {
  const [backendURL, setBackendURL] = useState('');

  useEffect(() => {
    getConfig().then(config => {
      setBackendURL(config.BACKEND_URL);
    }).catch(error => {
      console.error("Failed to load config.json", error);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home backendURL={backendURL} />} />
      </Routes>
    </Router>
  );
};

export default App;