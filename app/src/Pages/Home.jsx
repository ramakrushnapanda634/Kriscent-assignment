// - Build a Quiz app using react redux.
// - Refer to this documentation to retrieve trivia questions - [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)
// - In home page user can set up quiz with following information
//     - Name of the user
//     - Category (General Knowledge, Sports, Geography)
//     - Difficulty level
//     - Number of questions
    
//     Refer to this image below
    
//     ![Screenshot 2022-10-03 at 5.33.33 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fce4a424-b23d-4021-8355-b4f44025ff66/Screenshot_2022-10-03_at_5.33.33_PM.png)
    
// - When clicking on start,  user should go to `/quiz` page where questions corresponding to selected category, difficulty level should be fetched.

import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styles from "./Home.module.css"
const Home = () => {
    const [name,setName] = useState("")
    const [category,setCategory] = useState("9")
    const [difficulty,setDifficulty] = useState("easy")
    const [questions,setQuestions] = useState(10)
    const navigate = useNavigate()
    localStorage.setItem("name",name)
    const handleStart = () => {
        navigate("/quiz",{
            state : {
                name,
                category,
                difficulty,
                questions
            }
        })
    }
    return (
        <div className={styles.homeContainer}>
            <h1>Quiz App</h1>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="9">General Knowledge</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
            </select>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <input type="number" value={questions} onChange={(e) => setQuestions(e.target.value)}/>
            <button onClick={handleStart}>Start</button>
        </div>
    )
}

export default Home