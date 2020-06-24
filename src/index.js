import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider, createMuiTheme} from "@material-ui/core"
const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#FEDBD0"
    },
    secondary:{
      main:"#442C2E"
    }
  }
})
ReactDOM.render(
  <ThemeProvider theme={theme}><App/></ThemeProvider>,
  document.getElementById('root')
);

