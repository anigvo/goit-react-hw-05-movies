import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState('');
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    console.log(query);
    /// fetch запрос
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
  );
};

export default Movie;
