// App.js
import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import MainContent from "./components/MainContent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    // Check if the credentials match our hardcoded values
    if (
      credentials.username === "user123" &&
      credentials.password === "pass123"
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <MainContent />}
    </div>
  );
}

export default App;
