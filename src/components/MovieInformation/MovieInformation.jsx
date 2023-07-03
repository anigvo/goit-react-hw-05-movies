import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import {
  List,
  TextBox,
  Box,
  Img,
  ImgBox,
  TextWrapper,
} from 'pages/Base.styled';
import styled from '@emotion/styled';

const MovieInformation = ({
  filmImg,
  filmdDate,
  filmTitle,
  filmVote,
  filmOverview,
  filmGenres,
}) => {
  const releaseYear = new Date(filmdDate).getFullYear();
  const ItemLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover,
    &:focus {
      color: blue;
    }
  `;
  return (
    <>
      <Box>
        <ImgBox>
          {filmImg ? (
            <Img src={filmImg} alt={filmTitle} />
          ) : (
            <p>Ops, image not found</p>
          )}
        </ImgBox>

        <TextWrapper>
          <div>
            <h1>
              {filmTitle} ({releaseYear})
            </h1>
            <p>User score: {Math.round(filmVote * 10) + `%`}</p>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{filmOverview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <List>
              {filmGenres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </List>
          </div>
        </TextWrapper>
      </Box>

      <TextBox>
        <p>Additional Information</p>
        <List>
          <li>
            <ItemLink to="cast">Cast</ItemLink>
          </li>
          <li>
            <ItemLink to="reviews">Reviews</ItemLink>
          </li>
        </List>
      </TextBox>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInformation;

MovieInformation.propTypes = {
  filmImg: PropTypes.string.isRequired,
  filmdDate: PropTypes.string.isRequired,
  filmTitle: PropTypes.string.isRequired,
  filmVote: PropTypes.number.isRequired,
  filmOverview: PropTypes.string.isRequired,
  filmGenres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
