// src/store/todoStore.ts
import { create } from "zustand";
interface Todo {
  id: number;
  task: string;
  completed: boolean;
  urgency: "Low" | "Medium" | "High";
}

interface TodoState {
  todos: Todo[];
  addTodo: (task: string, urgency: "Low" | "Medium" | "High") => void;
  // other methods like removeTodo, toggleTodo, etc.
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (task, urgency) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: state.todos.length + 1, task, completed: false, urgency },
      ],
    })),
  // implement other methods
}));
