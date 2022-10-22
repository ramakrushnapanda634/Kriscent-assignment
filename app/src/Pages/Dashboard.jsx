// - You should have one more route for `/dashboard`.
// get the data from local storage and display it in the UI.
// - In Dashboard page show results of all users who participated in quiz along with their scores.
// - User who scores highest marks should be at the top of list.

import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Dashboard.module.css"
const Dashboard = () => {
   const name = localStorage.getItem("name")
    const score = localStorage.getItem("score")
    const total = localStorage.getItem("total")
    const navigate = useNavigate()
    const handleRestart = () => {
        navigate("/")
    }
    return (
        <div className={styles.DashboardContainer}>
            <h1>Dashboard</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{score}</td>
                    <td>{total}</td>
                </tr>
            </table>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}

export default Dashboard