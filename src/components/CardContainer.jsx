import Card from './Card';
import { fetchData, formatData, shuffleCards } from '../util/helpers';
import { useState, useEffect } from 'react';
import './CardContainer.css';

export default function CardContainer({ increaseScore, setScore }) {
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [cardsSet, setCardsSet] = useState('6');

  useEffect(() => {
    async function getCards() {
      try {
        const data = await fetchData(cardsSet);
        const formatedData = formatData(data);
        setCards(formatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getCards();
  }, [cardsSet]);

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
  function handleButtonClick(type) {
    setCardsSet(type);
    setClickedCards([]);
    setScore(0);
  }
  return (
    <>
      <div className='difficulty-container'>
        <button type='button' className='card-set' onClick={() => handleButtonClick('6')}>
          Easy
        </button>
        <button type='button' className='card-set' onClick={() => handleButtonClick('12')}>
          Medium
        </button>
        <button type='button' className='card-set' onClick={() => handleButtonClick('18')}>
          Hard
        </button>
      </div>
      <div className='card-container'>
        {cards.map((entry) => (
          <Card
            key={entry.id}
            id={entry.id}
            fullName={entry.name}
            url={entry.img}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </>
  );
}
