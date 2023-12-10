import React, { useState } from "react";
import todostyle from "./TodoItem.module.css";
import EditItem from "./EditItem";

function TodoItem({ todo, todos, setTodos }) {
  const [editText, setEditText] = useState(todo.text);
  const deleteTask = () => {
    setTodos(todos.filter((ele) => ele.id !== todo.id));
  };

  const doneTask = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  let done = todo.completed === true ? todostyle.doneitem : "";

  const editTask = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  return (
    <>
      <div className="w-50 ms-auto me-auto d-flex justify-content-center align-items-center">
        <h4 style={{ width: "75%", padding: "10px" }} className={done}>
          {todo.isEditing ? (
            <EditItem
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              setEditText={setEditText}
              editText={editText}
            />
          ) : (
            todo.text
          )}
        </h4>

        <button type="button" className="btn btn-info me-2" onClick={editTask}>
          {todo.isEditing === false ? (
            <i className="fa-regular fa-pen-to-square"></i>
          ) : (
            <i className="fa-regular fa-floppy-disk"></i>
          )}
        </button>
        <button
          type="button"
          className="btn btn-success me-2"
          onClick={doneTask}
        >
          {todo.completed === false ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-clock-rotate-left"></i>
          )}
        </button>
        <button type="button" className="btn btn-danger" onClick={deleteTask}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </>
  );
}

export default TodoItem;
