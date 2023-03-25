import React, { useState } from 'react';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

}


export default ThemeContext;