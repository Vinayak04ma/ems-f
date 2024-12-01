

import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">username 👋</span>
      </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-xl cursor-pointer focus:outline-none"
        >
          {theme === 'dark' ? <FaSun color="yellow" /> : <FaMoon color="blue" />}
        </button>
        <button
          onClick={logOutUser}
          className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
