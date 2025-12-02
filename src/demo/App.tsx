import { useState } from "react";

export type Todo = {
  id: number | string;
  nameTodo: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, nameTodo: "Homeworks", completed: false }
  ]);

  const [todo, setTodo] = useState<Todo>({
    id: 0,
    nameTodo: "",
    completed: false,
  });

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setTodo(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const deleteTodo = (id: number | string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos(prev => [
      ...prev,
      { ...todo, id: crypto.randomUUID() }
    ]);

    // reset form
    setTodo({ id: 0, nameTodo: "", completed: false });
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <p>
            {todo.nameTodo} — {todo.completed ? "✔️ Completed" : "❌ Not done"}
            <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
          </p>
        </div>
      ))}

      <hr />

      <form onSubmit={handleSubmit}>
        <label htmlFor="nameTodo">Todo Name</label>
        <input
          id="nameTodo"
          name="nameTodo"
          value={todo.nameTodo} // <-- controlled input
          onChange={onChangeTodo}
        />

        <br />

        <label htmlFor="completed">Completed</label>
        <input
          id="completed"
          type="checkbox"
          name="completed"
          checked={todo.completed}
          onChange={onChangeTodo}
        />

        <button type="submit">Submit Todo</button>
      </form>

      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
}

export default App;