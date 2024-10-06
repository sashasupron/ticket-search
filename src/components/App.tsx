import React from 'react';
import MainPage from './main-page/main_page';
import './App.css';
import NavBar from './navigation/navigation';
import Tekst from './main-page/temp';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
      fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavBar />
        <MainPage />
        <Tekst />
    </ThemeProvider>
  );
}

export default App;