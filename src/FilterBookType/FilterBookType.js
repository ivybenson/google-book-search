import React from "react";

export default function FilterBookType(props) {
  return (
    <div>
      <form>
        <label>Book Type:</label>
        <select>
          <option>All</option>
          <option>Partial</option>
          <option>Full</option>
          <option>Free-ebooks</option>
          <option>Paid-ebooks</option>
          <option>Ebooks</option>
        </select>
      </form>
    </div>
  );
}
