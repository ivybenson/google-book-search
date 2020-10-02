import React, { Component } from "react";

import BookList from "../BookList/BookList";

class BookSearchApp extends Component {
  state = {
    books: [],
    query: "book",
    printType: "all",
    filter: "",
  };

  onChange = (e) => {
    e.preventDefault();
    const { value } = e.target.query;
    this.setState(
      {
        query: value,
      },
      () => this.search()
    );
  };

  componentDidMount() {
    this.search();
  }

  onCLick() {
    this.removeClass();
  }
  search() {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&printType=${this.state.printType}&key=AIzaSyDQnKCvPg_jk-unlSmtCtrFzOvq5g37L-Q`;
    if (this.state.filter !== "") {
      url += `&filter=${this.state.filter}`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data.items });
      });
  }

  render() {
    return (
      <div>
        <header>Google Book Search</header>
        <div className="SearchBar">
          <form
            type="text"
            className="searchBar"
            onSubmit={(e) => this.onChange(e)}
          >
            <label>Search:</label>
            <input type="text" name="query" id="title" placeholder="Title" />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
          <div>
            <form>
              <label onChange={(e) => this.onChange(e)}>Print Type:</label>
              <select>
                <option>All</option>
                <option>Books</option>
                <option>Magazine</option>
              </select>
              <button onChange={(e) => this.onChange(e)}>Update Search</button>
            </form>
          </div>
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
              <button onChange={(e) => this.onChange(e)}>Update Search</button>
            </form>
          </div>
        </div>
        <div>
          <BookList books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default BookSearchApp;
