export default function Card({ text, value, handleCardClick }) {
  function handleClick() {
    handleCardClick(value);
  }
  return (
    <button type='button' onClick={handleClick}>
      {text}
    </button>
  );
}
