import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);
  const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  console.log(cast);
  useEffect(() => {
    if (loading) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjBjOWZhNTA0MDcxMTlhOWY3MWZlMTUwMGRjZWUxMCIsInN1YiI6IjY0OWYwODcwNmY2YTk5MDEzYTg5ZjQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CNFILj_LKfHuzNXrxVFMlOf4mJknB8NFdiCkmm6wFOY',
        },
      };
      axios
        .get(castUrl, options)
        .then(response => {
          console.log(response.data.cast);
          setCast(response.data.cast);

          setLoading(false);
        })
        .catch(error => {
          setError(true);
          setLoading(false);
        });
    }
  }, [castUrl, loading]);

  return (
    <>
      {error ? (
        <>Ops! Not found!</>
      ) : (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.original_name}
                />
              ) : (
                <img
                  src={`https://www.redwaterschool.ca/all_img/default-staff.png`}
                  alt={actor.original_name}
                />
              )}

              <p>{actor.original_name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
