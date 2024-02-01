"use client";
import { useCounterStore } from "../store/store";

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-2xl">Count: {count}</div>
      <div className="flex space-x-2">
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
        <button className="btn w-64 rounded-full" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
