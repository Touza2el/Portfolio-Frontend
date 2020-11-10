import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signout } from '../actions/userActions';

const Header = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <header>
      <div className='container'>
        <div className='header-content'>
          <div className='brand-name'>
            <Link to='/'>3Prod.</Link>
          </div>
          <nav className='nav-links'>
            <ul>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/store'>store</Link>
              </li>
              <li>
                <Link to='/blog'>blog</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>
          </nav>
          <div className='log-systeme'>
            {userInfo ? (
              <div className='login-user-btn'>
                <span className='user'>
                  <i className='fas fa-user'></i>
                  <span>{userInfo.user.name}</span>
                </span>
                <button onClick={handleSignout}>sign out</button>
              </div>
            ) : (
              <div className='new-user-btn'>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/signin'>Sign In</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
