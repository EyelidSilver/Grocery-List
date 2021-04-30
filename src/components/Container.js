import React, { useState } from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

function Container() {
  const [groceryItems, setGroceryItems] = useState([
    { id: 1, title: "apple", qty: "" },
    { id: 2, title: "bread", qty: "" },
    { id: 3, title: "milk", qty: "" },
  ]);
  const [shoppingListItems, setShoppingListItems] = useState([]);

  const handleClickGroceryItem = (product) => {
    console.log("het werkt " + product.title);
    const exist = shoppingListItems.find((x) => x.id === product.id);
    if (exist) {
      setShoppingListItems(
        shoppingListItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setShoppingListItems([...shoppingListItems, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveItemsfromShoppingCart = () => {
    setShoppingListItems([]);
  };

  const addNewItem = () => {
    let newItem = document.getElementById("newItem");
    let valueItem = newItem.value;
    console.log("NEW ITEM ADDED " + valueItem);

    let refid = 0;

    if (valueItem) {
      // let id = "";
      groceryItems.map((item) => {
        if (item.title.toLowerCase() === valueItem.toLowerCase()) {
          item.qty += 1;
          refid = item.id;
        }

        return item;
      });

      if (refid === 0) {
        let newId = groceryItems.length + 1;
        let newList = groceryItems;
        newList[newId - 1] = { id: newId, title: valueItem, qty: "" };
        setGroceryItems([...newList]);
      } else {
        setGroceryItems(groceryItems);
      }
      newItem.value = " ";
    } else alert("Empty input :,(");
  };

  const doNothing = () => {
      return null
  }

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
        addNewItem()
    }
  };

  return (
    <div>
      <nav>Grocery List</nav>
      <div className="container">
        <GroceryList
          productItems={groceryItems}
          onClick={handleClickGroceryItem}
          addNewItem={addNewItem}
          onKeyUp={handleEnterKey}
        />
        <ShoppingCart
          productItems={shoppingListItems}
          removeItems={handleRemoveItemsfromShoppingCart}
          onClick={doNothing}
        />
      </div>
    </div>
  );
}

export default Container;
