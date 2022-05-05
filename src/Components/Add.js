import React from "react";

const Add = ({ onButtonClick }) => {
  return (
    <>
      <button
        className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
        onClick={onButtonClick}
      >
        Add
      </button>
    </>
  );
};

export default Add;
