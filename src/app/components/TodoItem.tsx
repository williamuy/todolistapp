// src/components/TodoItem.tsx
"use client";
import React from "react";

interface TodoItemProps {
  task: string;
  // Include other properties like completion status, handlers for delete & toggle, etc.
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{task}</h2>
        {/* Add buttons or toggles for complete/delete actions */}
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  );
};

export default TodoItem;
