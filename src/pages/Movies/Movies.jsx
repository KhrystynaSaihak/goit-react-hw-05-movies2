import { useState, useEffect } from 'react';
import { searchMovie } from 'services/themoviedbService';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

import {
  SearchbarFormBox,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Movies.styled';
import { FaSearch } from 'react-icons/fa';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const MovieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (MovieName === '') {
      return;
    }
    setQuery(MovieName);
    const fetchMovies = async query => {
      try {
        const response = await searchMovie(query);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies(MovieName);
  }, [MovieName]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    e.target.name.value = '';
    updateQueryString(query);
    setQuery('');
  };

  return (
    <main>
      <SearchbarFormBox>
        <SearchForm onSubmit={onSubmit}>
          <SearchFormBtn type="submit">
            <FaSearch />
          </SearchFormBtn>

          <SearchFormInput
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={handleChange}
            value={query}
          />
        </SearchForm>
      </SearchbarFormBox>
      <MoviesList movies={movies}></MoviesList>
    </main>
  );
};

export default Movies;
