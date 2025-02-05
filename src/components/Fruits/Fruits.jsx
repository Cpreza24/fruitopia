import React from 'react';
import './Fruits.css';
import { useState } from 'react';

function Fruits() {
  const [fruits, setFruits] = useState([
    { id: 1, name: 'Apple', color: 'Red', inStock: true, emoji: '🍎' },
    { id: 2, name: 'Banana', color: 'Yellow', inStock: false, emoji: '🍌' },
    { id: 3, name: 'Grapes', color: 'Purple', inStock: true, emoji: '🍇' },
    { id: 4, name: 'Kiwi', color: 'Brown', inStock: false, emoji: '🥝' },
    { id: 5, name: 'Strawberry', color: 'Red', inStock: true, emoji: '🍓' },
    { id: 6, name: 'Watermelon', color: 'Green', inStock: false, emoji: '🍉' },
    { id: 7, name: 'Pineapple', color: 'Yellow', inStock: true, emoji: '🍍' },
    { id: 8, name: 'Mango', color: 'Orange', inStock: false, emoji: '🥭' },
    { id: 9, name: 'Peach', color: 'Orange', inStock: true, emoji: '🍑' },
    { id: 10, name: 'Pear', color: 'Green', inStock: false, emoji: '🍐' },
    { id: 11, name: 'Cherry', color: 'Red', inStock: true, emoji: '🍒' },
    { id: 12, name: 'Tomato', color: 'Red', inStock: false, emoji: '🍅' },
  ]);

  const [fruit, setFruit] = useState('');

  const toggleStock = (id) => {
    setFruits(
      fruits.map((fruit) =>
        fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit
      )
    );
  };

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} {fruit.emoji}
            <strong>{fruit.inStock ? 'In Stock' : 'Out of stock'}</strong>
            <button onClick={() => toggleStock(fruit.id)}>
              {fruit.inStock ? 'In Stock' : 'Out of stock'}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Fruits;
