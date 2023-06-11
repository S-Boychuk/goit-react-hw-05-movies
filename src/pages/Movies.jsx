import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovies } from '../services/MoviesApi';

const Movies = () => {
  const styles = {
    marginTop: '20px',
    fontSize: '24px',
    fontWeight: 700,
  };

  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams] = useSearchParams();

  const httpGetParamMovieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!httpGetParamMovieName) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await getSearchMovies(httpGetParamMovieName);
        setSearchMovies(response.results);
        console.log('fetched movies :>> ', response.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [httpGetParamMovieName]);

  return (
    <main>
      <Section>
        <Container>
          <SearchBar></SearchBar>
          {searchMovies && searchMovies.length > 0 ? (
            <MoviesList movies={searchMovies} />
          ) : searchMovies && searchMovies.length === 0 ? (
            <p style={styles}>Sorry, we have not found any movies.</p>
          ) : (
            ''
          )}
        </Container>
      </Section>
    </main>
  );
};

export default Movies;
