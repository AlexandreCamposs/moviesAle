import './Home.scss';

import { useEffect, useState } from 'react';
import Message from '../../components/Message/Message';
import CardMovie from '../../components/CardMovies/CardMovie';
import { url, key } from '../../config/utils';

const moviesURL = url;
const apiKey = key;
const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getUrl = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json().catch((err) => err);

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

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
