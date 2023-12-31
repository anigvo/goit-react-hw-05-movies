import { useParams, useLocation, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieInformation from 'components/MovieInformation/MovieInformation';
import Loader from 'components/Loader/Loader';
import { Main, Button } from 'pages/Base.styled';
import styled from '@emotion/styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmImg, setFilmImg] = useState(``);
  const [filmdDate, setFilmDate] = useState('');
  const [filmTitle, setFilmTitle] = useState('');
  const [filmVote, setFilmVote] = useState('');
  const [filmOverview, setFilmOverview] = useState('');
  const [filmGenres, setFilmGenres] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(true);
  const responseUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const ItemLink = styled(Link)`
    text-decoration: none;
    color: black;
  `;

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
        .get(responseUrl, options)
        .then(response => {
          if (response.data.poster_path) {
            setFilmImg(
              `https://image.tmdb.org/t/p/w300${response.data.poster_path}`
            );
          } else {
            setFilmImg(
              `https://www.flagstaff365.com/wp-content/themes/apollo/inc/admin/assets/images/placeholder-1.png`
            );
          }
          setFilmDate(response.data.release_date);
          setFilmTitle(response.data.original_title);
          setFilmVote(response.data.vote_average);
          setFilmOverview(response.data.overview);
          setFilmGenres(response.data.genres);
          setLoading(false);
          setLoader(false);
        })
        .catch(error => {
          setError(true);
          setLoading(false);
          setLoader(false);
        });
    }
  }, [loading, responseUrl]);

  return (
    <Main>
      {!loader ? (
        error ? (
          <>Ops! Not found!</>
        ) : (
          <>
            <Button>
              <ItemLink to={backLinkHref}>Go back</ItemLink>
            </Button>
            <MovieInformation
              filmImg={filmImg}
              filmdDate={filmdDate}
              filmTitle={filmTitle}
              filmVote={filmVote}
              filmOverview={filmOverview}
              filmGenres={filmGenres}
            />
          </>
        )
      ) : (
        <Loader />
      )}
    </Main>
  );
};

export default MovieDetails;
