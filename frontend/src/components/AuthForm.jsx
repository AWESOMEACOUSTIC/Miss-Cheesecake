import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

export default function AuthForm({ mode }) {
  const isLogin = mode === 'login';
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate auth logic here
    if (isLogin) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        />
      </div>
      {!isLogin && (
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />
        </div>
      )}
      <div className="flex items-center justify-between text-sm">
        {isLogin ? (
          <Link to="/signup" className="text-green-700 font-[satoshi]">
            Don't have an account? <span className='hover:underline'>Signup</span>
          </Link>
        ) : (
          <Link to="/login" className="text-green-700 font-[satoshi]">
            Already have an account? <span className='hover:underline'>Log In</span>
          </Link>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-700 text-white rounded hover:bg-green-800 transition"
      >
        {isLogin ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  );
}