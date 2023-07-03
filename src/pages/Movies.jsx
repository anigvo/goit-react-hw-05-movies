import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState('');
  const [loader, setLoader] = useState(false);
  const [films, setFilms] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoader(true);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjBjOWZhNTA0MDcxMTlhOWY3MWZlMTUwMGRjZWUxMCIsInN1YiI6IjY0OWYwODcwNmY2YTk5MDEzYTg5ZjQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CNFILj_LKfHuzNXrxVFMlOf4mJknB8NFdiCkmm6wFOY',
      },
    };

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US`,
        options
      )
      .then(response => {
        setFilms(response.data.results);
        setLoader(false);
      })
      .catch(error => {
        console.error(error);
        setLoader(false);
      });
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };
  const handleChange = event => {
    setMovie(event.target.value);
  };

  const buttonStatus = movie.trim() === '' ? true : false;

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie name"
          name="query"
          value={movie}
          onChange={handleChange}
        />

        <button type="submit" disabled={buttonStatus}>
          Search
        </button>
      </form>
      {!loader ? (
        query === '' ? (
          ''
        ) : (
          <ul>
            {films.length === 0 ? (
              <p>Ops! Not found films with this name.</p>
            ) : (
              films.map(film => (
                <li key={film.id}>
                  <Link
                    to={{ pathname: `/movies/${film.id}` }}
                    state={{ from: `/movies?query=${query}` }}
                  >
                    {film.name || film.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
        )
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Movie;
