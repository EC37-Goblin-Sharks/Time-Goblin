import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id='appDiv'>
        {/* content seen on every page */}
        <div id='content'>
          <Switch>
            {/* different path inside each rout, component inside- loggin, sign up, home */}
            <Route exact path='/'>
              {/* exact follows exact path, not always necessary  */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
