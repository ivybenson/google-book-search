import React from "react";

export default function BookListing(props) {
  return (
    <div>
      <p>{props.books.items.volumeInfo.title}</p>
      <p>{props.books.items.volumeInfo.authors}</p>
    </div>
  );
}
