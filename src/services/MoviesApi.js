import axios from 'axios';

const API_KEY = 'ca82fe14c900979050efbda0f1b9589e';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchMovies(searchQuery) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { getTrendingMovies, getSearchMovies };
