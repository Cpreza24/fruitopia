import React from 'react';
import './FruitDetail.css'; // Import external CSS for styling (optional)

function FruitDetail({ fruit }) {
  if (!fruit) return null; // Render nothing if no fruit data is available

  return (
    <section className='fruit-detail-container'>
      <h2 className='fruit-title'>{fruit.name}</h2>
      <div className='fruit-family'>
        <strong>Family:</strong> {fruit.family}
      </div>
      <div className='nutritions-section'>
        <h3>Nutrition Facts</h3>
        <ul className='nutritions-list'>
          <li>
            <strong>Calories:</strong> {fruit.nutritions.calories} kcal
          </li>
          <li>
            <strong>Protein:</strong> {fruit.nutritions.protein} g
          </li>
          <li>
            <strong>Sugar:</strong> {fruit.nutritions.sugar} g
          </li>
          <li>
            <strong>Carbohydrates:</strong> {fruit.nutritions.carbohydrates} g
          </li>
          <li>
            <strong>Fat:</strong> {fruit.nutritions.fat} g
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FruitDetail;
