import React from 'react';
import styled from '@emotion/styled';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Container, HeaderNav } from 'components/Header/Header.styled';

const Header = () => {
  const LinkWrapper = styled(NavLink)`
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
  `;
  return (
    <Container>
      <HeaderNav>
        <LinkWrapper to="/" end>
          Home
        </LinkWrapper>
        <LinkWrapper to="/movies">Movies</LinkWrapper>
      </HeaderNav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Header;
