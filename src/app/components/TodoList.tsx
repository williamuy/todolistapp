"use client"; // src/components/TodoList.tsx
import { useTodoStore } from "../store/todoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          urgency={todo.urgency}
          dueDate={todo.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoList;
