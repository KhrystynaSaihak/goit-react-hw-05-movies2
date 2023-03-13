import { getTrendingMovies } from 'services/themoviedbService';
import { useState, useEffect } from 'react';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MoviesList movies={trendingMovies}></MoviesList>
    </main>
  );
};

export default Home;
