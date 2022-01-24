import React from "react";
import Answer from "./Answer";

export default function Question(props) {
  const answerElements = props.answers.map((answer) => {
    return (
      <Answer
        answertext={answer.answertext}
        key={answer.id}
        id={answer.id}
        isCorrect={answer.isCorrect}
        isHeld={answer.isHeld}
        holdAnswer={() => props.holdAnswer(props.id, answer.id)}
        checked={props.checked}
      />
    );
  });

  return (
    <div className="question-container">
      <h3>
        {" "}
        {props.question
          .replace(/&quot;/, '"')
          .replace(/&quot;/, '"')
          .replace(/&#039;/, "'")
          .replace(/&ldquo;/, "“")
          .replace(/&rdquo;/, "”")
          .replace(/&amp; /, "&")
          .replace(/&hellip;/, "...")}
      </h3>
      <div className="answer-container">{answerElements}</div>
      <hr></hr>
    </div>
  );
}
