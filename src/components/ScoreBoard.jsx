export default function ScoreBoard({ score, highScore }) {
  return (
    <div>
      <p>Score Board</p>
      <p>{score}</p>
      <p>{highScore}</p>
    </div>
  );
}
