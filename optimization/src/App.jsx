import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import ProductList from "./Components/ProductList";
function App() {
  const [count, setCount] = useState(0);
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 8000 },
    { id: 3, name: "Headphone", price: 4000 },
  ];
  const totalPrice = useMemo(() => {
    console.log("Calculating the total Price...");
    return products.reduce((total, item) => total + item.price, 0);
  }, [products]);

  const handleSelectProduct = useCallback((Product) => {
    console.log("selected Product:", Product.name);
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Product Store </h2>
      <h3>Total Price:Rupees{totalPrice}</h3>
      <button onClick={() => setCount(count + 1)}>Counter:{count}</button>
      <hr />

      <ProductList products={products} onSelectProduct={handleSelectProduct} />
    </div>
  );
}

export default App;
