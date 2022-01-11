import React from "react"
import '../App.css';
import Question from "./Question"

import { nanoid } from "nanoid"

export default function Game(props) {
        
    const [questions, setQuestions] = React.useState([])
    const [checked, setChecked] = React.useState(false)
    const [replay, setReplay] = React.useState(true)
    const [score, setScore] = React.useState(0)

    console.log(props.category)
    
    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=${props.category}&difficulty=medium&type=multiple`)
            .then(res => res.json())
            .then(data => setQuestions(newQuestionSet(data.results)) 
            )
            console.log(questions)
        }, [props.category, replay])

    
        

        function createAnswers(correctans, answerArray, correctIndex) {
            answerArray.splice(correctIndex, 0, correctans)
            const newAnswerArray = answerArray.map(answer => {
                return ({
                    answertext: answer.replace(/&quot;/g,'"').replace(/&#039;/g, "'").replace(/&ldquo;/, "“").replace(/&rdquo;/, "”"),
                    id: nanoid(),
                    isHeld: false,
                    isCorrect: answerArray.indexOf(answer) === correctIndex ? true : false
                })
            })
            return newAnswerArray
        }
        
        function newQuestionSet(APIdata) {
           let newQuestionData = APIdata.map(quest => {
               let correctIndex = Math.floor(Math.random()*4)
               return ({
                    id: nanoid(),
                    question: quest.question,
                    correctIndex: correctIndex,
                    answers: createAnswers(quest.correct_answer, quest.incorrect_answers, correctIndex),
               })
             })

        return newQuestionData
        }

        function holdAnswer(questionID, answerID) {
           setQuestions(prevQuestions => prevQuestions.map(question => {
               if (question.id === questionID) {
                   let newAnswers = question.answers.map(answer => {
                       if (answer.id === answerID || answer.isHeld){
                        return ({
                            ...answer,
                            isHeld: !answer.isHeld
                        })
                       } else {
                           return answer
                       }
                   })
                return ({
                    ...question,
                    answers: newAnswers
                })
               }else{
                   return question
               }
           }))
           console.log(questions)
        }

        function checkAnswers(arr) {
            setChecked(true)
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].answers.length; j++)
                    if (arr[i].answers[j].isHeld === true && arr[i].answers[j].isCorrect === true) {
                        setScore(prevScore => prevScore + 1)
                    }
            }


        }

        function playAgain() {
            setReplay(prevReplay => !prevReplay)
            setChecked(false)
            setScore(0)
        }

        function newCategory() {
            props.newGame()
            setChecked(false)
            setScore(0)
        }

        const questionElements = questions.map(quest =>{
            return (
                <Question 
                    key={quest.id}
                    id={quest.id}
                    question={quest.question}
                    answers={quest.answers}
                    correctIndex={quest.correctIndex}
                    holdAnswer={holdAnswer}
                    checked={checked}

                />
            )
        })   

    return (
        <div className="game-container">
            {!props.welcomeScreen && <div className="all-questions">
                {questions.length && questionElements}
                {!checked && <button onClick={() => checkAnswers(questions)} className="btn check-answer-btn"> Check Answers </button>}
                {checked && <span> You got {score}/5 correct</span>}
                {checked && <button onClick={playAgain} className="btn check-answer-btn"> Play Again </button>}
                {checked && <button onClick={newCategory} className="btn new-ctg-btn"> Start Over </button> }
            </div>}
        </div>
        
    )
}