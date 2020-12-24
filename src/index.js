import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { theme } from 'themes/index';
import './style.css';

ReactDOM.render(
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
   </ThemeProvider>
   , document.getElementById("root"));