import React from 'react';
import { Input } from '@mui/material';
import MainPage from './main-page/main_page';
import Inputs from './main-page/inputs/inputs';
import './App.css';
import { MuiTypography } from './components/MuiTypography';



function App() {
  return (
    <div className = 'App'>
      {/* <MainPage /> */}
      <MuiTypography />
    </div>
  );
}

export default App;