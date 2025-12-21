import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = () => {
    if (!text || !date) return;
    addTodo(text, date);
    setText("");
    setDate("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default TodoForm;
