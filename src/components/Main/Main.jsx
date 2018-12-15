import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// Component imports.
import Overview from '../Overview/Overview';
import Budget from '../Budget/Budget';
import Accounts from '../Accounts/Accounts';

function Main() {
  return (
    <div>
      ** MAIN TEST **
      <div className='button-container'>
        <Link to='/main'><button>Overview</button></Link>
        <Link to='/main/budget'><button>Budget</button></Link>
        <Link to='/main/accounts'><button>Accounts</button></Link>
      </div>
      <Switch>
        <Route exact path='/main' component={Overview} />
        <Route path ='/main/budget' component={Budget} />
        <Route path='/main/accounts' component={Accounts} />
      </Switch>
    </div>
  );
}

export default Main;