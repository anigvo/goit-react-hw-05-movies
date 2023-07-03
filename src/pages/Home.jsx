import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Main, List } from 'pages/Base.styled';
import styled from '@emotion/styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(true);

  const ItemLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover,
    &:focus {
      color: blue;
    }
  `;

  useEffect(() => {
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
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
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
  }, []);

  return (
    <Main>
      {!loader ? (
        <List>
          {films.map(film => (
            <li key={film.id}>
              <ItemLink
                to={{ pathname: `/movies/${film.id}` }}
                state={{ from: '/' }}
              >
                {film.name || film.title}
              </ItemLink>
            </li>
          ))}
        </List>
      ) : (
        <Loader />
      )}
    </Main>
  );
};

export default Home;
