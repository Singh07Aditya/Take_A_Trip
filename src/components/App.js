import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "passport", quantity: 2, packed: false },
//   { id: 2, description: "charger", quantity: 1, packed: false },
//   { id: 3, description: "powerbank", quantity: 1, packed: false },
//   { id: 4, description: "toothpaste", quantity: 3, packed: false },
//   { id: 5, description: "towel", quantity: 2, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItmes(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteAll() {
    const confirmedit = window.confirm(
      "are sure you wnat to delete all the items "
    );
    if (confirmedit) setItems([]);
  }
  return (
    <div>
      <Logo />

      <Form onAddItems={handleAddItems} />
      <PackageList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItmes}
        onDeleteAllItems={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}
