"use client";
import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  urgency: "low" | "medium" | "high";
  dueDate: string; // ISO string format
  completed: boolean;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const day = ("0" + (date.getUTCDate() + 1)).slice(-2); // Add 1 to the date
  return `${year}-${month}-${day}`;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [urgency, setUrgency] = useState<"low" | "medium" | "high">("medium");

  const addTodo = () => {
    if (!todoInput.trim() || !dueDate.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: todoInput,
      urgency: urgency,
      dueDate: formatDate(dueDate), // Format the due date
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoInput("");
    setDueDate("");
    setUrgency("medium"); // Reset to default or keep as last selected
  };

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="input input-bordered input-primary w-full max-w-xs"
        placeholder="Add a new todo"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="input input-bordered input-primary w-full max-w-xs ml-2"
      />
      <select
        value={urgency}
        onChange={(e) =>
          setUrgency(e.target.value as "low" | "medium" | "high")
        }
        className="select select-bordered select-primary w-full max-w-xs ml-2"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={addTodo} className="btn btn-primary ml-2">
        Add Todo
      </button>
      <div className="divider"></div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`py-2 ${todo.completed ? "text-gray-400" : ""}`}
          >
            <div>
              <span>{todo.text}</span>
              <span> | Urgency: {todo.urgency}</span>
              <span> | Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
              <button
                onClick={() => toggleCompleted(todo.id)}
                className={`btn btn-xs ${todo.completed ? "btn-secondary" : "btn-success"} ml-2`}
              >
                {todo.completed ? "Completed" : "Mark as complete"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
