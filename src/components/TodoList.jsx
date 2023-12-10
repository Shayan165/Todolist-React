import React from "react";
import TodoItem from "./TodoItem";
import ListStyle from "./TodoList.module.css";

function TodoList({ todos, setTodos,filteredData }) {


  let scrollbar = todos.length > 5 ? ListStyle.scrollbar : "";

  

  return (
    <>
      <div
        style={{
          width: "90%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className={scrollbar}
      >
        {filteredData && filteredData.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
