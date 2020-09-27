import React from "react";
import BookListing from "../BookListing/BookListing";

export default function BookList(props) {
  const bookList = this.props.books.map((books, i) => (
    <BookListing {...books} />
  ));
  return <div>{props.books}</div>;
}
