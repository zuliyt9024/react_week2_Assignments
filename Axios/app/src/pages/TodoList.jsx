
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <h2>Loading Todos...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            <Link to={`/todo/${todo.id}`}>
              <strong>{todo.title}</strong>
            </Link>
            <p>Status: {todo.completed ? " Completed" : " Pending"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
