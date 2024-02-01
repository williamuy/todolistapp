// src/store/todoStore.ts
import { create } from "zustand";
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (task: string) => void;
  // other methods like removeTodo, toggleTodo, etc.
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (task) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: state.todos.length + 1, task, completed: false },
      ],
    })),
  // implement other methods
}));
