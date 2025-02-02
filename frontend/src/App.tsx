import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { UserProvider } from "./context/UserContext";
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
        <UserProvider>
        <Dashboard userId={userId as string} /> 
        </UserProvider>
      }
    </div>
  );
}

export default App;