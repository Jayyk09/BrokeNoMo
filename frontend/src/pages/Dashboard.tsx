import { useEffect, useState } from "react";

interface Transaction {
    id: string;
    day: number;
    tags: string[];
    amount: number;
    category: string;
    merchant: string;
    description: string;
    payment_method: string;
  }
  
  interface TransactionsByMonth {
    [month: string]: Transaction[];  // Key is the month, value is an array of transactions
  }
  
  interface DashboardProps {
    userId: string;
    onLogout: () => void;
  }
  
  const Dashboard: React.FC<DashboardProps> = ({ userId, onLogout }) => {
    const [transactions, setTransactions] = useState<TransactionsByMonth>({});
  
    useEffect(() => {
      // Fetch the users.json data and find the transactions for the logged-in user
      fetch("/users.json")
        .then((res) => res.json())
        .then((data) => {
          const user = data.users.find((user: { user_id: string }) => user.user_id === userId);
          if (user) {
            setTransactions(user.transactions);
          }
        })
        .catch((err) => console.error("Error loading transactions:", err));
    }, [userId]);
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl mb-4">Welcome, User {userId}</h1>
        
        <button
          onClick={onLogout}
          className="px-6 py-2 bg-red-500 text-white rounded mb-4"
        >
          Logout
        </button>
        
        <div className="space-y-4">
          {Object.keys(transactions).map((month) => (
            <div key={month}>
              <h2 className="text-xl font-semibold">{month}</h2>
              <ul className="space-y-2">
                {transactions[month].map((txn) => (
                  <li key={txn.id} className="border p-2 rounded shadow-md">
                    <p>{txn.description}</p>
                    <p>Amount: ${txn.amount}</p>
                    <p>Category: {txn.category}</p>
                    <p>Merchant: {txn.merchant}</p>
                    <p>Payment Method: {txn.payment_method}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Dashboard;  