import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(true);
  const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
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
          setCast(response.data.cast);
          setLoading(false);
          setLoader(false);
        })
        .catch(error => {
          setError(true);
          setLoading(false);
          setLoader(false);
        });
    }
  }, [castUrl, loading]);

  return (
    <>
      {!loader ? (
        error ? (
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
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Cast;
