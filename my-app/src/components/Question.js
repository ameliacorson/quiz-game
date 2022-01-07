import React from "react";

export default function Question(props) {
    return (
        <div className="question-container">
        <h3> {props.question}</h3>
        <div className="answer-container">
            <div>{props.correct_answer}</div>
            <div>{props.incorrect_answers[0]}</div>
            <div>{props.incorrect_answers[1]}</div>
            <div>{props.incorrect_answers[2]}</div>
        </div>
        </div>
    )
}