import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import css from './GeneralMovieInformation.module.css';
import noFound from '../../not-found.jpg';

const GeneralMovieInformation = ({
  posterPath,
  title,
  popularity,
  overview,
  genres,
}) => {
  const location = useLocation();

  return (
    <div className={css['information-wrapper']}>
      <img
        src={posterPath ? posterPath : noFound}
        alt="Movie`s poster"
        width="200"
      ></img>
      <div className={css['text-wrapper']}>
        <div className={css['btn-wrapper']}>
          <Link to={location.state} className={css['go-back-btn']}>
            Back
          </Link>
          <h1 className={css['section-main-title']}>{title}</h1>{' '}
        </div>
        <p className={css['section-text']}>
          User rating: {popularity} from 10.
        </p>
        <h2 className={css['section-second-title']}>Overview</h2>
        <p className={css['section-text']}>{overview}</p>
        <h2 className={css['section-second-title']}>Genres</h2>
        <p>{genres}</p>
      </div>
    </div>
  );
};

GeneralMovieInformation.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  popularity: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
};

export default GeneralMovieInformation;
