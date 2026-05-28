import { useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import CardContainer from './components/CardContainer';

import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  function increaseScore() {
    setScore(score + 1);
    if (score >= highScore) {
      setHighScore((prev) => Math.max(prev, score + 1));
    }
  }
  return (
    <div className='app'>
      <ScoreBoard score={score} highScore={highScore} />
      <CardContainer increaseScore={increaseScore} setScore={setScore} />
    </div>
  );
}

export default App;
