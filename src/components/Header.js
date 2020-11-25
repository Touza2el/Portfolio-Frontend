import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signout } from '../actions/userActions';

const Header = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <div className='brand-name'>
            <Link to='/'>Touza2el</Link>
          </div>
          <nav className={isOpen ? 'nav-links open' : 'nav-links'}>
            <ul>
              <li onClick={() => setIsOpen(!isOpen)}>
                <Link to='/'>home</Link>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <Link to='/'>services</Link>
              </li>
              <li
                onClick={() => {
                  window.open('https://www.themernstack.com', '_blank');
                }}
              >
                <span>blog</span>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>
          </nav>
          <div className='log-system'>
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
          <div className='mobile-menu' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <i class='fas fa-times'></i>
            ) : (
              <i className='fas fa-bars'></i>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
