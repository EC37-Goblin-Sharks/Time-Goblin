import axios from 'axios';
import { response } from 'express';
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

  const addPointsDb = () => {
    // setPoints(); // increment points here
    axios
      .post('/points', {
        points: points,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserInfo = () => {
    axios
      .get('http://localhost:3000/home', { withCredentials: true })
      .then((res) => {
        setUser(res.data.firstName);
        setPoints(res.data.points);
      });
  };

  useEffect(() => {
    // get request for user and points
    getUserInfo();
  });

  // ==========================
  // Render this
  // ==========================
  return (
    <div className='homePage'>
      <div className='homeHeader'>
        <div className='greeting'>Hello, Goblin</div>
        <div className='points'>You have 0 pts</div>
        {/* add store div */}
      </div>
      <div className='homeBody'>
        {/* add decorations */}
        <Timer />
        {/* add decorations */}
      </div>
    </div>
  );
};

export default Home;
