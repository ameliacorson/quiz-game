import React from "react";

export default function Question(props) {
    console.log(props.answers)
    return (
        <div className="question-container">
        <h3> {props.question.replace(/&quot;/g,'"').replace(/&#039;/g, "'")}</h3>
        <div className="answer-container">
            <div>{props.answers[0].replace(/&quot;/g,'"').replace(/&#039;/g, "'")}</div>
            <div>{props.answers[1].replace(/&quot;/g,'"').replace(/&#039;/g, "'")}</div>
            <div>{props.answers[2].replace(/&quot;/g,'"').replace(/&#039;/g, "'")}</div>
            <div>{props.answers[3].replace(/&quot;/g,'"').replace(/&#039;/g, "'")}</div>
        </div>
        <hr></hr>
        </div>
    )
}