import React from 'react'
import styles from '../styles/Home.module.css'

interface Props {
    completeAllTasks(): void;
}

const ClearAll = ({ completeAllTasks }: Props) => {
  return (
    <div className='pb-8'>
        <button className='flex-auto h-[50px] w-[200px] bg-vivid-red border-none hover:text-cultured hover:bg-red-600 cursor-pointer' onClick={completeAllTasks}>Clear All</button>
    </div>
  )
}

export default ClearAll