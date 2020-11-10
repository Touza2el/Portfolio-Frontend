import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup } from '../actions/userActions';
import Spinner from '../components/Spinner';

const SignupScreen = ({ location, history }) => {
  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, userInfo } = userSignup;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(signup(name, email, password));
    }
  };

  return (
    <section className='sign-screen'>
      <div className='container'>
        <div className='sign-screen-content'>
          <div className='form-title'>
            <h1>sign Up</h1>
          </div>
          {loading && <Spinner />}
          {error && (
            <div className='form-error'>
              <p>{error}</p>
            </div>
          )}
          {message && (
            <div className='form-error'>
              <p>{message}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='form-input'>
              <label>Name : </label>
              <input
                type='text'
                name='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className='form-input'>
              <label>Confirm Password : </label>
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className='form-btn'>
              <input type='submit' value='REGISTER' />
            </div>
          </form>
          <div className='form-footer'>
            <p>
              Have an account ?
              <Link to={redirect ? `/signin?redirect=${redirect}` : '/signin'}>
                sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupScreen;
