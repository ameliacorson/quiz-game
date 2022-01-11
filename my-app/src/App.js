import React from "react"
import Game from "./components/Game"
import './App.css';

export default function App() {
    const [welcomeScreen, setWelcomeScreen] = React.useState(true)
    const [category, setCategory] = React.useState(0)

    function newGame() {
        setWelcomeScreen(true)
    }

    function chooseCategory(categoryinput) {
        setCategory(categoryinput)
        setWelcomeScreen(false)
    }

    return (
        <div className="quiz-container">
            {welcomeScreen && <div className="welcome-container">
                <h1> Quizzical </h1>
                <p>Are you ready to test your knowledge?</p>
                <div className="category-container">
                    <button onClick={() => chooseCategory(11)}className="btn category-btn">Film</button>
                    <button onClick={() => chooseCategory(23)}className="btn category-btn">History</button>
                    <button onClick={() => chooseCategory(12)}className="btn category-btn">Music</button>
                    <button onClick={() => chooseCategory(27)}className="btn category-btn">Animals</button>
                    <button onClick={() => chooseCategory(20)}className="btn category-btn">Mythology</button>
                    <button onClick={() => chooseCategory(9)}className="btn category-btn">Everything</button>
                </div>
            </div>}
            <svg className="decor decor-upper-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.6,-56.8C47,-45,39.8,-25.4,39.2,-9.7C38.6,5.9,44.7,17.6,43,28.9C41.3,40.2,31.9,51.1,18.7,59.4C5.4,67.8,-11.8,73.6,-27.5,70.2C-43.3,66.8,-57.6,54.2,-57.7,40.1C-57.8,26,-43.6,10.4,-41.2,-8C-38.9,-26.4,-48.4,-47.7,-43.5,-59.6C-38.6,-71.5,-19.3,-74.1,-0.6,-73.4C18.1,-72.6,36.1,-68.6,41.6,-56.8Z" transform="translate(100 100)" />
            </svg>
            {!welcomeScreen && <Game category={category} welcomeScreen={welcomeScreen} newGame={newGame}/>}
            <svg className="decor decor-lower-left"viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.6,-35.6C73.3,-26.2,83.9,-2.3,76.3,12C68.7,26.2,42.9,30.9,23.8,34.2C4.8,37.5,-7.6,39.4,-22,36.1C-36.3,32.9,-52.8,24.3,-60.8,8.4C-68.8,-7.6,-68.5,-31,-57,-39.4C-45.4,-47.9,-22.7,-41.5,-0.9,-40.8C20.9,-40.1,41.8,-45.1,57.6,-35.6Z" transform="translate(100 100)" />
            </svg>
        </div>
     
    )}
