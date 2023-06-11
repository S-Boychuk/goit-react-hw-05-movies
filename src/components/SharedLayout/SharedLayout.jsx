import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const styles = {
    marginTop: '30px',
    fontSize: '24px',
    fontWeight: 700,
  };

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
      <Suspense
        fallback={
          <Container>
            <div style={styles}>Loading page...</div>
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
