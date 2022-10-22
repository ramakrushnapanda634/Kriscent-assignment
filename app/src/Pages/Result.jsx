// - In `/results` page display result in form of tabular format, which should include
//     - Correct answers count
//     - Incorrect answers count
//     - Total score
//     - Percentage
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Result.module.css"
const Result = () => {
    const navigate = useNavigate()
    const score = localStorage.getItem("score")
    const total = localStorage.getItem("total")
    const percentage = (score / total) * 100
    const handleRestart = () => {
        navigate("/dashboard")
    }
    return (
        <div className={styles.Table}>
            <h1>Result</h1>
            <h2>Correct Answers : {score}</h2>
            <h2>Incorrect Answers : {total - score}</h2>
            <h2>Total Score : {score}/{total}</h2>
            <h2>Percentage : {percentage}%</h2>
            <button onClick={handleRestart}>Dashboard</button>
        </div>
    )
}

export default Result