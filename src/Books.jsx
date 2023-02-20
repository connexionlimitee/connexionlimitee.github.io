import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import booksText from "./booksText.js";
import Book from "./Book";

const Books = ({ lang }) => {
  const text = booksText[lang];
  return (
    <div id="books">
      <h2>{text.title}</h2>
      <span className="inline">
        {text.books.map((book) => (
          <Book book={book} lang={lang} />
        ))}
      </span>
    </div>
  );
};

export default Books;
