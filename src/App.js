import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import UsersList  from './pages/usersList';
import WontToBe from './pages/wontToBe';
import HowWorks from './pages/howWorks';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/usersList" component={UsersList} exact />
        <Route path="/wontToBe"component={WontToBe} exact />
        <Route path="/howWorks" component={HowWorks} exact/>
      </Switch>
    </Router>
  );
}

export default App;

