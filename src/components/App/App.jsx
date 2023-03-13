import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedMenuLayout } from 'components/SharedMenuLayout/SharedMenuLayout';
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<SharedMenuLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetails />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
