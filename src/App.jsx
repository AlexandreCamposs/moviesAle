import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <>
          <h1>Bem-Vindo(a).</h1>
        </>
        <div className="container-app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
