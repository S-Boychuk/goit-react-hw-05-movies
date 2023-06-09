import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovies } from '../services/MoviesApi';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const httpGetParamMovieName = searchParams.get('name') ?? '';

  const styles = {
    marginTop: '20px',
    fontSize: '24px',
    fontWeight: 700,
  };

  const getSearchQuery = searchQuery => setSearchQuery(searchQuery);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!httpGetParamMovieName) {
          return;
        } else {
          const response = await getSearchMovies(httpGetParamMovieName);
          setSearchMovies(response.results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setSearchParams, httpGetParamMovieName]);

  return (
    <main>
      <Section>
        <Container>
          <SearchBar getSearchQuery={getSearchQuery}></SearchBar>
          {searchQuery && searchMovies.length === 0 ? (
            <p style={styles}>Sorry, we have not found any movies.</p>
          ) : (
            <MoviesList movies={searchMovies} />
          )}
        </Container>
      </Section>
    </main>
  );
};

export default Movies;
