import { useState } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

export default function TodoInput({ onAddTodo }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input className="flex-1 p-2 border border-gray-300 rounded-md focus: outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit"
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400 focus:outline-none">Add</button>
    </form>
  );
}
