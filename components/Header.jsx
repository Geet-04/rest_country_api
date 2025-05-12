import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const Header = () => {
   const [isDark, setIsDark] = useContext(ThemeContext);
   return (
    <>
      <header className={`header-container ${!isDark ?'dark':''}`}>
      <div className="header-content">
         <h2 className="title">
            <a href=".">Where in the world?</a>
         </h2>
         <p className="theme-changer" onClick={()=>{
            setIsDark(!isDark)//This updates the React state isDark to reflect the new theme.
            localStorage.setItem('isDarkMode', !isDark)//stores the updated theme preference (true for dark mode, false for light mode) under the key 'isDarkMode' in localStorage so it persists across reloads.
         }}>
            <i className={`fa-solid fa-${isDark ?'moon':'sun'}`}/>
            &nbsp;&nbsp;<span className="mode-text">  {isDark ?'Dark':'Light'} Mode</span>
         </p>
      </div>
   </header>
    </>
   )
}

export default Header
