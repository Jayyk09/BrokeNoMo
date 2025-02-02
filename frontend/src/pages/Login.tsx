import React, { useState, useEffect } from 'react';
import { Boxes } from '../components/ui/background-boxes';
import cn from '../lib/utils'; // Adjusted import to default export
const data = {
  "users": [
      {
          "user_id": "4703300803",
          "transactions": {
              "January 2025": [
                  {
                      "id": "txn_463",
                      "day": 7,
                      "tags": ["investments", "casual"],
                      "amount": -260,
                      "category": "Investments",
                      "merchant": "Charles Schwab",
                      "description": "Savings account contribution",
                      "payment_method": "Debit Card"
                  },
                  {
                      "id": "txn_416",
                      "day": 21,
                      "tags": ["transportation", "essential"],
                      "amount": -432,
                      "category": "Transportation",
                      "merchant": "Lyft",
                      "description": "Public transport pass",
                      "payment_method": "Credit Card"
                  },
                  {
                      "id": "txn_138",
                      "day": 28,
                      "tags": ["entertainment", "investment"],
                      "amount": -359,
                      "category": "Entertainment",
                      "merchant": "Hulu",
                      "description": "Streaming subscription",
                      "payment_method": "Debit Card"
                  },
                  {
                      "id": "txn_994",
                      "day": 1,
                      "tags": ["transportation", "subscription"],
                      "amount": -166,
                      "category": "Transportation",
                      "merchant": "Uber",
                      "description": "Bike rental",
                      "payment_method": "Debit Card"
                  },
                  {
                      "id": "txn_579",
                      "day": 27,
                      "tags": ["health & fitness", "luxury"],
                      "amount": -31,
                      "category": "Health & Fitness",
                      "merchant": "Planet Fitness",
                      "description": "New running shoes",
                      "payment_method": "Debit Card"
                  }
              ],
              "February 2025": [
                  {
                      "id": "txn_449",
                      "day": 3,
                      "tags": ["health & fitness", "luxury"],
                      "amount": -117,
                      "category": "Health & Fitness",
                      "merchant": "Planet Fitness",
                      "description": "Gym membership renewal",
                      "payment_method": "Bank Transfer"
                  },
                  {
                      "id": "txn_461",
                      "day": 11,
                      "tags": ["investments", "casual"],
                      "amount": -73,
                      "category": "Investments",
                      "merchant": "Coinbase",
                      "description": "ETF investment",
                      "payment_method": "Bank Transfer"
                  },
                  {
                      "id": "txn_439",
                      "day": 12,
                      "tags": ["shopping", "investment"],
                      "amount": -77,
                      "category": "Shopping",
                      "merchant": "Walmart",
                      "description": "New clothing",
                      "payment_method": "Debit Card"
                  },
                  {
                      "id": "txn_353",
                      "day": 6,
                      "tags": ["transportation", "essential"],
                      "amount": -280,
                      "category": "Transportation",
                      "merchant": "Uber",
                      "description": "Bike rental",
                      "payment_method": "Bank Transfer"
                  },
                  {
                      "id": "txn_688",
                      "day": 19,
                      "tags": ["food & dining", "casual"],
                      "amount": -326,
                      "category": "Food & Dining",
                      "merchant": "Olive Garden",
                      "description": "Lunch at restaurant",
                      "payment_method": "Bank Transfer"
                  }
              ]
          }
      },
      {
          "user_id": "2052391306",
          "transactions": {
              "January 2025": [
                  {
                      "id": "txn_742",
                      "day": 2,
                      "tags": ["health & fitness", "luxury"],
                      "amount": -485,
                      "category": "Health & Fitness",
                      "merchant": "Nike",
                      "description": "Buying workout supplements",
                      "payment_method": "Bank Transfer"
                  },
                  {
                      "id": "txn_492",
                      "day": 8,
                      "tags": ["investments", "luxury"],
                      "amount": -214,
                      "category": "Investments",
                      "merchant": "Coinbase",
                      "description": "Crypto transaction",
                      "payment_method": "Bank Transfer"
                  },
                  {
                      "id": "txn_481",
                      "day": 12,
                      "tags": ["health & fitness", "investment"],
                      "amount": -13,
                      "category": "Health & Fitness",
                      "merchant": "Nike",
                      "description": "Personal training session",
                      "payment_method": "Credit Card"
                  },
                  {
                      "id": "txn_251",
                      "day": 28,
                      "tags": ["health & fitness", "casual"],
                      "amount": -446,
                      "category": "Health & Fitness",
                      "merchant": "GNC",
                      "description": "Personal training session",
                      "payment_method": "Credit Card"
                  },
                  {
                      "id": "txn_222",
                      "day": 16,
                      "tags": ["investments", "investment"],
                      "amount": -285,
                      "category": "Investments",
                      "merchant": "Fidelity",
                      "description": "Crypto transaction",
                      "payment_method": "Credit Card"
                  }
              ],
              "February 2025": [
                  {
                      "id": "txn_262",
                      "day": 24,
                      "tags": ["shopping", "essential"],
                      "amount": -442,
                      "category": "Shopping",
                      "merchant": "Target",
                      "description": "Tech gadget purchase",
                      "payment_method": "Debit Card"
                  },
                  {
                      "id": "txn_731",
                      "day": 9,
                      "tags": ["health & fitness", "essential"],
                      "amount": -303,
                      "category": "Health & Fitness",
                      "merchant": "Adidas",
                      "description": "Sports event tickets",
                      "payment_method": "PayPal"
                  },
                  {
                      "id": "txn_288",
                      "day": 19,
                      "tags": ["shopping", "luxury"],
                      "amount": -206,
                      "category": "Shopping",
                      "merchant": "Best Buy",
                      "description": "New clothing",
                      "payment_method": "Credit Card"
                  },
                  {
                      "id": "txn_363",
                      "day": 26,
                      "tags": ["transportation", "essential"],
                      "amount": -30,
                      "category": "Transportation",
                      "merchant": "Tesla Supercharger",
                      "description": "Public transport pass",
                      "payment_method": "Credit Card"
                  },
                  {
                      "id": "txn_661",
                      "day": 28,
                      "tags": ["food & dining", "essential"],
                      "amount": -329,
                      "category": "Food & Dining",
                      "merchant": "Olive Garden",
                      "description": "Morning coffee",
                      "payment_method": "PayPal"
                  }
              ]
          }
      }
  ]
}

interface LoginProps {
  onLogin: (username: string) => void;
}

interface User {
  user_id: string;
  transactions: Record<string, any[]>;
}

interface Data {
  users: User[];
}

function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [validUsernames, setValidUsernames] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && validUsernames.includes(username)) {
      onLogin(username);
    } else {
      setError('Invalid username. Please try again.');
    }
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Welcome to the login page!
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Please enter your username to continue.
      </p>
      <form onSubmit={handleSubmit} className="relative z-20">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded"
          placeholder="Enter your username"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default Login;