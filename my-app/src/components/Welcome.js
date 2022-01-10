import React from "react"
import '../App.css';

export default function Welcome(props) {
    return (
        <div className="welcome-container">
            <h1> Quizzical </h1>
            <p> Ready to test your knowledge?</p>
            <button className="start-game-btn btn" onClick={props.welcomeToggle}> Start Game </button>
        </div>
    )
}