import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signin } from '../actions/userActions';
import Spinner from '../components/Spinner';

const SigninScreen = ({ location, history }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <section className='sign-screen'>
      <div className='container'>
        <div className='sign-screen-content'>
          <div className='form-title'>
            <h1>sign in</h1>
          </div>
          {loading && <Spinner />}
          {error && (
            <div className='form-error'>
              <p>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='form-input'>
              <label>Email : </label>
              <input
                type='email'
                name='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-input'>
              <label>Password : </label>
              <input
                type='password'
                name='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-btn'>
              <input type='submit' value='SIGN IN' />
            </div>
          </form>
          <div className='form-footer'>
            <p>
              New customer ?
              <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninScreen;
