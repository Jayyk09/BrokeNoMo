import React, { useState } from 'react';
import { Boxes} from '../components/ui/background-boxes';
import cn from '../lib/utils'; // Adjusted import to default export
import { Input } from '../components/ui/input';

interface LoginProps {
  onLogin: (username: string) => void;
}

function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes className="z-10" />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
      <form onSubmit={handleSubmit} className="mb-4 z-20 relative">
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />      </form>
    </div>
  );
}

export default Login;