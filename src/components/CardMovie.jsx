import './CardMovie.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const img = 'https://image.tmdb.org/t/p/w500/';

const CardMovie = ({ movie }) => {
  return (
    <div className="card-container">
      <div className="card-movie">
        <img src={img + movie.poster_path} />
        <h2>{movie.title}</h2>
        <p>
          <AiOutlineStar />
          {movie.vote_average}
        </p>
        <Link to={`/movie/${movie.id}`}>Detalhes</Link>
      </div>
    </div>
  );
};

export default CardMovie;
