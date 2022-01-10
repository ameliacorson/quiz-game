                    
                questions:
                    id: nanoid(),
                    question: quest.question,
                    correctIndex: correctIndex,
                    answers: 
                        answertext: answer,
                        id: nanoid(),
                        isHeld: false,
                        isCorrect: answerArray.indexOf(answer) === correctIndex ? true : false
