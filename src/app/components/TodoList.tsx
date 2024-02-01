"use client";
import { useTodoStore } from "../store/todoStore"; // Assuming you have a Zustand store for todos
// src/components/TodoList.tsx
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} />
      ))}
    </div>
  );
};

export default TodoList;
