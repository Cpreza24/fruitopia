import React from 'react';
import './Fruits.css'

function Fruits({ fruits }) {
  return (
    <ul>
    {
        fruits.map((fruit) => (
            <li key={fruit.id}>{fruit.name}</li>
        ))
    }
</ul>
  )
}

export default Fruits
