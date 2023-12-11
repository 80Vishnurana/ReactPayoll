// src/App.js
import React from 'react';
import RoutesComponent from './core/routes/routes';
import MainLayout from './core/layouts/MainLayout';
import theme from './core/config/ThemeConfig';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <RoutesComponent />
        </MainLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
