export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        Welcome to Take to Trip . Start adding some items to your packing list
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? `you got everything! Ready to go ✈️`
        : `You have ${numItems} itmes on your list , and you aleready packed 
      ${numPacked} (${percentage}%)`}
    </footer>
  );
}
