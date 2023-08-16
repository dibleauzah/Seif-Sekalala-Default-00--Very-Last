import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
window.React1 = require('react');


ReactDOM.render(
  <Router>
    <Routes>
      <Route path = '/' element={<App/>}/>
    </Routes>
  </Router>,
    document.getElementById('root') 
);

//!----------------// Resumption of Coding Practice--Aug 15, 2023.