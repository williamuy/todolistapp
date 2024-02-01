// src/pages/index.tsx
import Counter from "./components/counter";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Counter App</h1>
      <Counter />
    </div>
  );
};

export default Home;
