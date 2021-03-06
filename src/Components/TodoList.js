import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div>
      <ol className="pl0-ns">
        {todos.map((item, i) => {
          return <Todo item={item} id={i} onDelete={onDelete} key={i} />;
        })}
      </ol>
    </div>
  );
};

export default TodoList;
