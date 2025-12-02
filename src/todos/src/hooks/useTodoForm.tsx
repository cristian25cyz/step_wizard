import { useState } from "react";
import type { Todo } from "../../types/Todo";

export function useTodoForm(addTodo: (todo: Todo) => void) {
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    nameTodo: "",
    completed: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    setTodo(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setTodo({
      id: 0,
      nameTodo: "",
      completed: false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    resetForm();
  };

  return {
    todo,
    onChange,
    handleSubmit,
    resetForm,
  };
}