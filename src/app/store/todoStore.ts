import create from "zustand";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  urgency: "Low" | "Medium" | "High";
  dueDate: string;
}

interface TodoState {
  todos: Todo[];
  addTodo: (
    task: string,
    urgency: "Low" | "Medium" | "High",
    dueDate: string,
  ) => void;
  toggleCompletion: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, updatedFields: Partial<Todo>) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (task, urgency, dueDate) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          task,
          completed: false,
          urgency,
          dueDate,
        },
      ],
    })),
  toggleCompletion: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  updateTodo: (id, updatedFields) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo,
      ),
    })),
}));
