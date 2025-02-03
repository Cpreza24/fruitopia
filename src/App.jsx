import { useState } from 'react';
import React from 'react'
import './App.css';

function App() {
    const fruits = [
        { id: 1, name: "Apple", color: "Red", inStock: true, emoji: "🍎" },
        { id: 2, name: "Banana", color: "Yellow", inStock: false, emoji: "🍌" },
        { id: 3, name: "Grapes", color: "Purple", inStock: true, emoji: "🍇" },
        { id: 4, name: "Kiwi", color: "Brown", inStock: false, emoji: "🥝" },
        { id: 5, name: "Strawberry", color: "Red", inStock: true, emoji: "🍓" },
        { id: 6, name: "Watermelon", color: "Green", inStock: false, emoji: "🍉" },
        { id: 7, name: "Pineapple", color: "Yellow", inStock: true, emoji: "🍍" },
        { id: 8, name: "Mango", color: "Orange", inStock: false, emoji: "🥭" },
        { id: 9, name: "Peach", color: "Orange", inStock: true, emoji: "🍑" },
        { id: 10, name: "Pear", color: "Green", inStock: false, emoji: "🍐" },
        { id: 11, name: "Cherry", color: "Red", inStock: true, emoji: "🍒" },
        { id: 12, name: "Blueberry", color: "Blue", inStock: false, emoji: "🫐" }
      ];

    return (
        <>
            <div className="navbar-logo">Fruitopia</div>
            <ul>
                {
                    fruits.map((fruit) => (
                        <li key={fruit.id}>{fruit.name}</li>
                    ))
                }
            </ul>
            <footer>Made with 🔥 for learning React</footer>
        </>
    );
}

export default App;
