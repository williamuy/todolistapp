// src/pages/index.tsx
import TodoList from "./components/TodoList";
// src/pages/index.tsx
import AddTodoForm from "./components/AddTodoForm";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">My Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
