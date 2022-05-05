import React from "react";

const Input = ({ textBox, changeOnTextBox }) => {
  return (
    <>
      <input
        className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
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
