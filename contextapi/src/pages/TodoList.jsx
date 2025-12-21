import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoList() {
  const { todos, deleteTodo, editTodo } = useTodo();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDate, setEditDate] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
    setEditDate(todo.date);
  };

  const handleUpdate = (id) => {
    editTodo(id, editText, editDate);
    setEditId(null);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />
              <button onClick={() => handleUpdate(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <span>
                {todo.text} — {todo.date}
              </span>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
