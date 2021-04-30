import React from "react";
import List from "./List";
import { FaShoppingCart } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function ShoppingCart(props) {
  const { productItems, removeItems, onClick } = props;
  return (
    <div className="cartList">
      <h1>
        Shopping Cart <FaShoppingCart />
      </h1>
      <button id="removeBtn" onClick={removeItems} className="removeBtn">
        <FaTrashAlt />
      </button>
      <div>
        {productItems.length === 0 && (
          <div className="emptyCartText">
            <p>Cart is empty</p>
          </div>
        )}
      </div>
      <ul>
        <List productItems={productItems} onClick={onClick} />
      </ul>
    </div>
  );
}

export default ShoppingCart;
