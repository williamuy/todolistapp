// Import necessary modules
"use client";
import { useTodoStore } from "../store/todoStore";
import TodoItem from "./TodoItem";

// Define the TodoList component
const TodoList = () => {
  // Get the list of todos from the todo store
  const todos = useTodoStore((state) => state.todos);

  // Render the list of todos
  return (
    <div>
      {todos.map((todo) => (
        // For each todo in the list, render a TodoItem component
        // Pass the todo's properties as props to the TodoItem component
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

// Export the TodoList component
export default TodoList;
