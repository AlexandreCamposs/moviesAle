import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './NavBar.scss';

const NavBar = () => {
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
      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </div>
  );
};

export default NavBar;
