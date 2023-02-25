import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete, currentCategory }) {
  const filteredTasks = tasks.filter((task) => {
    if (currentCategory === task.category || currentCategory === "All") {
      return true;
    }
    return false;
  })
  const taskList = filteredTasks.map((task, index) =>
    <Task task={task} key={index} onDelete={onDelete} />
  )

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
