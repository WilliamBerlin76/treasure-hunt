import React from 'react';
import Game from './components/game'
import './App.scss';

function App() {
  return (
    <>
      <div className='title'>
        <h1>Treasure Hunt</h1>
        <p>(yes... that's my dog)</p>
      </div>
      <Game/>
    </>
  );
}

export default App;
