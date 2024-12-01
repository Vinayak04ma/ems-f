
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { ThemeContext } from '../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ChangeCredentials = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChangeCredentials = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser?.role === 'employee') {
      const updatedUserData = userData.map((employee) =>
        employee.id === loggedInUser.data.id
          ? { ...employee, email, password }
          : employee
      );

      setUserData(updatedUserData);
      localStorage.setItem('employees', JSON.stringify(updatedUserData));

      const updatedLoggedInUser = {
        ...loggedInUser,
        data: { ...loggedInUser.data, email, password },
      };
      localStorage.setItem('loggedInUser', JSON.stringify(updatedLoggedInUser));

      alert('Credentials updated successfully!');
      navigate('/employee-dashboard');
    }
  };

  return (
    <div
      className={`relative flex h-screen w-screen items-center justify-center ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-900'
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 text-2xl p-2 rounded-full focus:outline-none"
        title="Toggle Theme"
      >
        {theme === 'dark' ? (
          <FaSun color="yellow" className="hover:scale-110 transition-transform" />
        ) : (
          <FaMoon color="blue" className="hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Change Credentials Form */}
      <div
        className={`border-2 rounded-xl p-10 shadow-lg ${
          theme === 'dark' ? 'border-emerald-600 bg-gray-800' : 'border-gray-300 bg-white'
        }`}
      >
        <h1 className="text-2xl font-bold mb-5 text-center">Change Credentials</h1>
        <input
          type="email"
          placeholder="Enter new email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`outline-none border-2 font-medium text-lg py-2 px-6 rounded-full placeholder-opacity-70 w-full mb-5 ${
            theme === 'dark'
              ? 'bg-gray-700 border-emerald-600 text-white placeholder-gray-400'
              : 'bg-gray-100 border-gray-400 text-gray-900 placeholder-gray-500'
          }`}
        />
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`outline-none border-2 font-medium text-lg py-2 px-6 rounded-full placeholder-opacity-70 w-full mb-7 ${
            theme === 'dark'
              ? 'bg-gray-700 border-emerald-600 text-white placeholder-gray-400'
              : 'bg-gray-100 border-gray-400 text-gray-900 placeholder-gray-500'
          }`}
        />
        <button
          onClick={handleChangeCredentials}
          className={`font-semibold text-lg py-2 px-8 w-full rounded-full ${
            theme === 'dark'
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ChangeCredentials;

