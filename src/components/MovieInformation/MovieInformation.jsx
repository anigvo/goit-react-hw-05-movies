import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieInformation = ({
  filmImg,
  filmdDate,
  filmTitle,
  filmVote,
  filmOverview,
  filmGenres,

}) => {
  const releaseYear = new Date(filmdDate).getFullYear();
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <div>
          {filmImg ? (
            <img src={filmImg} alt={filmTitle} />
          ) : (
            <p>Ops, image not found</p>
          )}
        </div>

        <div>
          <h1>
            {filmTitle} ({releaseYear})
          </h1>
          <p>User score: {Math.round(filmVote * 10) + `%`}</p>
        </div>
        <div>
          <h2>Overview</h2>
          <p>{filmOverview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <ul>
            {filmGenres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieInformation;
