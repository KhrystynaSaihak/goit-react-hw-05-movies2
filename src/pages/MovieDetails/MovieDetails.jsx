import { Outlet, NavLink, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Moment from 'moment';
import { getMovieById } from 'services/themoviedbService';
import {
  BackBtn,
  Container,
  Description,
  LinkBox,
} from './MovieDetails.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const [movieData, movieDataSet] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async id => {
      try {
        const response = await getMovieById(id);
        movieDataSet(response);
        setGenres(response.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(movieId);
  }, [movieId]);
  return (
    <main>
      <BackBtn to={backLink}> Go back</BackBtn>
      <Container>
        <img src={IMG_URL + movieData.poster_path} alt=""></img>
        <Description>
          <h3>
            {movieData.original_title}(
            {Moment(movieData.release_date).format('YYYY')})
          </h3>
          <div>User Score: {movieData.vote_count}%</div>
          <div>
            <h3>Overview</h3>
            {movieData.overview}
          </div>
          <div>
            <h3>Genres</h3>
            {genres.map(({ name }) => (
              <span key={name}>{name} </span>
            ))}
          </div>
        </Description>
      </Container>
      <div>
        <h3>Additional information</h3>
        <LinkBox>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </LinkBox>
        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetails;
