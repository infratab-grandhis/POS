import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import theme from './Theme.js';
import Home from './Pages/Home.jsx';
import Products from './Pages/Products.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
