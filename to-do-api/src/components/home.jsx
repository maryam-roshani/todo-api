
import React, { useState } from 'react';
import LoginPopup from './LoginPopup';
import SignupPopup from './SignupPopup';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700">
      <div
        className="relative"
        onMouseEnter={() => setShowLogin(true)}
        onMouseLeave={() => setShowLogin(false)}
      >
        <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-purple-100 transition">
          Start
        </button>

        {showLogin && (
          <LoginPopup onSignupClick={() => {
            setShowLogin(false);
            setShowSignup(true);
          }} />
        )}
      </div>

      {showSignup && (
        <SignupPopup onClose={() => setShowSignup(false)} />
      )}
    </div>
  );
}

export default App;

