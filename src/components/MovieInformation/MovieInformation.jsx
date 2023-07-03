import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInformation;

MovieInformation.propTypes = {
  filmImg: PropTypes.string.isRequired,
  filmdDate: PropTypes.string.isRequired,
  filmTitle: PropTypes.string.isRequired,
  filmVote: PropTypes.number.isRequired,
  filmOverview: PropTypes.string.isRequired,
  filmGenres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
