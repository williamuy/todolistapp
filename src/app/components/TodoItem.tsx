// Import necessary modules
"use client";
import React, { useState } from "react";
import { useTodoStore } from "../store/todoStore";

// Define the props for the TodoItem component
interface TodoItemProps {
  id: number;
  task: string;
  completed: boolean;
  urgency: "Low" | "Medium" | "High";
  dueDate: string;
}

// Define the TodoItem component
const TodoItem: React.FC<TodoItemProps> = ({
  id,
  task,
  completed,
  urgency,
  dueDate,
}) => {
  // Get the necessary functions from the todo store
  const { toggleCompletion, updateTodo, deleteTodo } = useTodoStore(
    (state) => ({
      toggleCompletion: state.toggleCompletion,
      updateTodo: state.updateTodo,
      deleteTodo: state.deleteTodo,
    }),
  );

  // Define state variables for editing the todo item
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [editedUrgency, setEditedUrgency] = useState(urgency);
  const [editedDueDate, setEditedDueDate] = useState(dueDate);

  // Define the saveEdits function, which is called when the user saves their edits
  const saveEdits = () => {
    if (!editedTask.trim() || !editedDueDate) {
      alert("Task and Due Date cannot be empty.");
      return;
    }
    updateTodo(id, {
      task: editedTask,
      urgency: editedUrgency,
      dueDate: editedDueDate,
    });
    setIsEditing(false);
  };

  // Define the class for the urgency indicator based on the urgency level
  const urgencyIndicatorClass = {
    Low: "bg-green-500",
    Medium: "bg-yellow-500",
    High: "bg-red-500",
  }[urgency];

  // Render the todo item
  return (
    <div className="card shadow-xl relative">
      <span
        className={`absolute top-3 right-3 h-5 w-5 ${urgencyIndicatorClass} rounded-full m-2`}
        aria-hidden="true"
      ></span>
      <div className="card-body">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompletion(id)}
          className="checkbox checkbox-primary mr-2"
        />
        {isEditing ? (
          // If the item is being edited, render the edit form
          <>
            <input
              className="input input-bordered"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
            />
            <select
              className="select select-bordered mt-2"
              value={editedUrgency}
              onChange={(e) =>
                setEditedUrgency(e.target.value as "Low" | "Medium" | "High")
              }
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <input
              type="date"
              className="input input-bordered mt-2"
              value={editedDueDate}
              onChange={(e) => setEditedDueDate(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={saveEdits}>
              Save
            </button>
            <button
              className="btn btn-error mt-2 ml-2"
              onClick={() => deleteTodo(id)}
            >
              Delete
            </button>
          </>
        ) : (
          // If the item is not being edited, render the item details
          <>
            <h2 className={`card-title ${completed ? "line-through" : ""}`}>
              {task}
            </h2>
            <p>Due: {formatDateWithoutTimezone(dueDate)}</p>
            <div className="flex gap-2">
              <button
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button className="btn btn-error" onClick={() => deleteTodo(id)}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Export the TodoItem component
export default TodoItem;

// Define a helper function to format a date without the timezone
function formatDateWithoutTimezone(dateString: string | number | Date) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
