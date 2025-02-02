import { useState, useEffect } from "react";
import { Boxes } from "../components/ui/background-boxes";
import { Input } from "../components/ui/input";

interface LoginProps {
  onLogin: (userId: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [validUserIds, setValidUserIds] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/679ec0fdad19ca34f8f8491d")
      .then((res) => res.json())
      .then((data) => {
        const users = data.record.users || [];
        setValidUserIds(users.map((user: { user_id: string }) => user.user_id));
      })
      .catch((err) => console.error("Error loading users:", err));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId.trim()) {
      alert("Please enter a valid User ID.");
      return;
    }

    if (validUserIds.includes(userId)) {
      onLogin(userId);
    } else {
      alert("Invalid User ID. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      <Boxes className="z-10" />

      {/* Gradient Text */}
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 relative z-20 tracking-wide mb-4">
        Welcome to Login
      </h1>

      <p className="text-gray-300 text-lg text-center max-w-2xl relative z-20">
        Enter your credentials to access the next generation of our platform.
      </p>

      <form onSubmit={handleSubmit} className="relative z-20 w-full max-w-md mt-6 flex space-x-4">
        {/* Glassmorphic Input Field */}
        <div className="w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 px-4 py-3 text-lg text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
          <Input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your User ID"
            className="bg-transparent border-none w-full focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Gradient Button */}
        <button
          type="submit"
          className="px-6 py-3 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform duration-200"
        >
          Continue
        </button>
      </form>

      <p className="text-gray-400 text-sm mt-4">
        By continuing, you agree to our{" "}
        <span className="text-purple-400 cursor-pointer hover:underline">Terms of Service</span> and{" "}
        <span className="text-purple-400 cursor-pointer hover:underline">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default Login;
