import React from "react";
import BookListing from "../BookListing/BookListing";

export default function BookList(props) {
  const bookList = this.props.books.map((books, i) => (
    <BookListing books={props.state.books} {...props} key={i} />
  ));
  return <div>{bookList}</div>;
}
