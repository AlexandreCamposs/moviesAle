import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Footer from './pages/Footer';
import Search from './pages/Search';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />

        <div className="container-app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
