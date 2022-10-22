import React from 'react'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styles from "./Quiz.module.css"
const Quiz = () => {
    const [questions,setQuestions] = useState([])
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [score,setScore] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => {
                setQuestions(data.results)
            })
    },[])
    const handleAnswer = (answer) => {
        if(answer === questions[currentQuestion].correct_answer){
            setScore(score + 1)
        }
        if(currentQuestion < questions.length - 1){
            setCurrentQuestion(currentQuestion + 1)
        }else{
            navigate("/result")
        }
    }
    localStorage.setItem("score",score)
    localStorage.setItem("total",questions.length)
    return (
        <div className={styles.quizContainer}>
            <h1>Quiz App</h1>
            {/* <h2>Score : {score}</h2> */}
            <h2>Question {currentQuestion + 1} of {questions.length}</h2>
            <h2>{questions[currentQuestion]?.question}</h2>
            <div className={styles.buttonContainer}>
            <button onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}>{questions[currentQuestion]?.correct_answer}</button>
            <button onClick={() => handleAnswer(questions[currentQuestion]?.incorrect_answers[0])}>{questions[currentQuestion]?.incorrect_answers[0]}</button>
            <button onClick={() => handleAnswer(questions[currentQuestion]?.incorrect_answers[1])}>{questions[currentQuestion]?.incorrect_answers[1]}</button>
            <button onClick={() => handleAnswer(questions[currentQuestion]?.incorrect_answers[2])}>{questions[currentQuestion]?.incorrect_answers[2]}</button>
            </div>
            <div className={styles.buttonDiv}>
            {currentQuestion > 0 && <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</button>}
            {currentQuestion < questions.length - 1 && <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>}
            {currentQuestion === questions.length - 1 && <button onClick={() => navigate("/results")}>Submit</button>}
            </div>
        </div>
    )
}
export default Quiz;