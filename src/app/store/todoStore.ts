// Import the create function from zustand
import create from "zustand";

// Define the Todo interface
interface Todo {
  id: number; // Unique identifier for the todo
  task: string; // The task description
  completed: boolean; // Whether the task is completed
  urgency: "Low" | "Medium" | "High"; // The urgency level of the task
  dueDate: string; // The due date of the task
}

// Define the TodoState interface
interface TodoState {
  todos: Todo[]; // The list of todos
  addTodo: (
    task: string,
    urgency: "Low" | "Medium" | "High",
    dueDate: string,
  ) => void; // Function to add a new todo
  toggleCompletion: (id: number) => void; // Function to toggle the completion status of a todo
  deleteTodo: (id: number) => void; // Function to delete a todo
  updateTodo: (id: number, updatedFields: Partial<Todo>) => void; // Function to update a todo
}

// Create the todo store using zustand
export const useTodoStore = create<TodoState>((set) => ({
  todos: [], // Initialize the list of todos as an empty array
  addTodo: (task, urgency, dueDate) =>
    // Define the addTodo function
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1, // Assign a new id to the new todo
          task,
          completed: false, // Initialize the new todo as not completed
          urgency,
          dueDate,
        },
      ],
    })),
  toggleCompletion: (id) =>
    // Define the toggleCompletion function
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  deleteTodo: (id) =>
    // Define the deleteTodo function
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  updateTodo: (id, updatedFields) =>
    // Define the updateTodo function
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo,
      ),
    })),
}));
