export default function Card({ id, fullName, url, handleCardClick }) {
  function handleClick() {
    handleCardClick(id);
  }
  return (
    <button type='button' onClick={handleClick}>
      <p>ID: {id}</p>
      <p>{fullName}</p>
      <img src={url} alt='character' />
    </button>
  );
}
