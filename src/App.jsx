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
    if (todos && todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const loadData = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length) {
      setTodos(storedTodos);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
    <h1 style={{textAlign:"center", marginTop:"10rem"}}><img src="https://w7.pngwing.com/pngs/670/265/png-transparent-checkmark-done-exam-list-pencil-todo-xomo-basics-icon.png" width="50"/> Todo List</h1>
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
