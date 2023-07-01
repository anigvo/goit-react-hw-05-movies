import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);

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
        console.log(response.data.results);
        setFilms(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={{ pathname: `/movies/${film.id}` }}>
            {film.name || film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
