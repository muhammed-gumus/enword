"use client";

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-300 dark:bg-gray-700 rounded">
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;