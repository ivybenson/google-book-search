import React, { Component } from "react";
// import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";
import BookList from "../BookList/BookList";

class BookSearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: "",
    };
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
    this.search(value);
  };

  componentDidMount() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=bell&key=AIzaSyDQnKCvPg_jk-unlSmtCtrFzOvq5g37L-Q`;

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
          <form type="text" className="searchBar">
            <label>Search:</label>
            <input type="text" name="title" id="title" placeholder="Title" />
            <button
              onChange={this.onChange}
              type="submit"
              className="serach-btn"
            >
              Search
            </button>
          </form>
          <FilterBar />
        </div>
        <div>
          <BookList books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default BookSearchApp;
