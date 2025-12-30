



import React, { useState, Suspense } from "react";

const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  console.log(" Parent Component Rendered");

  const handleAddOrUpdate = () => {
    if (input === "") return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = input;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }

    setInput("");
  };


  const handleDelete = (index) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };


  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo & Lazy Loading Demo</h1>

      
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      {count > 0 && (
        <p style={{ marginTop: "10px", color: "blue" }}>
          Counter {count} baar click ho chuka hai.
        </p>
      )}

      <hr />

   
      <h2> hii my crud operation </h2>

      <input
        type="text"
        value={input}
        placeholder="Enter item"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAddOrUpdate} style={{ marginLeft: "10px" }}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)} style={{ marginLeft: "10px" }}>
              Edit
            </button>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: "5px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <hr />

      <Suspense fallback={<h3>Loading Heavy Component...</h3>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
