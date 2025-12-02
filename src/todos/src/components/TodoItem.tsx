import type { Todo } from "../../types/Todo";

interface Props {
  todo: Todo;
  onToggle: (id: string | number) => void;
  onDelete: (id: string | number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.nameTodo}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}