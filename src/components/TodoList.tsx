import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onToggleComplete,
  onDelete,
}: TodoListProps) {
  if (!todos || todos.length === 0) {
    return <p className="text-gray-500 text-center">Lista de tarefa vazia.</p>;
  }

  return (
    <div className="space-y-2 mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
