import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../api/api";
export default function Home() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTodosData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/todos/fetch"); 
        console.log(response.data);
        setTodos(response.data.data);
      } catch (error) {
        console.log(error);
        setError("error to fetch the todos");
      } finally {
        setLoading(false);
      }
    };
    getTodosData();
  }, []);
  if(loading){
    return <p>loading...</p>
  }
  if(error){
    return <p>{error}</p>
  }
  return (
    <div>Home</div>
    //   <div>
    //   <h2>Todos</h2>
    //   {todos.map((todo) => (
    //     <p key={todo._id}>{todo.title}</p>
    //   ))}
    // </div>
  );
}
