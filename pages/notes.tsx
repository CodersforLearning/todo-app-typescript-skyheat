import React, { ChangeEvent, FC, useState } from 'react'
import ClearAll from '../Components/ClearAll';
import TodoTaskNotes from '../Components/TodoTaskNotes';
import { TaskNotes } from '../interfaces';

const Notes: FC = () => {

  const[task, setTask] = useState<string>("");
  const[todoList, setTodoList] = useState<TaskNotes[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  }

  const addTask = (): void => {
    const newTask = {taskName: task, complete: false};
    setTodoList([...todoList, newTask]);
    setTask("");
  }

  const completeTask = (taskIndexToMark: number): void => {
    todoList.splice(taskIndexToMark, 1)
    setTodoList([...todoList])
  }

  const markTask = (taskIndexToMark: number): void => {
    todoList[taskIndexToMark].complete = !todoList[taskIndexToMark].complete
    console.log(todoList[taskIndexToMark].complete)
    console.log(todoList)
  }

  const completeAllTasks = () : void => {
    setTodoList([])
    console.log(todoList)
  }

  return (
    <div className='flex items-center flex-col w-screen h-screen p-8 bg-cultured'>
        <div className='items-start'>
            <h1 className="text-rich-black ">List</h1>
        </div>
        <div>
                {todoList.map((task: TaskNotes, key: number) =>{
                    return (
                        <TodoTaskNotes key={key} task={task} index={key+1} markTask={markTask} completeTask={completeTask}/>          
                    )
                })}
            <div className='flex w-[500px] h-[50px] m-2 border-b-4'>
                <input className='flex-[80%] bg-cultured appearance-none outline-none h-[40px] border-none pl-2.5' type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
                <button className='flex-[20%] h-[40px] border-none cursor-pointer bg-strong-cyan hover:text-cultured' onClick={addTask}>Add Task</button>
            </div>
            <div className='flex justify-center mt-4'>
                {todoList.length > 0 && <ClearAll completeAllTasks={completeAllTasks}/>}
            </div>
        </div>
    </div>
  )
}

export default Notes