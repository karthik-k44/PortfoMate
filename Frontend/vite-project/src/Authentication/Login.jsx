import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [userdata, setUserData] = useState({
    email: '',
    password: ''
  });

  const HandleChange = (e) => {
    setUserData({
      ...userdata,
      [e.target.name]: e.target.value
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3000/api/login', userdata);
      console.log(data.message);
      localStorage.setItem('token', data.token);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={HandleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={HandleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              name="password"
              onChange={HandleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Don't have an account?</span>
          <Link to="/signup" className="text-indigo-600 hover:underline ml-2">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
