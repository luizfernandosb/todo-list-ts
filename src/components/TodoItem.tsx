import { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onToggleComplete,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-2 border-b last:border-none">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 "
        />
        <span className={`text-lg ${todo.completed ? "line-through text-gray-500" : "text-grey-800"}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-800 focus:outline-none">Delete</button>
    </div>
  );
}
