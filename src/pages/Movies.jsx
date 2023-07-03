import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Main, List, Form, Input, Button } from 'pages/Base.styled';
import styled from '@emotion/styled';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState('');
  const [loader, setLoader] = useState(false);
  const [films, setFilms] = useState([]);
  const query = searchParams.get('query') ?? '';

  const ItemLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover,
    &:focus {
      color: blue;
    }
  `;

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
    <Main>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter movie name"
          name="query"
          value={movie}
          onChange={handleChange}
        />

        <Button type="submit" disabled={buttonStatus}>
          Search
        </Button>
      </Form>
      {!loader ? (
        query === '' ? (
          ''
        ) : (
          <List>
            {films.length === 0 ? (
              <p>Ops! Not found films with this name.</p>
            ) : (
              films.map(film => (
                <li key={film.id}>
                  <ItemLink
                    to={{ pathname: `/movies/${film.id}` }}
                    state={{ from: `/movies?query=${query}` }}
                  >
                    {film.name || film.title}
                  </ItemLink>
                </li>
              ))
            )}
          </List>
        )
      ) : (
        <Loader />
      )}
    </Main>
  );
};

export default Movie;
