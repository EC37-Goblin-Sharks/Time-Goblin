import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Signup from './components/Signup';

const App = (props) => {
  return (
    <div className="router">
      hello world
      {/* content seen on every page */}
      <div className="routerMain" id='content'>
        <Routes>
          {/* different path inside each rout, component inside- loggin, sign up, home */}
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
