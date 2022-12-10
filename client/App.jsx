import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

const App = (props) => {
  return (
    <div className="router">
      time goblin!
      {/* content seen on every page */}
      <div className="routerMain" id='content'>
        <Routes>
          {/* different path inside each rout, component inside- loggin, sign up, home */}
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;