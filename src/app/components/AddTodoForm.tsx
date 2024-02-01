// src/components/AddTodoForm.tsx
"use client";
import React, { useState } from "react";
import { useTodoStore } from "../store/todoStore";

const AddTodoForm = () => {
  const [task, setTask] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit" className="btn btn-primary mt-2">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
