import Card from './Card';
import { getPhotos, shuffleCards } from '../util/helpers';
import { useState, useEffect } from 'react';
import './CardContainer.css';

export default function CardContainer({ increaseScore, setScore }) {
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPhotos();
        const initialCards = data.slice(0, 10).map((entry, index) => ({
          id: entry.id,
          fullName: entry.fullName,
          url: entry.imageUrl,
        }));
        setCards(initialCards);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  function handleCardClick(id) {
    setClickedCards((prev) => [...prev, id]);
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
      setCards((prev) => shuffleCards(prev));
    } else {
      increaseScore();
      setCards((prev) => shuffleCards(prev));
    }
  }

  return (
    <div className='card-container'>
      {cards.map((entry) => (
        <Card
          key={entry.id}
          id={entry.id}
          fullName={entry.fullName}
          url={entry.url}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}
