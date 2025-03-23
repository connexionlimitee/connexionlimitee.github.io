import React from "react";
import "./App.css";
import booksText from "./booksText";

const Book = ({ book, lang }) => {
  const {
    title,
    author,
    translation_publisher,
    translation_year,
    pub_date,
    original_publisher,
    cover_image_url,
    order_url,
    original_year,
    reviews,
  } = book;

  const parsed_pub_date = new Date(pub_date);

  const coming_soon = parsed_pub_date - Date.now() >= 0;
  const time_diff_in_hours = Math.abs(parsed_pub_date - Date.now()) / 3600000
  return (
    <span className="book-container">
      <a href={order_url}>
        <img
          className="book-image"
          src={cover_image_url || null}
          alt={`Cover of ${author}'s ${title}`}
        />
      </a>
      {coming_soon ? <span className="pill-container red">{booksText[lang].coming_soon}</span>
      : time_diff_in_hours < 4380 ? <span className="pill-container teal">{booksText[lang].out_now}</span>
    : null}
      <h3>
        <a href={order_url}> {title} </a>
      </h3>
      <h4>{author}</h4>
     {coming_soon ?
        lang==='en' ?
          <p className="red">{`Coming ${parsed_pub_date.toLocaleString('default', { month: 'long' })} ${translation_year} from ${translation_publisher}`}</p>
          : <p className="red">{`Sortie en ${parsed_pub_date.toLocaleString('fr', { month: 'long' })} ${translation_year} chez ${translation_publisher}`}</p>
        : time_diff_in_hours < 4380 ? <p className="red">{booksText[lang].new_release}</p> :
        <></>}
        <p>{`${translation_publisher}, ${translation_year}`}</p>
      <p>{`${booksText[lang].originally_published_by} ${original_publisher}, ${original_year}`}</p>
      {reviews?.length &&
      <>
        <h4>{booksText[lang].reviews_title}</h4>
        {reviews.map((review) => (
          <p>
            <a href={review.url}>{review.text}</a>
          </p>
        ))}
      </>}
    </span>
  );
};

export default Book;
