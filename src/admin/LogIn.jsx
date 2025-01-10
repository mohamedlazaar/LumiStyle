import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/config';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

function LogIn() {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { setUser } = useUser(); // Access the setUser function from context
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = sessionStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Set the user if found in sessionStorage
      navigate('/admin/Add-products'); // Redirect to AddProduct if user is logged in
      console.log(savedUser)
    }
  }, [setUser, navigate]);

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const logIn = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        setUser(userCredential.user); // Set logged-in user in context
        navigate('/admin/Add-products'); // Redirect to AddProduct page
        sessionStorage.setItem('user', JSON.stringify(userCredential.user));

      })
      .catch((error) => {
        setError('Email or Password incorrect');
      });
  };

  return (
    <div className="w-lvw md:h-[100vh] flex justify-center items-center bg-gray-800">
      <div className="login-form w-[500px] min-h-[400px] bg-slate-100 rounded-xl p-8 dark:bg-slate-800 shadow-md shadow-slate-950 border border-stone-900">
        <h2 className="text-center text-2xl text-white">Admin Login</h2>
        {error && <p className="error text-red-700 my-2 text-base font-light">{error}</p>}
        <form onSubmit={logIn} className="flex flex-col gap-4 justify-around my-5 h-[200px]">
          <div className="flex justify-between flex-col gap-4">
            <label className="text-white font-semibold text-base">Email:</label>
            <input
              className="w-full p-2 rounded-xl"
              type="email"
              onChange={handleCredentials}
              placeholder="Email"
              name="email"
              value={userCredentials.email}
              required
            />
          </div>
          <div className="flex justify-between flex-col gap-4">
            <label className="text-white font-semibold text-base">Password:</label>
            <input
              className="w-full p-2 rounded-xl"
              type="password"
              onChange={handleCredentials}
              placeholder="Password"
              name="password"
              value={userCredentials.password}
              required
            />
          </div>
          <button type="submit" className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-xl">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
