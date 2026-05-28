export default function Card({ id, fullName, url, handleCardClick }) {
  function handleClick() {
    handleCardClick(id);
  }
  return (
    <button type='button' onClick={handleClick}>
      <img src={url} alt={fullName} />
      <span>{fullName}</span>
    </button>
  );
}
