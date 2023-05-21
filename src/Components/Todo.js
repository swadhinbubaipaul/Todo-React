import React from "react";
import "./Todo.css";

const Todo = ({ item, id, onDelete }) => {
	function removeTodo(item) {
		onDelete(item);
	}

	return (
		<div className="di flex justify-center items-center ma2 br3 card">
			<div className="tl ma1 pa1 w-80">
				<li className="f3 pa1">{item}</li>
			</div>
			<button
				className="f6 f5-l button-reset pv2 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-15-l br2-ns"
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
