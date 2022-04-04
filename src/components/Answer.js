import React from "react";


export default function Answer(props) {
  let answerStyle = {};
  if (!props.checked) {
    if (props.isHeld) {
      answerStyle = {
        backgroundColor: "#F9E4D4",
      };
    }
  } else if (props.checked) {
    if (props.isCorrect) {
      answerStyle = {
        backgroundColor: "rgba(214, 125, 62, .5)",
        color: "#293264",
        border: "none",
      };
    } else if (props.isHeld && !props.isCorrect) {
      answerStyle = {
        backgroundColor: "#F9E4D4",
        color: "#293264",
        border: "none",
        opacity: "50%",
      };
    } else {
      answerStyle = {
        opacity: "50%",
      };
    }
  }

  return (
    <div onClick={props.holdAnswer} style={answerStyle}>
      {" "}
      {props.answertext}
    </div>
  );
}
