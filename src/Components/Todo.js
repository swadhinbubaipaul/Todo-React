import React from "react";
import "./Todo.css";

const Todo = ({ item, id, onDelete }) => {
  function removeTodo(item) {
    onDelete(item);
  }

  return (
    <div className="di flex b--black ba justify-center items-center ma1 br3 Todo">
      <div className="tl ma3 pa2 w-70">
        <li className="f3 ma3 pa2">{item}</li>
      </div>
      <button
        className="f6 f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns"
        type="submit"
        value="Delete"
        onClick={() => {
          removeTodo(item);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
