import React from "react";

function InputField(props) {
  const { onClick, onKeyUp } = props;
  return (
    <div className="inputContainer">
      <input
        type="text"
        onKeyUp={onKeyUp}
        placeholder="add an item"
        className="input"
        id="newItem"
      ></input>
      <button type="submit" className="input-submit" onClick={onClick}>
        +
      </button>
    </div>
  );
}

export default InputField;
