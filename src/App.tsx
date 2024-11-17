import { useState, useEffect } from "react";
import { Todo } from "../src/types/Todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleCompelte = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-blue-300 flex flex-col items-center  py-10">
      <h1 className="text-4xl text-blue-600 mb-8">Todo List - TS</h1>
      <div className="w-full max-w-md bg-blue-400 p-6 rounded-lg shadow">
        <TodoInput onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onToggleComplete={toggleCompelte}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}
