import type { Todo } from "../../types/Todo";

interface Props {
  todo: Todo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function TodoForm({ todo, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <label>Todo Name</label>
      <input
        name="nameTodo"
        value={todo.nameTodo}
        onChange={onChange}
      />

      <label>Completed</label>
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={onChange}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}