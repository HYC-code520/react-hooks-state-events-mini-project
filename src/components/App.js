import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

 function handleDeleteTask(taskText) {
  const updatedTasks = tasks.filter((task) => task.text !== taskText);
  setTasks(updatedTasks);
 }

 function handleCategorySelect(category) {
  setSelectedCategory(category);
 }

 function handleTaskFormSubmit (newTask) {
  setTasks([...tasks, newTask]);
 }

 const visibleTasks = tasks.filter((task) =>
 selectedCategory === "All" ? true : task.category === selectedCategory
);


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} //categories is the prop we name when giving it CATEGORIES data array
        // props allow data to flow from parents to child component
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      /> 
      <TaskList tasks={visibleTasks} onDeleteTask={(taskText) =>{
        const updatedTasks = tasks.filter((task) => task.text !== taskText);
        setTasks(updatedTasks);
      }}/>
    </div>
  );
}

export default App;
