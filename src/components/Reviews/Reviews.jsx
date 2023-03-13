import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'moment';
import { getMovieReviews } from 'services/themoviedbService';

import { ReviewContainer } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const response = await getMovieReviews(id);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(movieId);
  }, [movieId]);
  return (
    <ReviewContainer>
      {!reviews.length
        ? "We don't have any reviews for this movie."
        : reviews.map(({ author, content, created_at, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
              <h5>{Moment(created_at, 'YYYYMMDD').fromNow()}</h5>
            </li>
          ))}
    </ReviewContainer>
  );
};

export default Reviews;
