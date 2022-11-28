import React from 'react'
import { TaskNotes } from '../interfaces'
import styles from '../styles/Home.module.css'

interface Props {
    task: TaskNotes;
    completeTask(taskNameToDelete: string): void;
    index: Number;
}

const TodoTaskNotes = ({ task, completeTask, index }: Props) => {
  return (
    <div className='w-[500px] h-[50px] flex text-black m-15px m-2 border-b-4'>
        <div className='flex-[80%] h-full flex justify-center items-center'>
            <span className='grid items-center border-none w-full h-full text-lg'>{String(index)}. {task.taskName}</span>
        </div>
        <button className='flex-[20%] h-full bg-vivid-red border-none hover:text-white hover:bg-red-600 cursor-pointer' onClick={() => {completeTask(task.taskName)}}>X</button>
    </div>
  )
}

export default TodoTaskNotes