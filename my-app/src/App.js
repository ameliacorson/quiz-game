import React from "react";
import Game from "./components/Game";
import "./App.css";


export default function App() {
  const [welcomeScreen, setWelcomeScreen] = React.useState(true);
  const [category, setCategory] = React.useState(0);

  function newGame() {
    setWelcomeScreen(true);
  }

  function chooseCategory(categoryinput) {
    setCategory(categoryinput);
    setWelcomeScreen(false);
  }

  return (
    <div className="quiz-container">
      {welcomeScreen && (
        <div className="welcome-container">
          <h1> Quizzical </h1>
          <p>Test your knowledge!</p>
          <div className="category-container">
            <button
              onClick={() => chooseCategory(11)}
              className="btn category-btn"
            >
              Film
            </button>
            <button
              onClick={() => chooseCategory(23)}
              className="btn category-btn"
            >
              History
            </button>
            <button
              onClick={() => chooseCategory(12)}
              className="btn category-btn"
            >
              Music
            </button>
            <button
              onClick={() => chooseCategory(27)}
              className="btn category-btn"
            >
              Animals
            </button>
            <button
              onClick={() => chooseCategory(20)}
              className="btn category-btn"
            >
              Mythology
            </button>
            <button
              onClick={() => chooseCategory(9)}
              className="btn category-btn"
            >
              Everything
            </button>
          </div>
        </div>
      )}
      {!welcomeScreen && (
        <Game
          category={category}
          welcomeScreen={welcomeScreen}
          newGame={newGame}
        />
      )}
    </div>
  );
}
