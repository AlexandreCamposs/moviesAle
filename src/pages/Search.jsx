import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardMovie from '../components/CardMovie';
import Message from '../components/Message';

const moviesURL = 'https://api.themoviedb.org/3/search/movie';
const searchMovie = '&include_adult=false&language=en-US&page=1';
const acessToken = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGY1ZDEzNjVjMDk5MmExMjJhYzVjMzk5Y2FkMGZhZCIsInN1YiI6IjY0YjFkNGE0MGJiMDc2MDBlYjI4M2ExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOIenz69kJtT4avuMza_0hn-xkeQlg9XW0eNbE0t6Tk',
  },
};

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearch = async (url, token) => {
    try {
      const res = await fetch(url, token);
      console.log(res);
      const data = await res.json();
      console.log(data);

      console.log(data);

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies);

  useEffect(() => {
    const x = `${moviesURL}?query=${query}${searchMovie}`;
    getSearch(x, acessToken);
    console.log(x);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <Message msg="Carregando..." />}
        {movies.length > 0 &&
          movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
