import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardMovie from '../../components/CardMovies/CardMovie';
import { Link } from 'react-router-dom';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from 'react-icons/bs';

const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'api_key=b0f5d1365c0992a122ac5c399cad0fad';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState('');

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
    console.log(movieUrl);
    getMovie(movieUrl);
  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="card-container">
      {movie && (
        <>
          <CardMovie movie={movie} showLink={false} />
          <h2>{movie.tagline}</h2>
          <div className="inf">
            <h2>
              <BsWallet2 /> Orçamento :
            </h2>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="inf">
            <h2>
              <BsGraphUp /> Receita:
            </h2>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="inf">
            <h2>
              <BsHourglassSplit /> Duração:
            </h2>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info-description">
            <h2>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h2>
            <p>{movie.overview}</p>
          </div>
          <Link to="/">Voltar</Link>
        </>
      )}
    </div>
  );
};

export default Movie;
