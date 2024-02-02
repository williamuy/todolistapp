"use client";
import React from "react";
import { useTodoStore } from "../store/todoStore";

interface TodoItemProps {
  id: number;
  task: string;
  completed: boolean;
  urgency: "Low" | "Medium" | "High";
  dueDate: string;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  task,
  completed,
  urgency,
  dueDate,
}) => {
  const toggleCompletion = useTodoStore((state) => state.toggleCompletion);

  const urgencyIndicatorClass = {
    Low: "bg-green-500", // Green bubble for low urgency
    Medium: "bg-yellow-500", // Yellow bubble for medium urgency
    High: "bg-red-500", // Red bubble for high urgency
  }[urgency];

  return (
    <div className="card shadow-xl relative">
      {/* Urgency indicator bubble */}
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
        <h2 className={`card-title ${completed ? "line-through" : ""}`}>
          {task}
        </h2>
        <p>Due: {new Date(dueDate).toLocaleDateString()}</p>
        {urgency}
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  );
};

export default TodoItem;
