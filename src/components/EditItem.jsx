import React, { useEffect } from "react";

function EditItem({ todo, todos, setTodos, editText, setEditText }) {
  useEffect(() => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, text: editText } : item
      )
    );
  }, [editText, setTodos, todo.id]);

  return (
    <>
      <input
        type="text"
        className="form-control fs-5"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      ></input>
    </>
  );
}

export default EditItem;
