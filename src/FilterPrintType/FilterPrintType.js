import React from "react";

export default function FilterPrintType(props) {
  return (
    <div>
      <form>
        <label>Print Type:</label>
        <select>
          <option>All</option>
          <option>Books</option>
          <option>Magazine</option>
        </select>
      </form>
    </div>
  );
}
