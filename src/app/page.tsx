// src/pages/index.tsx
// src/pages/index.tsx
import TodoList from "./components/TodoList";
const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">My Todo List</h1>
      <TodoList />
    </div>
  );
};

export default Home;
