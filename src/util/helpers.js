async function fetchData(set) {
  const response = await fetch(`https://futuramaapi.com/api/characters/?size=${set}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}

function formatData(data) {
  const results = data.items;
  const initialCards = results.map((entry) => ({
    id: entry.id,
    name: entry.name,
    img: entry.image,
  }));
  return initialCards;
}

function shuffleCards(cards) {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export { fetchData, formatData, shuffleCards };
