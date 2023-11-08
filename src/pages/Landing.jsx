import React from 'react';
import { Link } from 'react-router-dom';
import '../components/style.css';

function Landing() {
  return (
    <div className='landing'>
      <div className='intro'>
        <h1>Allow Myself to Introduce Myself...</h1>
      </div>
      <Link to='/TheMan'>
        <div className='man'>
          <h2>The Man...</h2>
          <img src='../assets/images/man.png' alt='stick figure man' height='50px' width='50px' />
        </div>
      </Link>
      <Link to='/TheWork'>
        <div className='man'>
          <h2>The Works...</h2>
        </div>
      </Link>
      <Link to='/YouNeed'>
        <div className='man'>
          <h2>What You Need</h2>
        </div>
      </Link>
    </div>
  );
}

export default Landing;
