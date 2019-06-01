import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// serviceWorker.register();


ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('root')
);
