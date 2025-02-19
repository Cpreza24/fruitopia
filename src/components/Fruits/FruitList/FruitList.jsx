import '../Fruits.css';
import styled from 'styled-components';
import React from 'react';

const FruitListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FrutiItem = styled.li`
  background-color: #fff; /* White */
  border: 1px solid #ffc2d1; /* Soft Pink border */
  border-radius: 8px;
  padding: 10px 15px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FruitName = styled.strong`
  color: #77dd77;
`;

function FruitList({ fruits }) {
  return (
    <div>
      <FruitListContainer>
        {fruits.map((fruit) => (
          <FrutiItem key={fruit.id}>
            <FruitName>{fruit.name}</FruitName>
          </FrutiItem>
        ))}
      </FruitListContainer>
    </div>
  );
}

export default FruitList;
