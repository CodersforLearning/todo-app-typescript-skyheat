import React from 'react'
import { Task } from '../interfaces'
import styles from '../styles/Home.module.css'

interface Props {
    task: Task;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className='w-[500px] h-[50px] flex text-black m-15px mt-2'>
        <div className='flex-[80%] h-full flex justify-center items-center'>
            <span className='grid place-items-center w-full h-full text-lg bg-neutral-200'>{task.taskName}</span>
            <span className='grid place-items-center w-full h-full text-lg bg-neutral-200'>{task.deadline}</span>
        </div>
        <button className='flex-[20%] h-full bg-red-500 hover:text-white hover:bg-red-600 cursor-pointer' onClick={() => {completeTask(task.taskName)}}>X</button>
    </div>
  )
}

export default TodoTask