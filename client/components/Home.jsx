import React, { useState, useEffect } from 'react';

const Home = (props) => {
  // ==========================
  // Set State
  // ==========================
  // get request for user name, pass into useState below
  const [user, setUser] = useState();
  const [points, setPoints] = useState();

  // ==========================
  // Functions
  // ==========================

  const addPoints = () => {
    // setPoints(); // increment points here
  }

  // ==========================
  // Render this
  // ==========================
  return (
    <div className="homePage">
      <div className='homeHeader'>
        <div className="greeting">Hello, Goblin</div>
        <div className="points">You have 0 pts</div>
        {/* add store div */}
      </div>
      <div className='homeBody'>
        {/* add decorations */}
        <div className='timer'>00:10</div>
        <button className='timerBtn'>Start Timer!</button>
        {/* add decorations */}
      </div>
    </div>
  )
}

export default Home;