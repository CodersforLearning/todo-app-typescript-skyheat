import React from 'react'
import { TaskNotes } from '../interfaces'
import styles from '../styles/Home.module.css'

interface Props {
    task: TaskNotes;
    completeTask(taskIndexToMark: number): void;
    index: Number;
    markTask(taskIndexToMark: number): void;
}

const TodoTaskNotes = ({ task, completeTask, index, markTask }: Props) => {
  return (
    <div className='w-[500px] h-[50px] flex text-black m-15px m-2 border-b-4'>
        <div className='flex-[80%] h-full flex justify-center items-center'>
          <span className='grid items-center border-none w-full h-full text-lg'>{String(index)}. {task.taskName}</span>
        </div>
        <button onClick={() => {markTask(Number(index)-1)}}>complete</button>
        <button className='flex-[20%] h-full bg-vivid-red border-none hover:text-white hover:bg-red-600 cursor-pointer' onClick={() => {completeTask(Number(index)-1)}}>X</button>
    </div>
  )
}

export default TodoTaskNotes