import { useState } from "react";
import type { Todo } from "../../types/Todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, nameTodo: "Homeworks", completed: false }
  ]);

  const addTodo = (todo: Todo) => {
    setTodos(prev => [
      ...prev,
      { ...todo, id: crypto.randomUUID() }
    ]);
  };

  const deleteTodo = (id: number | string) =>
    setTodos(prev => prev.filter(t => t.id !== id));

  const toggleTodo = (id: number | string) =>
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
}