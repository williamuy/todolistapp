"use client";
// Ensure this path matches the location of your Supabase client setup
import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
//test
type Todo = {
  id: number;
  text: string;
  urgency: "low" | "medium" | "high";
  due_date: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [urgency, setUrgency] = useState<"low" | "medium" | "high">("medium");

  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching todos:", error);
        return;
      }

      setTodos(data);
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!todoInput.trim() || !dueDate) {
      console.log("Required fields are missing");
      return;
    }

    const { data: insertedData, error: insertError } = await supabase
      .from("todos")
      .insert([
        {
          text: todoInput,
          urgency,
          due_date: dueDate,
          completed: false,
        },
      ]);

    if (insertError) {
      console.error("Error inserting todo:", insertError);
      return;
    }

    if (insertedData && (insertedData as Todo[]).length > 0) {
      console.log("Inserted data:", insertedData);
      setTodos((currentTodos) => [
        ...currentTodos,
        ...(insertedData as Todo[]),
      ]);
    } else {
      console.error(
        "Unexpected response structure from Supabase insert:",
        insertedData,
      );
    }
    setTodoInput("");
    setDueDate("");
    setUrgency("medium");
  };

  const toggleCompleted = async (id: number, completed: boolean) => {
    const { error } = await supabase
      .from("todos")
      .update({ completed: !completed })
      .match({ id });

    if (error) {
      console.error("Error toggling completion:", error);
      return;
    }

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !completed } : todo,
      ),
    );
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Add a new todo"
        className="input input-bordered input-primary w-full max-w-xs"
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
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`py-2 ${todo.completed ? "text-gray-400" : ""}`}
          >
            <div>
              <span>{todo.text}</span>
              <span> | Urgency: {todo.urgency}</span>
              <span>
                {" "}
                | Due: {new Date(todo.due_date).toLocaleDateString()}
              </span>
              <button
                onClick={() => toggleCompleted(todo.id, todo.completed)}
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
