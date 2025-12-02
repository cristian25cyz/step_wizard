import { useTodos } from "./src/hooks/useTodos";
import { useTodoForm } from "./src/hooks/useTodoForm";
import { TodoList } from "./src/components/TodoList";
import { TodoForm } from "./src/components/TodoForm";

function App() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
  const { todo, onChange, handleSubmit } = useTodoForm(addTodo);

  return (
    <div>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <hr />

      <TodoForm
        todo={todo}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;