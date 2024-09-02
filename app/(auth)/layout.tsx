"use client"
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  // Sample testing credentials
  const testCredentials = {
    username: 'demo',
    email: 'test212492@gmail.com',
    password: 'cKDMzWd4iMTaJ6X',
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <main className=" bg-gradient-to-r from-red-500 to-orange-500 min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Test Credentials</h2>
        
        <div className="mb-2 flex items-center justify-between">
          <p className="flex-1"><strong>Username:</strong> {testCredentials.username}</p>
          <button 
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            onClick={() => copyToClipboard(testCredentials.username)}
          >
            Copy
          </button>
        </div>
        
        <div className="mb-2 flex items-center justify-between">
          <p className="flex-1"><strong>Email:</strong> {testCredentials.email}</p>
          <button 
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            onClick={() => copyToClipboard(testCredentials.email)}
          >
            Copy
          </button>
        </div>
        
        <div className="mb-2 flex items-center justify-between">
          <p className="flex-1"><strong>Password:</strong> {testCredentials.password}</p>
          <button 
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            onClick={() => copyToClipboard(testCredentials.password)}
          >
            Copy
          </button>
        </div>

        <p className="text-sm text-center mt-4">Copy these credentials to test the web app.</p>
      </div>
      {children}
    </main>
  );
};

export default Layout;
