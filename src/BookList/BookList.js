import React from "react";
import BookListing from "../BookListing/BookListing";

export default function BookList(props) {
  return (
    <div>
      {props.books.map((book, i) => (
        <BookListing book={book} key={i} />
      ))}
    </div>
  );
}

BookList.defaultProps = {
  books: [],
};
