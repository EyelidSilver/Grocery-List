import React from "react";

function ListItem(props) {
  const { productItems, onClick } = props;
  const items = productItems.map((item) => (
    <li
      key={item.id}
      value={item.title}
      className="list-item"
      onClick={() => onClick(item)}
    >
      {item.title} {item.qty}
    </li>
  ));

  return <div>{items}</div>;
}

export default ListItem;
