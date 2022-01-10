import React from 'react'


export default function Answer(props) {

    let answerStyle = {}
    if (!props.checked) {
        if (props.isHeld) {
            answerStyle = {
                backgroundColor : "#D6DBF5"
                }
        }
    } else if (props.checked) {
        if(props.isCorrect) {
            answerStyle = {
                backgroundColor : "#94D7A2",
                color: "#293264",
                border: "none"
                }
        } else if (props.isHeld && !props.isCorrect) {

            answerStyle = {
                backgroundColor : "#F8BCBC",
                color: "#293264",
                border: "none",
                opacity: "50%"
                }
        } else {
            answerStyle = {
                opacity: "50%"
                }
        }
    }





    return (
        <div onClick={props.holdAnswer} style={answerStyle}> {props.answertext}</div>
    )
}