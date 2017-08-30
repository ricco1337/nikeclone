import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home/home.js';
import Men from './components/men/men.js';
import Women from './components/women/women.js';

ReactDOM.render(
  <Router>
    <switch>
    <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/men' component={Men} />
      <Route path='/women' component={Women} />

      </switch>
      </Router>,
document.getElementById('root'));
registerServiceWorker();
