import './App.css';
import Home from './views/Home/Home'
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
    </>
  );
}


export default App;
