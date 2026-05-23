export default function Card({ value, handleCardClick }) {
  function handleClick() {
    handleCardClick(value);
  }
  return (
    <button type='button' onClick={handleClick}>
      {value}
    </button>
  );
}
