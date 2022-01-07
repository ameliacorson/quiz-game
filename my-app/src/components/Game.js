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

        function scrambleAnswers(correctans, answerArray, correctIndex) {
            answerArray.splice(correctIndex, 0, correctans)
            console.log(answerArray)
            return (
                answerArray
            )
        }

        // i need to find a way to create a "correctindex" of a random number that will save into the Question component props data. It needs to be called upon to assign the correct answer a place in the answer array, as well as compare to the players selection.
        
        function newQuestionSet(APIdata) {
           let newQuestionData = APIdata.map(quest => {
               let correctIndex = Math.floor(Math.random()*4)
               return ({
                    id: nanoid(),
                    question: quest.question,
                    correctIndex: correctIndex,
                    answers: scrambleAnswers(quest.correct_answer, quest.incorrect_answers, correctIndex),
               })
             })

        return newQuestionData
        }

        const questionElements = questions.map(quest =>{
            return (
                <Question 
                    key={quest.id}
                    question={quest.question}
                    answers={quest.answers}
                    correctIndex={quest.correctIndex}
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