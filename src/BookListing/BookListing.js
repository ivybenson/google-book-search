import React from "react";
import "./BookListing.css";

export default function BookListing(props) {
  return (
    <li>
      <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="book" />
      <p>{props.book.volumeInfo.title}</p>
      <p>{props.book.volumeInfo.authors}</p>
    </li>
  );
}
