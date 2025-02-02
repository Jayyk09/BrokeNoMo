import React from 'react';
import { Layout, LogOut, User, Activity, Calendar, Bell } from 'lucide-react';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

function Dashboard({ username, onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-blue-500" />
              <h1 className="ml-2 text-xl font-semibold text-gray-800">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-500" />
                <span className="ml-2 text-gray-700">{username}</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center text-gray-700 hover:text-red-500 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="ml-2">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Activity className="h-10 w-10 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Projects</p>
                <p className="text-2xl font-semibold text-gray-800">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Calendar className="h-10 w-10 text-green-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Upcoming Tasks</p>
                <p className="text-2xl font-semibold text-gray-800">8</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Bell className="h-10 w-10 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Notifications</p>
                <p className="text-2xl font-semibold text-gray-800">5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome back, {username}!</h2>
          <p className="text-gray-600">
            This is your dashboard where you can monitor your activities and manage your tasks.
            Feel free to explore the various features available to you.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;