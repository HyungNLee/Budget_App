import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// Component Imports
import SignIn from '../SignIn/SignIn';
import Main from '../Main/Main';


function App() {

  // constructor(props) {
  //   super(props);

  //   this.state = {

  //     transactionList: {
  //       [v4()]: {
  //         // categoryId: '7982uus',
  //         description: 'Rent for apartment.',
  //         payee: 'Oak Hills Apartments',
  //         type: 'Expense',
  //         amount: 450,
  //         // date: '11/12/2017'
  //       },
  //     },


  //   };
  // }

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
