import React from "react";
import "./BookListing.css";

export default function BookListing(props) {
  return (
    <li>
      <div className="image">
        {props.book.volumeInfo.imageLinks && (
          <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="book" />
        )}
      </div>
      <div className="info">
        <h3>{props.book.volumeInfo.title}</h3>
        <p>Author: {props.book.volumeInfo.authors}</p>
        <p>
          Price: $
          {props.book.saleInfo.listPrice &&
            props.book.saleInfo.listPrice.amount}
        </p>
        <p>Description: {props.book && props.book.volumeInfo.description}</p>
        <hr></hr>
      </div>
    </li>
  );
}
