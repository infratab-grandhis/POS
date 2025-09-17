import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import Test from './Test.jsx';
import theme from './Theme.js';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
