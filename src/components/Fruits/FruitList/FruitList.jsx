import '../Fruits.css';

import React from 'react';

function FruitList({ fruits }) {
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
