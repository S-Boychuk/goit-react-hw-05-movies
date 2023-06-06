import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const navLinkClassName = ({ isActive }) =>
    isActive ? css['active'] : css['nav-link'];
  return (
    <>
      <header className={css.header}>
        <Container>
          <nav className={css['site-nav']}>
            <NavLink className={navLinkClassName} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkClassName} to="/movies">
              Movies
            </NavLink>
          </nav>
        </Container>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
