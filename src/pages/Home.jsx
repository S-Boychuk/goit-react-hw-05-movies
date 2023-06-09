import { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/MoviesApi';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <h1>Trending today</h1>
          <MoviesList movies={trendingMovies} />
        </Container>
      </Section>
    </main>
  );
};

export default Home;
