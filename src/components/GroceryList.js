import React from "react";
import List from "./List";
import InputField from "./InputField";
import { FaListAlt } from "react-icons/fa";

function GroceryList(props) {
  const { productItems, onClick, addNewItem, onKeyUp } = props;
  return (
    <div className="groceryList">
      <h1>
        Grocery List <FaListAlt />
      </h1>
      <InputField onClick={addNewItem} onKeyUp={onKeyUp} />
      <List productItems={productItems} onClick={onClick} />
    </div>
  );
}

export default GroceryList;
