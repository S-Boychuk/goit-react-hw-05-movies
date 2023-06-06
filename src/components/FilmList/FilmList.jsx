import css from './FilmList.module.css';
import { Link } from 'react-router-dom';

const FilmList = ({ movies }) => {
  return (
    <ul className={css['movies-list']}>
      {movies.map(movie => (
        <li className={css['movies-list-item']} key={movie.id}>
          <Link className={css['movies-list-link']} to={`${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
