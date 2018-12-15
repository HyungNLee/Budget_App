import React from 'react';
import { Link } from 'react-router-dom';

// Need to change link button once authentication system is in use.

function SignIn() {
  return (
    <div>
      <input type='text' name='username' placeholder='Username'/>
      <input type='text' name='password' placeholder='Password'/>
      <Link to='/main'><button>**TEST** Sign In</button></Link>
    </div>
  );
}

export default SignIn;