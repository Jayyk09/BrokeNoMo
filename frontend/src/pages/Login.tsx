import { useState, useEffect } from "react";
import { Boxes } from "../components/ui/background-boxes";
import { Input } from "../components/ui/input";
// Removed the import for TextGenerateEffect due to the error
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

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
  
  const intro_words: string = "Enter your credentials to access the next generation of our platform."

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 mask-image-radial-gradient-transparent-white pointer-events-none" />
      
      <Boxes className="z-20" />

      {/* Gradient Text */}
      <h1 className="text-5xl z-20 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        BrokeNoMo
      </h1>
      <TextGenerateEffect className="z-20" words={intro_words} />;

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

      <p className="text-gray-400 text-sm mt-4 z-20">
        By continuing, you agree to our{" "}
        <span className="text-purple-400 cursor-pointer hover:underline">Terms of Service</span> and{" "}
        <span className="text-purple-400 cursor-pointer hover:underline">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default Login;
