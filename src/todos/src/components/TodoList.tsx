import { TodoItem } from "./TodoItem";
import type { Todo } from "../../types/Todo";

interface Props {
  todos: Todo[];
  onToggle: (id: string | number) => void;
  onDelete: (id: string | number) => void;
}

export function TodoList({ todos, onToggle, onDelete }: Props) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}