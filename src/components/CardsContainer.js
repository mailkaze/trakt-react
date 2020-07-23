import React from "react";
import "./cardsContainer.css";
import { Card } from "./Card";
import { useSelector } from "react-redux";

export const CardsContainer = () => {
  const movieData = useSelector((store) => store.movieData);

  return (
    <div className="cards-container">
      {movieData.length !== 0 ? (
        movieData
          .filter((el) => el.img)
          .map((el) => <Card element={el} key={el.imdb} />)
      ) : (
        <div className="empty">
          <span>Search something!</span>
          <i className="fas fa-ticket-alt"></i>
        </div>
      )}
    </div>
  );
};
