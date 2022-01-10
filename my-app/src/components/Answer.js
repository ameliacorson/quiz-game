import React from 'react'


export default function Answer(props) {
    let answerStyle = {}
    if (props.isHeld) {
        answerStyle = {
        backgroundColor : "#D6DBF5"
    }}
    return (
        <div onClick={props.holdAnswer} style={answerStyle}> {props.answertext}</div>
    )
}