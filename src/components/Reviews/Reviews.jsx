import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  const reviewsUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;

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
        .get(reviewsUrl, options)
        .then(response => {
          setReviews(response.data.results);
          setLoading(false);
          setLoader(false);
        })
        .catch(error => {
          setError(true);
          setLoading(false);
          setLoader(false);
        });
    }
  }, [loading, reviewsUrl]);

  return (
    <>
      {!loader ? (
        error ? (
          <>Ops! Not found!</>
        ) : (
          <>
            {reviews.length === 0 ? (
              <p>We don't have any reviews for this movie.</p>
            ) : (
              <ul>
                {reviews.map(review => (
                  <li key={review.id}>
                    <h4>Author: {review.author}</h4>
                    <p>{review.content}</p>
                  </li>
                ))}
              </ul>
            )}
          </>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Reviews;
