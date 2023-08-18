import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardMovie from '../../components/CardMovies/CardMovie';
import Message from '../../components/Message/Message';
import './Search.scss';

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

      const arrayFilter = data.results.filter((obj) => {
        for (let chave in obj) {
          if (obj[chave] === null || obj[chave] === undefined) {
            return false;
          }
        }
        return true;
      });

      setMovies(arrayFilter);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies);

  useEffect(() => {
    const urlSearch = `${moviesURL}?query=${query}${searchMovie}`;
    getSearch(urlSearch, acessToken);
    console.log(urlSearch);
  }, [query]);

  return (
    <div className="container-search">
      <div className="title">
        <h2>
          Resultados para:<span className="query">{query},</span>
          {movies.length} filmes encontrados.
        </h2>
      </div>
      <span className="query-text"> .</span>
      <div className="movies-container">
        {movies.length === 0 && <Message msg="Carregando..." />}
        {movies.length > 0 &&
          movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
