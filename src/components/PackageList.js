import { useState } from "react";
import Item from "./Item";
export default function PackageList({
  items,
  onDeleteItems,
  onToggleItems,
  onDeleteAllItems
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItemes;

  if (sortBy === "input") sortedItemes = items;

  if (sortBy === "description")
    sortedItemes = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItemes = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul className="list">
        {sortedItemes.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}{" "}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sorts by input ordered</option>
          <option value="description">Sorts by description value</option>
          <option value="packed">Sorts by packed items</option>
        </select>
        <button onClick={onDeleteAllItems}>Clear list</button>
      </div>
    </div>
  );
}
