import React, { ChangeEvent, FC, useState } from 'react'
import ClearAll from '../Components/ClearAll';
import TodoTaskNotes from '../Components/TodoTaskNotes';
import { TaskNotes } from '../interfaces';
import { PlusIcon } from '@heroicons/react/24/outline';
import Title from '../Components/Title';

const Notes: FC = () => {

  const[task, setTask] = useState<string>("");
  const[todoList, setTodoList] = useState<TaskNotes[]>([]);
  const[title, setTitle] = useState<string>("list")
  const[isEditable, setIsEditable] = useState<boolean>(false);
  const[navBarOpen, setNavBarOpen] = useState<boolean>(false);

  const handleNavBar = (): void => {
    setNavBarOpen(!navBarOpen)
  }

  const handleTitleChange = (): void => {
    setIsEditable(!isEditable)
  }

  const handleTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

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

  //who this fuck off
  const markTask = (taskIndexToMark: number): void => {
    //todoList[taskIndexToMark].complete = !todoList[taskIndexToMark].complete
    setTodoList(prev => prev.map((item, i) => i === taskIndexToMark ? ({
        ...item,
        complete: !item.complete
      }) : item))

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
                <Title title={title} isEditable={isEditable} handleTitle={handleTitle} handleTitleChange={handleTitleChange}></Title>
            </div>
            <div>
                    {todoList.map((task: TaskNotes, key: number) =>{
                        return (
                            <TodoTaskNotes key={key} task={task} index={key+1} markTask={markTask} completeTask={completeTask}/>          
                        )
                    })}
                <div className='flex w-[500px] h-[50px] m-2 border-b-4'>
                    <input className='flex-[80%] bg-cultured appearance-none outline-none h-[40px] border-none pl-2.5' type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
                    {/*<button className='flex-[20%] h-[40px] border-none cursor-pointer bg-strong-cyan hover:text-cultured' onClick={addTask}>Add Task</button>*/}
                    <PlusIcon className='transition-all ease-in-out delay-250 cursor-pointer stroke-1 hover:stroke-2' onClick={addTask}/>
                </div>
                <div className='flex justify-center mt-4'>
                    {todoList.length > 0 && <ClearAll completeAllTasks={completeAllTasks}/>}
                </div>
            </div>
        </div>
  )
}

export default Notes