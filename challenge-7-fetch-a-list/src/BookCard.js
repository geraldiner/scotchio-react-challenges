import React from "react";
import Moment from "react-moment";
import "./styles.css";

const BookCard = ({ book, index }) => {
  return (
    <div className="book">
      <h3>Book {index + 1}</h3>
      <h2>{book.name}</h2>

      <div className="details">
        <p>
          <span role="img" aria-label="person">
            👨
          </span>
          : {book.authors.join(",")}
        </p>
        <p>
          <span role="img" aria-label="book">
            📖
          </span>
          : {book.numberOfPages}
        </p>
        <p>
          <span role="img" aria-label="house">
            🏘️
          </span>
          : {book.country}
        </p>
        <p>
          <span role="img" aria-label="clock">
            ⏰
          </span>
          : <Moment format="ddd MMM DD YYYY">{book.released}</Moment>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
