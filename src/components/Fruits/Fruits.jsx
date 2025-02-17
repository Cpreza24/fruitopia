import React, { useEffect } from 'react';
import './Fruits.css';
import FruitForm from './FruitForm/FruitForm';
import FruitList from './FruitList/FruitList';
import { useState } from 'react';
import { getAllFruits } from '../../services/fruitService';
import FruitSearch from '../FruitSearch/FruitSearch';

function Fruits() {
  const [fruits, setFruits] = useState([]);

  const [collectedFruits, setCollectedFruits] = useState([]);
  useEffect(() => {
    const fetchFruits = async () => {
      const allFruits = await getAllFruits();
      setFruits(allFruits);
    };
    fetchFruits();
  }, []);

  const toggleStock = (id) => {
    setFruits(
      fruits.map((fruit) =>
        fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit
      )
    );
  };

  const handleAddFruit = (fruit) => {
    if (!fruit.inStock) {
      console.log('fruit out of stock');
      return;
    }
    setCollectedFruits([...collectedFruits, fruit]);
  };
  console.log(collectedFruits, 'collected Fruits');

  const handleRemoveFruit = (fruit) => {
    setCollectedFruits(collectedFruits.filter((f) => f.id !== fruit.id));
  };

  const addFruit = (name, emoji) => {
    const newFruit = {
      id: fruits.length + 1,
      name,
      emoji,
      color: 'gray',
      inStock: true,
    };
    setFruits([...fruits, newFruit]);
  };

  return (
    <>
      <FruitSearch fruits={fruits} />
      <FruitList fruits={fruits} />
      {/* add fruit form component here */}
      <FruitForm addFruit={addFruit} />
      <div>
        <h1>Fruit Inventory</h1>
        <div>
          <h3>Available Fruits:</h3>
          <ul>
            {fruits.map((fruit) => (
              <li key={fruit.id}>
                <span>
                  {fruit.name} {fruit.emoji}
                </span>
                {fruit.inStock && (
                  <button onClick={() => handleAddFruit(fruit)}>
                    Add to collection
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>My Collection</h3>
          <ul>
            {collectedFruits.map((fruit) => (
              <li key={fruit.id}>
                <span>
                  {fruit.name} {fruit.emoji}
                </span>
                <button onClick={() => handleRemoveFruit(fruit)}>
                  Remove From Collection
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Fruits;
