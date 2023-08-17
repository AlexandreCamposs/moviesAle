import axios from 'axios';
import './Home.scss';

import { useEffect, useState } from 'react';
import Message from '../components/Message';
import CardMovie from '../components/CardMovie';

const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'api_key=b0f5d1365c0992a122ac5c399cad0fad';
const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

console.log(moviesURL);
console.log(apiKey);

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getUrl = async (url) => {
    try {
      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      console.log(data);

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies);

  useEffect(() => {
    getUrl(topRatedUrl);
  }, []);

  return (
    <>
      <h1>Bem-Vindo(a).</h1>
      <div className="movies-container">
        {movies.length === 0 && <Message msg="Carregando..." />}
        {movies.length > 0 &&
          movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default Home;
