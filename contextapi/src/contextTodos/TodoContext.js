
import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // ADD
  const addTodo = (text, date) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, date }
    ]);
  };

  // DELETE
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // EDIT
  const editTodo = (id, newText, newDate) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText, date: newDate } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
