import React from 'react'
import { TaskNotes } from '../interfaces'
import styles from '../styles/Home.module.css'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
    task: TaskNotes;
    completeTask(taskIndexToMark: number): void;
    index: Number;
    markTask(taskIndexToMark: number): void;
}

const TodoTaskNotes = ({ task, completeTask, index, markTask }: Props) => {
  return (
    <div className='transition-all ease-in-out delay-150 w-[500px] h-[50px] flex text-black m-15px m-2 border-b-4'>
        <div className='flex-[80%] h-full flex justify-center items-center'>
          <span onClick={() => {markTask(Number(index)-1)}} className={`items-center border-none w-full text-lg hover:line-through hover:cursor-pointer ${task.complete ? 'line-through hover:no-underline' : ''}`}>{String(index)}. {task.taskName}</span>
        </div>
        {/*<button className='flex-[20%] h-fullborder-none cursor-pointer' onClick={() => {completeTask(Number(index)-1)}}>*/}
        <XMarkIcon className="transition-all ease-in-out delay-250 cursor-pointer stroke-1 hover:stroke-2" onClick={() => {completeTask(Number(index)-1)}}/>
        {/*</div></button>*/}
    </div>
  )
}

export default TodoTaskNotes