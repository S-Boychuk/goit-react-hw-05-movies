import { useState, useEffect } from 'react';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import SearchBar from 'components/SearchBar/SearchBar';
import FilmList from 'components/FilmList/FilmList';
import { getSearchMovies } from '../services/MoviesApi';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const getSearchQuery = searchQuery => setSearchQuery(searchQuery);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSearchMovies(searchQuery);
        setSearchMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <main>
      <Section>
        <Container>
          <SearchBar getSearchQuery={getSearchQuery}></SearchBar>
          <FilmList movies={searchMovies}></FilmList>
        </Container>
      </Section>
    </main>
  );
};

export default Movies;
