import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id='appDiv'>
      hello world
      {/* content seen on every page */}
      <div id='content'>
        <Routes>
          {/* different path inside each rout, component inside- loggin, sign up, home */}
          <Route path='/' />
        </Routes>
      </div>
    </div>
  );
}

export default App;
