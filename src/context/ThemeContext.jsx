// import React, { createContext, useState, useEffect } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('dark');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.body.className = savedTheme;
//     } else {
//       document.body.className = 'dark';
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark';
//     setTheme(newTheme);
//     document.body.className = newTheme;
//     localStorage.setItem('theme', newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Retrieve saved theme from local storage or default to 'light'
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      document.body.className = "light";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme; // Update body class
    localStorage.setItem("theme", newTheme); // Persist theme in local storage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


