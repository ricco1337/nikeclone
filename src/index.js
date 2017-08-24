import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home/home.js';
import Men from './components/men/men.js';

ReactDOM.render(
  <Router>
    <switch>
    <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/men' component={Men} />


      </switch>
      </Router>,
document.getElementById('root'));
registerServiceWorker();
