import { useEffect, useState, Suspense } from 'react';
import { NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import Container from 'components/Container/Container';
import GeneralMovieInformation from 'components/GeneralMovieInformation/GeneralMovieInformation';
import Section from 'components/Section/Section';
import { getMovieGeneralInformation } from '../../services/MoviesApi';
import css from './MoviesDetails.module.css';

const MoviesDetails = () => {
  const [movieInformation, setMovieInformation] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieGeneralInformation(movieId);
        setMovieInformation(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } =
    movieInformation;

  const navLinkClassName = ({ isActive }) =>
    isActive ? css['active'] : css['nav-link'];

  return (
    <main>
      <Section>
        <Container>
          <GeneralMovieInformation
            posterPath={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            title={title}
            popularity={vote_average}
            overview={overview}
            genres={
              genres &&
              genres.length &&
              genres.map(({ name }) => name).join(', ') + '.'
            }
          ></GeneralMovieInformation>
          <ul className={css['navLink-list']}>
            <li>
              <NavLink
                state={location.state}
                className={navLinkClassName}
                to="cast"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                state={location.state}
                className={navLinkClassName}
                to="reviews"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </Container>
      </Section>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
