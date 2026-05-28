export default function ScoreBoard({ score, highScore }) {
  return (
    <div className='score-board'>
      <h1>Memory Cards</h1>
      <p>Current Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}
