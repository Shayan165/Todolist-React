import React from "react";
import { useEffect } from "react";

function Form({
  inputTxt,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
  setFilteredData,
  saveData
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTxt.length > 0) {
      setTodos([
        ...todos,
        { text: inputTxt, id: Date.now(), completed: false, isEditing: false },
      ]);
    }
    setInputText("");
    saveData();
  };

  let filterdata = () => {
    switch (status) {
      case "complete":
        setFilteredData(todos.filter((item) => item.completed === true));
        break;
      case "incomplete":
        setFilteredData(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredData(todos);
    }
  };

  useEffect(() => {
    filterdata();
    saveData(); 
  }, [status, todos]);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{ marginBottom: "10%" }}
          className="input-group w-50 mt-5  ms-auto me-auto  "
        >
          <input
            type="text"
            className="form-control shadow-none border-warning"
            placeholder="Enter Task To do 😁"
            value={inputTxt}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-outline-warning"
            id="input-group-button-right"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </form>
      <select
        style={{ marginTop: "-90px", marginBottom: "100px" }}
        className="form-select w-25 ms-auto me-auto "
        onChange={(e) => setStatus(e.target.value)}
      >
        <option defaultValue>Select Filter</option>
        <option value="all">all</option>
        <option value="complete">complete</option>
        <option value="incomplete">incomplete</option>
      </select>
    </>
  );
}

export default Form;
