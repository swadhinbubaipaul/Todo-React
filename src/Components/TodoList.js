import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDelete }) => {
	return (
		<>
			<ol className="pl0-ns flex items-center justify-center flex-column-ns">
				{todos.map((item, i) => {
					return <Todo item={item} id={i} onDelete={onDelete} key={i} />;
				})}
			</ol>
		</>
	);
};

export default TodoList;
