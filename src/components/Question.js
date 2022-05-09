import React from "react";
import Answer from "./Answer";
import { decode } from "html-entities";

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
        {decode(props.question)}
      </h3>
      <div className="answer-container">{answerElements}</div>
      <hr></hr>
    </div>
  );
}
