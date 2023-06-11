import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { getMovieCasts } from '../../services/MoviesApi';
import css from './Cast.module.css';
import noFound from '../../not-found.jpg';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await getMovieCasts(movieId);
        setCasts(response.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCastData();
  }, [movieId]);

  if (!casts) {
    return;
  }

  return (
    <Section>
      <Container>
        <ul className={css['casts-list']}>
          {casts.map(({ profile_path, name, character, id }) => (
            <li className={css['casts-list-item']} key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : noFound
                }
                alt="actor`s"
                width="220"
                height="320"
              ></img>
              <p className={css['casts-text']}>{name}</p>
              <p className={css['casts-text']}>Character: {character} </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Cast;
