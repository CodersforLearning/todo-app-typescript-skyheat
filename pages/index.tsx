import Head from 'next/head'
import Image from 'next/image'
import { FC, ChangeEvent,  useState } from 'react'
import styles from '../styles/Home.module.css'
import { Task } from '../interfaces'
import TodoTask from '../Components/TodoTask'

const Home: FC = () => {

  const[task, setTask] = useState<string>("");
  const[deadline, setDeadline] = useState<number>(0);
  const[todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
    else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))

  }

  return (
    <div className='flex items-center flex-col w-screen h-screen'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex-[30%] bg-neutral-500 w-full flex items-center justify-center flex-col'>
        <div className='flex flex-col'>
          <input className='w-200px h-40px border-none pl-2.5' type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
          <input className='w-200px h-40px border-none pl-2.5' type="number" placeholder="Deadline (in Days)..." name="deadline" value={deadline} onChange={handleChange} />
        </div>
        <button className='h-40px w-200px border-none cursor-pointer bg-neutral-200' onClick={addTask}>Add Task</button>
        
      </div>
      <div className={styles.todoList}>
        {todoList.map((task: Task, key: number) =>{
          return <TodoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div>
    </div>
  )
}

export default Home;