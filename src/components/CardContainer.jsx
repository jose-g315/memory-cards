import Card from './Card';
import { useState } from 'react';

export default function CardContainer({ increaseScore, setScore }) {
  const [clickedCards, setClickedCards] = useState([]);

  const cards = [
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 },
    { text: 'Four', value: 4 },
    { text: 'Five', value: 5 },
    { text: 'Six', value: 6 },
  ];

  function handleCardClick(value) {
    // Add the clicked card's value to the clickedCards array
    setClickedCards((prev) => [...prev, value]);

    // Check if the clicked card's value is already in the clickedCards array
    // If it is, reset the score and clear the clickedCards array
    // If it isn't, increase the score
    if (clickedCards.includes(value)) {
      setScore(0);
      setClickedCards([]);
    } else {
      increaseScore();
    }
  }

  return (
    <div className='card-container'>
      {cards.map((entry) => (
        <Card
          key={entry.value}
          text={entry.text}
          value={entry.value}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}
