import { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import CardMovie from '../components/CardMovie';

const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'api_key=b0f5d1365c0992a122ac5c399cad0fad';
const img = 'https://image.tmdb.org/t/p/w500/';

const Movie = () => {
  const { id } = useParams('');
  const [movie, setMovie] = useState();

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (error) {}
  };

  console.log(movie);
  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="card-container">
      <div className="card-movie">
        <CardMovie />
      </div>
    </div>
  );
};

export default Movie;
