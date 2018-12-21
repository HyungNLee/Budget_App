import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// Component Imports
import SignIn from '../SignIn/SignIn';
import Main from '../Main/Main';


function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/main' component={Main} />
      </Switch>
    </div>
  );

}

export default App;
