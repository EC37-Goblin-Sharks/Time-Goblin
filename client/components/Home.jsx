import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Timer from './Timer';

const Home = (props) => {
  // ==========================
  // Set State
  // ==========================
  // get request for user name, pass into useState below
  const [user, setUser] = useState('');
  const [points, setPoints] = useState(0);

  // ==========================
  // Functions
  // ==========================

  useEffect(() => {
    // get request for user and points
    axios
      .get('http://localhost:3000/home', { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.firstName);
        setPoints(res.data.points);
        return;
      });
  }, []);

  useEffect(() => {
    // get request for user and points
    axios.put('/points', { points: points, }, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [points]);

  // ==========================
  // Render this
  // ==========================
  return (
    <div className='homePage'>
      <div className='homeHeader'>
        <div className='greeting'>Hello, {user}</div>
        <div className='points'>You have {points} pts</div>
        {/* add store div */}
      </div>
      <div className='homeBody'>
        {/* add decorations */}
        <Timer
          points={points}
          setPoints={setPoints}
        />
        {/* add decorations */}
      </div>
    </div>
  );
};

export default Home;
