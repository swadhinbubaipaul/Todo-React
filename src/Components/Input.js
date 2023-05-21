import React from "react";
import "./Input.css";

const Input = ({ textBox, changeOnTextBox }) => {
	return (
		<>
			<input
				className="f6 f5-l input-reset fl black-80 bg-white pa3 lh-solid w-80-l br3-ns br--left-ns inp"
				placeholder="Enter Items"
				type="text"
				name="todos"
				id="todos"
				value={textBox}
				onChange={changeOnTextBox}
			/>
		</>
	);
};

export default Input;
