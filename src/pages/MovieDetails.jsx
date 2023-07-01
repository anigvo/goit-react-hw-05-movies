import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmInformation, setFilmInformation] = useState([]);

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
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      )
      .then(response => {
        console.log(response.data);
        setFilmInformation(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  // const getFilmById = filmId => {
  //   return films.find(film => film.id === filmId);
  // };
  // const filmInformation = getFilmById(movieId);
  // console.log(filmInformation);

  return <div>Film: {filmInformation.id}</div>;
};

export default MovieDetails;
