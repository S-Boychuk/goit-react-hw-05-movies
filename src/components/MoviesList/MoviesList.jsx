import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css['movies-list']}>
      {movies.map(movie => (
        <li className={css['movies-list-item']} key={movie.id}>
          <Link
            className={css['movies-list-link']}
            to={`/movies/${movie.id}`}
            state={location}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
