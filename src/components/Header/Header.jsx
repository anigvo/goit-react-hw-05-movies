import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
