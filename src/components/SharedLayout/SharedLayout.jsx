import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const navLinkClassName = ({ isActive }) =>
    isActive ? css['active'] : css['nav-link'];
  return (
    <>
      <header className={css.header}>
        <Container>
          <nav>
            <ul className={css['nav-list']}>
              <li>
                <NavLink className={navLinkClassName} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClassName} to="/movies">
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
