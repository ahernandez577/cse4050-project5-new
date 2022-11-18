import React, { useEffect, useState } from "react"
import TaskList from "./TaskList"

import axios from "axios"

const Task = () => {

    const [tasks, setTasks] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/task-types").then(res => {
            setTypes(res.data)
        })
        axios.get("http://localhost:3000/api/tasks").then(res => {
            setTasks(res.data)
        }) 
    }, [setTasks, setTypes])


    return <TaskList tasks={tasks} types={types}/>
}


export default Task