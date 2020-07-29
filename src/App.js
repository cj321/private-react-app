import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '@/login/login'
import Home from '@/view/home/home'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" alias="/login" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
