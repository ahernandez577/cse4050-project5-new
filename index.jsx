import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import TopBar from './components/topBar/TopBar';
import Home from './components/home/Home';
import TaskList from './components/task/TaskList';
import Task from './components/task/Task';

const theme = createTheme({
  palette: {
    background: {
      default: "#EBEDF0"
    }
  },
});

var view = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter>
      <TopBar />
      <Routes>
      	<Route exact path="/" element={<Home/>}/>
        <Route exact path="/task" element={<Task/>}/>
        <Route exact path="/tasks" element={<Task/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </HashRouter>
  </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('reactapp'));
root.render(view);
