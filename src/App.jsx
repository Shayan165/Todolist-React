import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputTxt, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  const saveData = () => {
    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const loadData = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(storedTodos);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="borderstyle">
        <Form
          inputTxt={inputTxt}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          status={status}
          setFilteredData={setFilteredData}
          saveData={saveData}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredData={filteredData}
          inputTxt={inputTxt}
        />
      </div>
    </>
  );
}

export default App;
