import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import StoreScreen from './screens/StoreScreen';
import BlogScreen from './screens/BlogScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Route exact path='/' component={HomeScreen} />
        <Route path='/signup' component={SignupScreen} />
        <Route path='/signin' component={SigninScreen} />
        <Route path='/store' component={StoreScreen} />
        <Route path='/blog' component={BlogScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
