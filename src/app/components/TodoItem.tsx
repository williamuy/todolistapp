// src/components/TodoItem.tsx
"use client";
// src/components/TodoItem.tsx
// src/components/TodoItem.tsx
import React from "react";

interface TodoItemProps {
  task: string;
  urgency: "Low" | "Medium" | "High";
}

const TodoItem: React.FC<TodoItemProps> = ({ task, urgency }) => {
  // Define color classes for each urgency level
  const urgencyColorClass = {
    Low: "bg-green-400", // Green box for low urgency
    Medium: "bg-yellow-400", // Yellow box for medium urgency
    High: "bg-red-400", // Red box for high urgency
  };

  return (
    <div className="card shadow-xl">
      <div className="card-body">
        {/* Small colored box for urgency indicator */}
        <span
          className={`inline-block w-3 h-3 mr-2 rounded-full ${urgencyColorClass[urgency]}`}
          aria-hidden="true"
        ></span>
        <h2 className="card-title">{task}</h2>
        <p>Urgency: {urgency}</p> {/* Display urgency text */}
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  );
};

export default TodoItem;
