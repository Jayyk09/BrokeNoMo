import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const handleLogin = (enteredUserId: string) => {
    setUserId(enteredUserId);
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : 
        <Dashboard userId={userId as string} /> }
    </div>
  );
}

export default App;