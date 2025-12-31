import { Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';

function App() {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

