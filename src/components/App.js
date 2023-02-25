import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
const [tasks, setTasks] = useState(TASKS)
const [currentCategory, setCurrentCategory] = useState("All")

function handleDeleteTask(taskDelete) {
const newTasks = tasks.filter((task) => {
  if (taskDelete.text === task.text) {
    return false
  }
  return true
});
setTasks(newTasks);
}

function onTaskFormSubmit(newTask) {
  setTasks([...tasks, newTask])
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      currentCategory={currentCategory} 
      setCurrentCategory={setCurrentCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES} 
      onTaskFormSubmit={onTaskFormSubmit} 
      />
      <TaskList 
      tasks={tasks} 
      onDelete={handleDeleteTask} 
      currentCategory={currentCategory} 
      />
    </div>
  );
}

export default App;
