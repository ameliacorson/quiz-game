import React from "react"
import '../App.css';

export default function Welcome() {
    return (
        <div className="welcome-container">
            <h1> Quizzical </h1>
            <p> A quiz game that is fun </p>
            <button className="start-game-btn"> Start Game </button>
        </div>
    )
}