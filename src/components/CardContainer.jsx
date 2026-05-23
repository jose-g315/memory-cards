import Card from './Card';
import { useState } from 'react';

export default function CardContainer({ increaseScore, setScore }) {
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, setCards] = useState([
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 },
    { text: 'Four', value: 4 },
    { text: 'Five', value: 5 },
    { text: 'Six', value: 6 },
  ]);

  function randomizeCards() {
    const randomArray = [];
    for (let i = 0; randomArray.length < 6; i++) {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      if (!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber);
      }
    }
    const newCards = cards.map((card, index) => ({
      ...card,
      value: randomArray[index], // assign random position
    }));

    setCards(newCards);
  }
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
      randomizeCards();
    }
  }

  return (
    <div className='card-container'>
      {cards.map((entry) => (
        <Card key={entry.value} value={entry.value} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
}
