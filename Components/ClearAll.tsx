import React from 'react'
import { TrashIcon } from '@heroicons/react/outline'

interface Props {
    completeAllTasks(): void;
}

const ClearAll = ({ completeAllTasks }: Props) => {
  return (
    <div className='pb-8'>
        <TrashIcon className='hover:animate-pulse flex-auto h-[50px] stroke-1 cursor-pointer' onClick={completeAllTasks}/>
    </div>
  )
}

export default ClearAll