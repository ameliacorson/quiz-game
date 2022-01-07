import React from "react"
import '../App.css';
import Question from "./Question"

import { nanoid } from "nanoid"

export default function Game() {
        
    const [questions, setQuestions] = React.useState([])
    
        React.useEffect(() => {
            fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
                .then(res => res.json())
                .then(data => setQuestions(newQuestionSet(data.results)) 
                )
        }, [])
        
        function newQuestionSet(APIdata) {
           let newQuestionData = APIdata.map(quest => {
               return ({
                    id: nanoid(),
                    question: quest.question,
                    correct_answer: quest.correct_answer,
                    incorrect_answers: quest.incorrect_answers
               })
             })

        console.log(Array.isArray(newQuestionData))
        return newQuestionData
        }

        const questionElements = questions.map(quest =>{
            return (
                <Question 
                    key={quest.id}
                    question={quest.question}
                    correct_answer={quest.correct_answer}
                    incorrect_answers={quest.incorrect_answers}
                />
            )
        })

        

    return (
        <div className="all-questions">
            {questions.length && questionElements}
            <button className="btn check-answer-btn"> Check Answers </button>
        </div>
    )
}