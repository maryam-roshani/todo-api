import React from 'react';

const LoginPopup = ({ onSignupClick }) => {
  return (
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-80 bg-white shadow-lg rounded-lg p-6 z-10">
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">Login</h2>
      <input type="text" placeholder="Username" className="w-full px-4 py-2 mb-3 border rounded" />
      <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-3 border rounded" />
      <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
        Login
      </button>
      <button
        onClick={onSignupClick}
        className="mt-4 text-sm text-purple-600 hover:underline w-full text-center"
      >
        Don't have an account? Sign Up
      </button>
    </div>
  );
};

export default LoginPopup;


