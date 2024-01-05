// DarkModeToggle.js
import React from 'react';

const DarkModeToggle = ({ darkMode, onToggleDarkMode }) => {
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={darkMode}
        onChange={onToggleDarkMode}
      />
    </label>
  );
};

export default DarkModeToggle;
