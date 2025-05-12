import React, { useState } from 'react';
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import "./App.css";
import ThemeContext, { ThemeProvider } from './contexts/ThemeContext';

const App = () =>{
   
   return(
      <>
      <ThemeProvider> {/*This is the parent provider */}
         <Header />  {/*This is a child of ThemeProvider */}
         <Outlet />
      </ThemeProvider>
      </>
   )
}

export default App