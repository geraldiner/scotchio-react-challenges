import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ScotchInfoBar from "./ScotchInfoBar";
import BookCard from "./BookCard";
import "./styles.css";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(apiURL);
      await setBooks(res["data"]);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      {/* <div>
        <button className="fetch-button">Fetch Data</button>
        <br />
      </div> */}

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
        {books.map((book, index) => {
          return <BookCard key={index} book={book} index={index} />;
        })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
