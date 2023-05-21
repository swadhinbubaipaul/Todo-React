import React from "react";
import "./Add.css";

const Add = ({ onButtonClick }) => {
	return (
		<>
			<button
				className="f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-20-l br2-ns br--right-ns addBtn"
				onClick={onButtonClick}
			>
				Add
			</button>
		</>
	);
};

export default Add;
