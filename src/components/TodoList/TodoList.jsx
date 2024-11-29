import React, { useState } from "react";
import "./TodoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleTaskKeyDown = (event, index) => {
    // Allow marking task as complete with Enter or Space
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent default space scrolling
      toggleTaskCompletion(index);
    }
  };

  const handleAddTaskKeyDown = (event) => {
    // Allow adding task with Enter key
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="todo-list">
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleAddTaskKeyDown}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span
              onClick={() => toggleTaskCompletion(index)}
              onKeyDown={(e) => handleTaskKeyDown(e, index)}
              tabIndex={0} // Make span focusable
              role="button" // Improve accessibility
              aria-pressed={task.completed}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
