"use client";
// Import necessary modules
import React, { useState } from "react";
import { useTodoStore } from "../store/todoStore";

// Define the AddTodoForm component
const AddTodoForm = () => {
  // Define state variables for the task, urgency, and due date
  const [task, setTask] = useState("");
  const [urgency, setUrgency] = useState<"Low" | "Medium" | "High">("Low");
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  // Get the addTodo function from the todo store
  const addTodo = useTodoStore((state) => state.addTodo);

  // Define the handleSubmit function, which is called when the form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTodo(task, urgency, dueDate);
      setTask("");
      setUrgency("Low"); // Reset to default after adding
      setDueDate(new Date().toISOString().split("T")[0]); // Reset due date to today
    }
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <select
        className="select select-bordered w-full max-w-xs mt-2"
        value={urgency}
        onChange={(e) =>
          setUrgency(e.target.value as "Low" | "Medium" | "High")
        }
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        className="input input-bordered w-full max-w-xs mt-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Add Todo
      </button>
    </form>
  );
};

// Export the AddTodoForm component
export default AddTodoForm;
