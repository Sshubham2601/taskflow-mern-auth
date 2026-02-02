
import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch todos
//   useEffect(() => {
//     const getTodosData = async () => {
//       try {
//         setLoading(true);
//         const response = await api.get("/todos/fetch");
//         setTodos(response.data.data); 
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch todos");
//       } finally {
//         setLoading(false);
//       }
//     };
//     getTodosData();
//   }, []);
useEffect(() => {
  const getTodosData = async () => {
    try {
      setLoading(true);

      const response = await api.get("/todos/fetch");

      setTodos(
        Array.isArray(response.data.data)
          ? response.data.data
          : []
      );

      setError(null);
    } catch (error) {
      setError("Failed to fetch todos");
      setTodos([]); 
    } finally {
      setLoading(false);
    }
  };

  getTodosData();
}, []);

  // Create todo
  const todoCreate = async () => {
    if (!newTodo.trim()) return;

    try {
      const response = await api.post("/todos/create", {
        text: newTodo,
        completed: false,
      });

      setTodos([...todos, response.data.data]); 
      setNewTodo("");
    } catch (err) {
      setError("Failed to create todo");
    }
  };

  // Toggle status
  const todoStatus = async (id) => {
    const todo = todos.find((t) => t._id === id);

    try {
      const response = await api.put(`/todos/update/${id}`, {
        completed: !todo.completed,
      });

      setTodos(
        todos.map((t) =>
          t._id === id ? response.data.data : t
        )
      );
    } catch (err) {
      setError("Failed to update todo");
    }
  };

  // Delete todo
  const todoDelete = async (id) => {
    try {
      await api.delete(`/todos/delete/${id}`);
      setTodos(todos.filter((t) => t._id !== id));
    } catch (err) {
      setError("Failed to delete todo");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Todos</h2>

      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={todoCreate}>Add</button>

      {todos.map((todo) => (
        <div key={todo._id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => todoStatus(todo._id)}
          >
            {todo.text}
          </span>
          <button onClick={() => todoDelete(todo._id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
