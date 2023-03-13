import img from './../../images/person.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CastContainer } from './Cast.styled';

import { getMovieCast } from 'services/themoviedbService';
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const response = await getMovieCast(id);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(movieId);
  }, [movieId]);

  return (
    <CastContainer>
      {cast.map(({ name, profile_path, character, id }) => (
        <li key={id}>
          <h4>{name}</h4>
          <img src={profile_path ? IMG_URL + profile_path : img} alt="" />
          <p>{character}</p>
        </li>
      ))}
    </CastContainer>
  );
};

export default Cast;
