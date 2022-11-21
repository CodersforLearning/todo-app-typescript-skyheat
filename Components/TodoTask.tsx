import React from 'react'
import { Task } from '../interfaces'
import styles from '../styles/Home.module.css'

interface Props {
    task: Task;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className={styles.task}>
        <div className={styles.content}>
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={() => {completeTask(task.taskName)}}>X</button>
    </div>
  )
}

export default TodoTask