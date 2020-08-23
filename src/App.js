import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContextProvider from './ThemeContext';
import Child1 from './children1';
import Child2 from './child2';
import ThemeChangeButton from './ThemeChangeButton';
import AuthContextProvider from './AuthContext';
import AuthButton from './AuthButton';

function App() {
  return (
    <AuthContextProvider>
    <ThemeContextProvider>
    <Child1 />
    <Child2/>
    <ThemeChangeButton/>
    <AuthButton/>
    </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
