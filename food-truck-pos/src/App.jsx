import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import theme from './Theme.js';
import Home from './Pages/Home.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
