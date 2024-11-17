import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useFetchTodos from "./hooks/fetchTodos";
import useMutationAddTodo from "./hooks/addTodo";
import useMutationDeleleTodo from "./hooks/deleteTodo";
import useMutationToggleComplete from "./hooks/toggleComplete";

export default function App() {
  const { data } = useFetchTodos();
  const { mutate: addTodo } = useMutationAddTodo();
  const { mutate: deleteTodo } = useMutationDeleleTodo();
  const { mutate: toggleComplete } = useMutationToggleComplete();

  return (
    <div className="min-h-screen bg-blue-300 flex flex-col items-center  py-10">
      <h1 className="text-4xl text-blue-600 mb-8">Todo List - TS</h1>
      <div className="w-full max-w-md bg-blue-400 p-6 rounded-lg shadow">
        <TodoInput onAddTodo={(text: string) => addTodo({ text })} />
        <TodoList
          todos={data}
          onToggleComplete={toggleComplete}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}
