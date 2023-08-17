import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './NavBar.scss';
import { useState } from 'react';

const NavBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search == '') return;

    navigate(`/search?q=${search}`);

    setSearch('');
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h2>
          <Link to="/">
            <BiCameraMovie />
            MoviesAle
          </Link>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search || ''}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </div>
  );
};

export default NavBar;
