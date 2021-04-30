import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const { productItems, onClick } = props;
  return (
    <ul>
      <ListItem productItems={productItems} onClick={onClick} />
    </ul>
  );
}

export default List;
