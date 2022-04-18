import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  const [category,setCategory] = useState('All')
  const [tasks,setTasks] = useState(TASKS)

  function handleNewTask(newTask){
    setTasks([...tasks,newTask])
  }


  function handleDeleteTask(deletedTask){
    setTasks(tasks.filter((task)=> task.text !== deletedTask))
  }


  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter 
      selectedCategory={category} 
      categories={CATEGORIES}
      onSelectCategory={setCategory}
      />

      <NewTaskForm
       handleNewTask={handleNewTask}
       categories={CATEGORIES.filter((cat)=> cat !== 'All')}
       onTaskFormSubmit={handleNewTask}
       />

      <TaskList 
      onDeleteTask={handleDeleteTask}
      tasks={visibleTasks}
      />
    </div>
  );
}

export default App;
