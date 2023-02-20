import React from "react";
import "./App.css";
import booksText from "./booksText";

const Book = ({ book, lang }) => {
  const {
    title,
    author,
    translation_publisher,
    translation_year,
    original_publisher,
    cover_image_url,
    order_url,
    original_year,
  } = book;
  return (
    <span>
      <a href={order_url}>
        <img
          className="book-image"
          src={cover_image_url}
          alt={`Cover of ${author}'s ${title}`}
        />
      </a>
      <h3>
        <a href={order_url}> {title} </a>
      </h3>
      <h4>{author}</h4>
      <p>{`${translation_publisher}, ${translation_year}`}</p>
      <p>{`${booksText[lang].originally_published_by} ${original_publisher}, ${original_year}`}</p>
    </span>
  );
};

export default Book;
