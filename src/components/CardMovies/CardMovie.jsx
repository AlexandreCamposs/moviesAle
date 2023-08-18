import './CardMovie.scss';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const img = 'https://image.tmdb.org/t/p/w500/';

const CardMovie = ({ movie, showLink = true }) => {
  const formatVote = (vote) => {
    return parseFloat(vote.toFixed(1));
  };

  return (
    <div className="card-movie ">
      <img src={img + movie.poster_path} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {formatVote(movie.vote_average)}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default CardMovie;
